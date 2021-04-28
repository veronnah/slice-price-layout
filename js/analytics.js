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



Chart.elements.Rectangle.prototype.draw = function() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;
    var cornerRadius = 7;

    if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    if (borderWidth) {
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;

        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);

        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
    
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;


    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];


    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }


    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];
        
        var radius = cornerRadius;
        

        if(radius > height/2){
            radius = height/2;
        }if(radius > width/2){
            radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
}; 


var ctx = document.getElementById('thirdChart').getContext('2d');   
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
       datasets: [{
            label: '# of Votes',
            data: [7, 13, 16, 16, 20, 20 ,13 , 10, 10, 25, 30, 35],
            borderWidth: 0,
            backgroundColor: [
                "#E3E3E3",
                "#ACACAC",
                "#ACACAC",
                "#ACACAC",
                "#0FA31E",
                "#0FA31E", 
                "#E3E3E3", 
                "#E3E3E3", 
                "#0FA31E", 
                "#0FA31E", 
                "#40C34E", 
                "#40C34E", 
            ],
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
            display: false,
          
        },
    
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor:'#333'
                },
    
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
                        stepSize: 25,
                     
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
       
    }
});