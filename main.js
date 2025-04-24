// Scroll suave para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const objetivo = document.querySelector(this.getAttribute('href'));
      if (objetivo) {
        objetivo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Aparecer las secciones al hacer scroll
  const secciones = document.querySelectorAll('.seccion');
  
  const aparecerSeccion = (entrada, observador) => {
    entrada.forEach(entradaActual => {
      if (entradaActual.isIntersecting) {
        entradaActual.target.classList.add('visible');
        observador.unobserve(entradaActual.target); // Solo una vez
      }
    });
  };
  
  const observador = new IntersectionObserver(aparecerSeccion, {
    threshold: 0.1
  });
  
  secciones.forEach(seccion => {
    seccion.classList.add('invisible'); // Inicialmente oculto
    observador.observe(seccion);
  });
 
window.onload = function () {
  const ctx = document.getElementById('radarChart').getContext('2d');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Python', 'Diseño', 'Trabajo en equipo', 'Creatividad', 'Comunicación', 'Adaptabilidad'], // Habilidades
      datasets: [{
        label: 'Mis habilidades',
        data: [90, 80, 70, 85, 75, 80], // Puntos de habilidad (ajustables)
        backgroundColor: 'rgba(255, 45, 0, 0.2)', // Fondo de área
        borderColor: 'rgba(255, 45, 0, 1)', // Color de borde
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: { display: true },
          grid: { color: '#ccc' },
          ticks: {
            display: true,
            stepSize: 20,
            backdropColor: 'rgba(0, 0, 0, 0.5)',
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          bodyColor: '#fff',
        }
      }
    }
  });
}
