var ctx = document.getElementById('firstChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#fff';
Chart.defaults.global.defaultFontStyle = 'light';

var firstChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [{
            label: 'Прибыль',
            data: [40, 53, 45, 46, 52, 45, 54.5, 47, 53, 45, 48.5, 50],
            backgroundColor: "transparent",
            pointBorderColor: "#00D917",
            pointBackgroundColor: "#00D917",
            borderColor: "#00D917",
        }, {
            label: 'Расходы',
            data: [35, 25, 33, 24, 27, 22, 30, 21, 25, 22.5, 23, 22],
            backgroundColor: "transparent",
            pointBorderColor: "#19DCFF",
            pointBackgroundColor: "#19DCFF",
            borderColor: "#19DCFF",
            titleColor: '#000',
        }]
    },
    options: {
        bands: {

            bandLine: {
                stroke: 2,
                color: "black",
                type: 'dashed',
                label: 'Band line'
            },

        },
        tooltips: {
            enabled: true,
            backgroundColor: '#fff',
            titleFontColor: '#707070',
            bodyFontColor: '#707070',
            displayColors: false,

            callbacks: {
                title: function (item, everything) {
                    return;
                }
            }
        },
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.3,
                gridLines: {
                    display: true,
                    zeroLineColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.2)',
                    lineWidth: 1
                },
            }, ],
            yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: true,
                        zeroLineColor: 'transparent',

                        lineWidth: 1
                    },
                    id: 'y-axis-density',
                    display: false
                },

                {
                    id: 'y-axis-gravity',
                    display: false
                },
            ],
        },
    },
});

var ctx = document.getElementById('secondChart').getContext('2d');


var secondChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['верхняя одежда', 'нижнее белье', 'спортивная одежда'],
        datasets: [
             {
                label: 'Продажи',
                data: [50, 25, 25],
                backgroundColor: [
                  '#40C34E',
                  '#BFE053',
                  '#21DDFF'
                ],
        }]
    },
    options: {
        legend: {
            position:"left",
            labels: {
                
                fontColor:"#707070",
            }
        },
        tooltips: {
            enabled: true,
            backgroundColor: '#fff',
            titleFontColor: '#707070',
            bodyFontColor: '#707070',
            displayColors: false,

            callbacks: {
                title: function (item, everything) {
                    return;
                }
            }
        },

        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.3,
                gridLines: {
                    display: true,
                    zeroLineColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.2)',
                    lineWidth: 1
                },
            }, ],
            yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: true,
                        zeroLineColor: 'transparent',

                        lineWidth: 1
                    },
                    id: 'y-axis-density',
                    display: false
                },

                {
                    id: 'y-axis-gravity',
                    display: false
                },
            ],
        },
    },
});

