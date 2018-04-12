(() => {
  $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/new-intraday.json', function (data) {

    const chart = Highcharts.chart('linechart', {
      title: false,
      chart: {
        zoomType: 'x',
        title: false,
        spacingTop: 0,
        spacingBottom: 10,
        animation: false,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
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
        maxPadding: 0.1,
        opposite: true,
        events: {
          afterSetExtremes: (ev) => {
            return $('#max-value').html(Math.round(ev.max * 100) / 100);
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
          marker: {
            enabled: false,
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

            },
          }
          // getExtremesFromAll: true,
        },
        series: {
          point: {
            events: {
              mouseOver: function(ev) {
                const marker = this.series.stateMarkerGraphic.element;

                const makePath = () => {
                  const ns = 'http://www.w3.org/2000/svg';
                  const path = document.createElementNS(ns, "path");
                  const d = ['M', [Math.round(this.plotX) - 1, Math.round(this.plotY)], 'v', chart.plotHeight - this.plotY + 20]
                    .map(e => e instanceof Array ? e.join(', ') : e)
                    .join(' ');
                  path.setAttributeNS(null, "d", d);
                  path.setAttributeNS(null, "style", "opacity:1");
                  path.setAttributeNS(null, "class", "highcharts-custom-crosshair");

                  return path;
                }

                this.customCrosshair = makePath();

                return $( marker ).before( this.customCrosshair );
              },
              mouseOut: function(ev) {
                return $( this.customCrosshair ).remove();
              }
            }
          },
          events: {
            mouseOut: function(ev) {

            }
          },
        }
      },

      tooltip: {
        positioner: function(labelWidth, labelHeight, point) {
          const y = chart.plotHeight + chart.plotTop + 3;

          const findX = () => {
            if(point.plotX < (labelWidth / 2)) {
              return 0;
            } else if(point.plotX > chart.plotWidth - (labelWidth / 2)) {
              return chart.plotWidth - labelWidth + chart.plotLeft * 2 - 2;
            } else {
              return point.plotX - (labelWidth / 2) + chart.plotLeft;
            }
          }

          return { x: findX(), y, };
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

    $('#max-value').html(Math.round(chart.yAxis[0].max * 100) / 100);

    $('#h-btn').click(function() {
      $('.diagramm__timescale-btn').removeClass('active');

      $( this ).addClass('active');

      return chart.xAxis[0].setExtremes(Date.parse('2011-10-14T14:59'), Date.parse('2011-10-14T15:59'));
    });
    $('#d-btn').click(function() {
      $('.diagramm__timescale-btn').removeClass('active');

      $( this ).addClass('active');

      return chart.xAxis[0].setExtremes(Date.parse('2011-10-13T15:59'), Date.parse('2011-10-14T15:59'));
    });
    $('#w-btn').click(function() {
      $('.diagramm__timescale-btn').removeClass('active');

      $( this ).addClass('active');

      return chart.xAxis[0].setExtremes(Date.parse('2011-10-07T15:59'), Date.parse('2011-10-14T15:59'));
    });

    $('#all-btn').click(function() {
      $('.diagramm__timescale-btn').removeClass('active');

      $( this ).addClass('active');

      chart.xAxis[0].setExtremes(undefined, undefined);
      chart.redraw();
      return;
    });

    const infographicAnimation = animations.find(a => $( a.element ).hasClass('main-info__infographic'));

    var timer;

    const timeout = () => setTimeout(function () {
      chart.reflow();
      if(chart.hoverPoint) {
        $( chart.hoverPoint.customCrosshair ).remove();
      }

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
