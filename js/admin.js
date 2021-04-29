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
    style += '.range {background: linear-gradient(to right, #000 0%, #000 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #000 0%, #000 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 50%)}';
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