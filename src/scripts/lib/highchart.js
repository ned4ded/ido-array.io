(() => {
  $.getJSON('https://cdn.rawgit.com/highcharts/highcharts/v6.0.5/samples/data/usdeur.json', function (data) {

    const chart = Highcharts.chart('linechart', {
      chart: {
        zoomType: 'x'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      rangeSelector: {
        selected: 1
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: ''
        }
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
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data
      }]

    });

    $('#linechart').click(() => {
      console.log('yeh');
      chart.setSize($('#linechart').width(), $('#linechart').height());

    });
  }
);
})()
