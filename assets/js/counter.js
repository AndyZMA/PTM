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

  // Inicia los contadores
  animateCounter('counter1', 0, 30000, 2000); // De 0 a 30,000 en 2 segundos
  animateCounter('counter2', 0, 12000, 2000); // De 0 a 12,000 en 2 segundos