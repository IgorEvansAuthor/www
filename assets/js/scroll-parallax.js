// Scroll-based parallax. 
window.addEventListener("scroll", function () {
	const layer = document.querySelector(".scroll-parallax");
	if (!layer) return;

	const scrolled = window.scrollY;
	layer.style.transform = `translateY(${scrolled * 0.3}px)`;
});