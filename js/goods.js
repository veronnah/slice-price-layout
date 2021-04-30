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