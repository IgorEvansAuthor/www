// Cursor-based parallax. 
document.addEventListener("mousemove", function(e) {
  const layer = document.querySelector(".interactive-layer");
  if (!layer) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  layer.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.03)`;
});