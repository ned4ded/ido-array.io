(() => {
  $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json', function (data) {

    const chart = Highcharts.chart('linechart', {
      title: false,
      chart: {
        zoomType: 'x',
        title: false,
        spacingTop: 0,
        spacingBottom: 10,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        crosshair: true,
        type: 'datetime',
        min: Date.parse('2011-10-06T08:00'),
        max: Date.parse('2011-10-14T15:59'),
        offset: 10,
        align: 'center',
        minRange: 3600 * 1000,
        labels: {
          style: false,
        },
      },
      yAxis: {
        title: false,
        endOnTick: false,
        maxPadding: 0.05,
        opposite: true,
        events: {
          afterSetExtremes: (ev) => {
            return $('#max-value').html(ev.dataMax);
          }
        },
        gridLineColor: '#e6e6e6',
        gridLineDashStyle: 'Solid',
        gridLineWidth: 1,
        labels: false,
        minPadding: 0.05,
        startOnTick: false,
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, '153, 221, 255']
            ]
          },
          marker: {
            radius: 10
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null,
          events: {
            mouseOver: function (ev) {
              console.log(this);
              console.log(ev);
            },
          }
          // getExtremesFromAll: true,
        },
        series: {
          point: {
            events: {
              mouseOver: function(ev) {
                console.log('mouseover');
                console.log(this);
              },
            }
          },
          events: {
            mouseOut: function(ev) {
              console.log('mouseoout');
              console.log(this);
              console.log(ev);
            }
          },
        }
      },

      tooltip: {
        positioner: function(labelWidth, labelHeight, point) {
          const y = chart.plotHeight + chart.plotTop + 3;
          const x = point.plotX - (labelWidth / 2) + chart.plotLeft;

          return { x, y, };
        },
        shadow: false,
        animation: false,
        useHTML: true,
        backgroundColor: null,
        borderWidth: 0,
        style: {
            padding: 0
        },
        headerFormat: '',
        formatter: function() {
          const date = new Date(this.x);
          const year = date.getFullYear();
          const month = date.getMonth()+1;
          const day = date.getDate();

          const value = Math.round(this.y * 100) / 100;

          return `<span>${[day, month, year].join('.')} <span class="highcharts-tooltip--highlight">${value} ETH</span></span>`;
        },
      },

      series: [
        {
          type: 'area',
          name: 'ETH',
          data: data
        },
      ]

    });

    chart.xAxis[0].setExtremes(Date.parse('2011-10-14T14:59'), Date.parse('2011-10-14T15:59'));

    $('#max-value').html(chart.yAxis[0].dataMax);

    $('#h-btn').click(function() {
      return chart.xAxis[0].setExtremes(Date.parse('2011-10-14T14:59'), Date.parse('2011-10-14T15:59'));
    });

    $('#all-btn').click(function() {
      chart.xAxis[0].setExtremes(undefined, undefined);
      chart.redraw();
      return;
    });

    const infographicAnimation = animations.find(a => $( a.element ).hasClass('main-info__infographic'));

    var timer;

    const timeout = () => setTimeout(function () {
      chart.reflow();

      if(!timer) return;

      return timeout();
    }, 1);

    infographicAnimation.setAnimationCallback((direction, state) => {
      if(state === 'start') {
        timer = true;
        return timeout();
      } else {
        timer = false;
        return;
      }
    });
  }
);
})()
