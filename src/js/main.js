window.addEventListener('load', function(ev) {
	var root = document.getElementById('geotime');
	var lis = root.querySelectorAll('.geotime li');
	lis.forEach(function(el) {
		el.addEventListener('click', function(ev) {
			ev.stopPropagation();
			toggle(el);
		});
	})
});

var toggle = function(el) {
	var subs = el.getElementsByTagName('ul');
	[].slice.call(subs).map(function(el) {
		el.classList.toggle('hide');
	});
};