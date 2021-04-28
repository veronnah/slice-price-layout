var ctx = document.getElementById('firstChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#fff';


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
        tooltips: {
            enabled: true,
            backgroundColor: '#fff',
            titleFontColor: '#707070',
            bodyFontColor: '#707070',
            displayColors: false,
            intersect: false,

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

var data = {
    labels: ['верхняя одежда', 'нижнее белье', 'спортивная одежда'],

    datasets: [{
            data: [50, 25, 25],
            backgroundColor: [
                '#40C34E',
                '#BFE053',
                '#21DDFF'
            ],
        },
        {
            label: '37% верхняя одежда',
            backgroundColor: "#21DDFF",


        }, {
            label: '53% нижнее белье',
            backgroundColor: "#40C34E",

        }, {
            label: '10% спортивная одежда',
            backgroundColor: "#BFE053",

        }
    ]
};

var ctx = document.getElementById("secondChart");

var secondChart = new Chart(ctx, {
    type: 'doughnut',
    responsive: true,
    data: data,
    options: {
        cutoutPercentage: 0,
        legend: {
            position: "left",
            display: false,
            horizontalAlign: "center",
            labels: {
                fontColor: "#707070",
            }
        },
        legendCallback: function (chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets.length; i++) {
                text.push('<li><div class="legendValue"><span style="background-color:' + chart.data.datasets[i].backgroundColor + '">&nbsp;&nbsp;&nbsp;&nbsp;</span>');

                if (chart.data.datasets[i].label) {
                    text.push('<span class="label">' + chart.data.datasets[i].label + '</span>');
                }

                text.push('</div></li><div class="clear"></div>');
            }

            text.push('</ul>');

            return text.join('');
        },
        tooltips: {
            enabled: true,
            backgroundColor: '#fff',
            titleFontColor: '#707070',
            bodyFontColor: '#707070',
            displayColors: false,
            intersect: false,

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
                display: false,
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

$('#legend').prepend(secondChart.generateLegend());



//range input
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var totalMonthsShown = 12;

var today = new Date();
var todayMonthIndex = today.getMonth();
var todayYear = today.getFullYear();

var monthSlider = document.getElementById('month-slider');

var months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var monthLabels = [];
var monthYearLabels = [];
var monthData = [];
var lastDaysData = [];

var thisYear = todayYear;
var thisMonth = todayMonthIndex;

for (i = (totalMonthsShown - 1); i >= 0; i--) {

    monthYearLabels[i] = months[thisMonth] + ' ' + thisYear;
    monthLabels[i] = months[thisMonth];
    monthData[i] = thisYear + '-' + (thisMonth + 1);

    if (thisMonth == 1 && leapYear(thisYear)) {
        lastDaysData[i] = 29;
    } else {
        lastDaysData[i] = daysInMonths[thisMonth];
    }

    if (thisMonth == 0) {
        thisMonth = 11;
        thisYear--;
    } else {
        thisMonth--;
    }

}

var range = {
    'min': 0,
    'max': totalMonthsShown - 1
}

noUiSlider.create(monthSlider, {
    start: [totalMonthsShown - 1, totalMonthsShown - 1],
    step: 1,
    range: range,
    tooltips: true,
    connect: true,
    animate: true,
    animationDuration: 600,

});

monthSlider.noUiSlider.on('start', function () {
    $('.shortcuts li').removeClass('active');
});

monthSlider.noUiSlider.on('update', function (values, handle) {

    var monthIndex = parseInt(values[handle]);

    var prefixes = ['с ', 'по '];

    if (handle == 0) {
        var day = 1;
    } else if (handle == 1) {
        var day = lastDaysData[monthIndex];
    }

    $('.noUi-handle[data-handle="' + handle + '"]').find('.noUi-tooltip').html(prefixes[handle] + day + '.' + [monthIndex] + '.' + todayYear);


    $('.noUi-pips .noUi-value').each(function () {
        var index = $(this).html();
        $(this).html(monthLabels[index]);
    });

    var minValueIndex = parseInt(values[0]);
    var maxValueIndex = parseInt(values[1]);
    $('input[name="month-range-min"]').val(monthData[minValueIndex]);
    $('input[name="month-range-max"]').val(monthData[maxValueIndex]);

});

$('.month-slider-wrapper .shortcuts li').mousedown(function () {
    var monthPeriod = $(this).attr('data-min-range');

    var newValues = [
        (totalMonthsShown - monthPeriod),
        (totalMonthsShown - 1)
    ];

    monthSlider.noUiSlider.set(newValues);

    $('.shortcuts li').removeClass('active');
    $(this).addClass('active');

});

(function() {

	let hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),
        navWrapper: document.querySelector('.nav-toggle__wrap'),

		initialize() {
			this.navToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
            this.navWrapper.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());

//input range
var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';
  
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  for (var i = 0; i < prefs.length; i++) {
    style += '.range {background: linear-gradient(to right, #0da91d 0%, #11af22 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #0da91d 0%, #0da91d ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});