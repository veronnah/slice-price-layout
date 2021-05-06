function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var totalMonthsShown = 12;

var today = new Date();
var todayMonthIndex = today.getMonth();
var todayYear = today.getFullYear();

var monthSlider = document.querySelectorAll('.month-slider');

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


function getIndex(index){
  noUiSlider.create(monthSlider[index], {
    start: [totalMonthsShown - 1, totalMonthsShown - 1],
    step: 1,
    range: range,
    tooltips: true,
    connect: true,
    animate: true,
    animationDuration: 600,
  });

  monthSlider[index].noUiSlider.on('start', function () {
    $('.shortcuts li').removeClass('active');
});
monthSliderSelect(index);

}
function monthSliderSelect(index){
  
monthSlider[index].noUiSlider.on('update', function (values, handle) {

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

  monthSlider[index].noUiSlider.set(newValues);

  $('.shortcuts li').removeClass('active');
  $(this).addClass('active');

});
}
getIndex(2);


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