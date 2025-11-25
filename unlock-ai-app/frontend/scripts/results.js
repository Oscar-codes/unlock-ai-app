document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("resultsTable");
  const qrImg = document.getElementById("qr-img");

  // Fallback local — se usa si el backend no responde
  const fallback = {
    qr: "../assets/images/sample-qr.png",
    headers: ["Nº", "Nombres", "Apellidos", "DUI", "Teléfono"],
    rows: [
      ["1", "Juan Alfredo", "Guzmán Hernández", "25469812-7", "7625-8569"],
      ["2", "José Mauricio", "Montalvo Arzú", "04658972-6", "7988-5542"],
      ["3", "Carlos Amílcar", "Gómez Padilla", "68975248-7", "6879-6985"],
      ["4", "Ana María", "Lagos Pérez", "26589754-0", "7522-3369"],
      ["5", "Miriam Noemí", "Batres Artiga", "56985678-9", "2365-4568"],
    ],
  };

  function renderTable(headers, rows) {
    // Cabecera
    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    headers.forEach(h => {
      const th = document.createElement("th");
      th.textContent = h;
      trh.appendChild(th);
    });
    thead.appendChild(trh);

    // Cuerpo
    const tbody = document.createElement("tbody");
    rows.forEach(r => {
      const tr = document.createElement("tr");
      r.forEach(c => {
        const td = document.createElement("td");
        td.textContent = c;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.innerHTML = "";
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  async function loadResults() {
    try {
      // Si el backend está disponible, usa sus datos
      const res = await fetch("http://localhost:3000/resultado-extraccion");
      if (!res.ok) throw new Error("Respuesta no OK");
      const data = await res.json();

      // Esperamos { success: true, qr: "...", headers: [...], rows: [...] }
      if (data?.success && Array.isArray(data.headers) && Array.isArray(data.rows)) {
        if (data.qr) qrImg.src = data.qr;
        renderTable(data.headers, data.rows);
        return;
      }
      // Si la estructura no es la esperada, usamos fallback
      throw new Error("Estructura inválida");
    } catch (e) {
      // Fallback local
      qrImg.src = fallback.qr;
      renderTable(fallback.headers, fallback.rows);
      console.warn("Usando datos de ejemplo en results.js:", e.message);
    }
  }

  loadResults();
});
