function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  let current = start;
  const increment = range / (duration / 10);

  const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          current = end;
          clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
  }, 10);
}

// Configurar el Intersection Observer
const counters = document.querySelectorAll('.counter-number');
const observerOptions = {
  root: null, // Observa el viewport
  threshold: 0.5 // El 50% del elemento debe ser visible
};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const target = entry.target;
          if (!target.dataset.animated) { // Evitar reanimar el contador
              if (target.id === 'counter1') {
                  animateCounter('counter1', 0, 30000, 2000);
              } else if (target.id === 'counter2') {
                  animateCounter('counter2', 0, 12000, 2000);
              }
              target.dataset.animated = true; // Marcar como animado
          }
      }
  });
}, observerOptions);

// Observar los contadores
counters.forEach(counter => {
  counterObserver.observe(counter);
});
