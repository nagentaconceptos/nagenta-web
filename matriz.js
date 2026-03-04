document.getElementById('calculateBtn').onclick = function() {
      const results = document.getElementById('results');
      const free = document.getElementById('free-content');
      results.style.display = 'block';
      free.innerHTML = `<h3>Tu Triada de Poder</h3><p>Calculando frecuencias...</p><p>Proximamente: Integracion con base de datos astral.</p>`;
};
