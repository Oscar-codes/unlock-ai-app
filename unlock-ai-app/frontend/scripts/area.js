 document.querySelectorAll('.area-item').forEach(item => {
      item.addEventListener('click', () => {
        // Quitar selección previa
        document.querySelectorAll('.area-item').forEach(i => i.classList.remove('selected'));
        // Selección activa
        item.classList.add('selected');

        // Obtener nombre del área
        const areaName = item.querySelector('span').textContent;
        const areaId = areaName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        // Petición al backend
        fetch('http://localhost:3000/registrar-area', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: areaId })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Área seleccionada:', areaId);
          console.log('Respuesta Backend:', data);
        })
        .catch(error => console.error('Error:', error));
      });
    });