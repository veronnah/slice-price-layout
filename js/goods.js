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

//input number	
let spins = document.getElementsByClassName("spin");
for (let i = 0, len = spins.length; i < len; i++) {
    let spin = spins[i],
        span = spin.getElementsByTagName("span"),
        input = spin.getElementsByTagName("input")[0];
    
    input.onchange = function() { input.value = +input.value || 0; };
    span[0].onclick = function() { input.value = Math.max(0, input.value - 1); };
    span[1].onclick = function() { input.value -= -1; };
}