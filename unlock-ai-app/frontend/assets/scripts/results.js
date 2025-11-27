// Lógica JS extraída de 09-results.html
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

  // Obtener el ID del documento seleccionado desde sessionStorage
  const selectedDocId = sessionStorage.getItem('selectedDocId');

  // Datos quemados para cada documento
  const documentData = {
    curriculos: {
      title: 'Currículum Vitae',
      description: 'Documento de contabilidad minimalista.',
      url: 'https://res.cloudinary.com/dmddi5ncx/image/upload/v1759012835/samples/unlockIA/Curr%C3%ADculum_Vitae_Cv_de_Contabilidad_Minimalista_Azul_ycrjjl.pdf'
    },
    contratos: {
      title: 'Contrato Laboral',
      description: 'Documento estándar para acuerdos laborales.',
      url: 'https://example.com/contrato.pdf'
    },
    formularios: {
      title: 'Formulario de Registro',
      description: 'Formulario para recopilar datos de usuarios.',
      url: 'https://example.com/formulario.pdf'
    },
    informes: {
      title: 'Informe Financiero',
      description: 'Reporte anual de empresa corporativo financiero.',
      url: 'https://example.com/informe.pdf'
    },
    encuestas: {
      title: 'Encuesta para Estudiantes',
      description: 'Encuesta para recopilar opiniones de estudiantes.',
      url: 'https://example.com/encuesta.pdf'
    },
    pruebas: {
      title: 'Encuesta Futuro Tech IA',
      description: 'Encuesta sobre percepciones y expectativas de la IA.',
      url: 'https://res.cloudinary.com/dmddi5ncx/image/upload/v1759012835/samples/unlockIA/Encuesta_Futuro_Tech_IA_2024_wxqv6h.pdf'
    }
  };

  // Normalizar el ID para manejar variaciones
  let normalizedDocId = selectedDocId;

  if(normalizedDocId === null){
    normalizedDocId = 'curriculos';
  } else if (selectedDocId === 'informes financieros') {
    normalizedDocId = 'informes';
  } else if (selectedDocId === 'curriculum vitae' || selectedDocId === 'cv') {
    normalizedDocId = 'curriculos';
  } else if (selectedDocId === 'contrato laboral') {
    normalizedDocId = 'contratos';
  } else if (selectedDocId === 'formulario de registro') {
    normalizedDocId = 'formularios';
  } else if (selectedDocId === 'encuestas') {
    normalizedDocId = 'encuestas';
  } else if (selectedDocId === 'pruebas') {
    normalizedDocId = 'pruebas';
  }

  // Usar el id correcto del HTML para la tabla
  const resultsTable = document.getElementById('resultsTable');

  // Verificar que el elemento existe antes de continuar
  if (!resultsTable) {
    console.error('Error: No se encontró el elemento con id "resultsTable"');
    return; // Evita que el código intente modificar un elemento nulo
  }

  // Función para renderizar la tabla con scroll
  function renderTable(html) {
    // El scroll se aplica al contenedor .table-wrap en el HTML
    const tableWrap = document.querySelector('.table-wrap');
    if (tableWrap) {
      tableWrap.style.maxHeight = '400px';
      tableWrap.style.overflow = 'auto';
    }
    resultsTable.innerHTML = html;
  }

  // Sustituir la tabla por defecto si hay un ID seleccionado
  if (normalizedDocId && documentData[normalizedDocId]) {
    const doc = documentData[normalizedDocId];

    if (normalizedDocId === 'contratos') {
      // Generar filas sin columna de citas
      renderTable(`
        <thead>
          <tr>
            <th>Aspecto Contractual</th>
            <th>Detalle (Patrón/Trabajador)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tipo de Contrato</td><td>Contrato Individual de Trabajo</td></tr>
          <tr><td>Fecha de Firma</td><td>Veintisiete de enero de dos mil veinte</td></tr>
          <tr><td>Lugar de Firma</td><td>Chihuahua, Chih.</td></tr>
          <tr><td>Duración del Contrato</td><td>Tiempo INDETERMINADO</td></tr>
          <tr><td>Patrón (Nombre)</td><td>Centro de Investigación en Materiales Avanzados, S.C. (CIMAV)</td></tr>
          <tr><td>Patrón (Giro)</td><td>Realizar investigaciones en materiales avanzados, desarrollo y aplicación de tecnología y programas de docencia</td></tr>
          <tr><td>Patrón (Domicilio)</td><td>Ave. Miguel de Cervantes Nº 120, Complejo Industrial Chihuahua</td></tr>
          <tr><td>Trabajador (Características)</td><td>Mexicana, sexo femenino, estado civil "soltera", xxxx años de edad</td></tr>
          <tr><td>Puesto</td><td>xxxxxxxxxxxxxxxxxx (Funciones de confianza)</td></tr>
          <tr><td>Salario Mensual</td><td>$xxxxxxxxxxxxxxxxx</td></tr>
          <tr><td>Frecuencia de Pago</td><td>Quincenalmente (los días 14 y 29 ó 30), o el día anterior laborable si el día de pago es no laborable</td></tr>
          <tr><td>Método de Pago</td><td>Por medio de tarjeta electrónica</td></tr>
          <tr><td>Jornada Laboral (Días)</td><td>Lunes a viernes</td></tr>
          <tr><td>Jornada Laboral (Horario)</td><td>Inicia a las 8:30 y termina a las 16:30</td></tr>
          <tr><td>Tiempo de Descanso (Alimentos)</td><td>30 minutos (dentro o fuera de la empresa a elección del trabajador)</td></tr>
          <tr><td>Descanso Semanal</td><td>Sábado adicional al domingo (en aplicación del Art. 59 de la Ley Federal del Trabajo)</td></tr>
          <tr><td>Vacaciones Anuales</td><td>20 días laborables al año, divididos en dos periodos</td></tr>
          <tr><td>Periodos Vacacionales</td><td>Segunda quincena de julio y segunda quincena de diciembre (proporcionalmente a la fecha de ingreso)</td></tr>
          <tr><td>Aguinaldo</td><td>40 días de salario (o parte proporcional)</td></tr>
          <tr><td>Fecha Límite de Aguinaldo</td><td>Antes del 20 de diciembre</td></tr>
          <tr><td>Obligación de Confidencialidad</td><td>El trabajador se obliga a no divulgar datos, información o resultados; esta obligación es de naturaleza permanente y no cesa con la terminación del contrato</td></tr>
          <tr><td>Normatividad Supletoria</td><td>Ley Federal del Trabajo y/o Reglamento Interior de Trabajo</td></tr>
        </tbody>
      `);
    } 
    else if (normalizedDocId === 'informes') {
      renderTable(`
        <thead>
          <tr>
            <th colspan="2"><h3 style="margin: 0;">Resumen del Informe Reporte Anual de la Empresa Corporativo Financiero Violeta y Morado</h3></th>
          </tr>
          <tr>
            <th>Categoría</th>
            <th>Información Relevante</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Identificación del Reporte</strong></td><td>Reporte Financiero Industrias Ariova.</td></tr>
          <tr><td><strong>Porcentajes Clave de Desempeño</strong></td><td>Productividad: <strong>41 %</strong>.</td></tr>
          <tr><td></td><td>Incremento de Predios: <strong>41 %</strong>.</td></tr>
          <tr><td></td><td>Importaciones: <strong>26 %</strong>.</td></tr>
          <tr><td></td><td>Resumen de ventas anuales: <strong>89 %</strong>.</td></tr>
          <tr><td><strong>Desglose de Ventas Anuales (Porcentaje)</strong></td><td>2024: <strong>59.3 %</strong>.</td></tr>
          <tr><td></td><td>2023: <strong>29.6 %</strong>.</td></tr>
          <tr><td></td><td>2022: <strong>11.1 %</strong>.</td></tr>
          <tr><td><strong>Productos Descontinuados</strong></td><td>Producto 01.</td></tr>
          <tr><td></td><td>Producto 02.</td></tr>
          <tr><td></td><td>Producto 03.</td></tr>
          <tr><td><strong>Temas y Métricas Adicionales</strong></td><td>Gastos en Marketing.</td></tr>
          <tr><td></td><td>Productos nuevos.</td></tr>
          <tr><td></td><td>Publicidad en Redes Sociales.</td></tr>
          <tr><td></td><td>Productos innovadores.</td></tr>
          <tr><td><strong>Información Contextual</strong></td><td>Se incluye texto introductorio <em>Lorem ipsum dolor sit amet eget, consectetur adipiscing elit. Aliquam semper felis vel metus tincidunt, ut dignissim ex efficitur. Quisque facilisis in leo eget iaculis</em>.</td></tr>
        </tbody>
      `);
    } 
    else if (normalizedDocId === 'curriculos') {
      renderTable(`
        <thead>
          <tr>
            <th colspan="3"><h3 style="margin: 0;">Resumen del Currículum Vitae de Carla Rodríguez</h3></th>
          </tr>
          <tr>
            <th>Aspecto del CV</th>
            <th>Detalle Específico</th>
            <th>Cita(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Identificación</td><td>Nombre de la titular</td><td>Carla Rodríguez</td></tr>
          <tr><td>Título Profesional</td><td>Nivel de estudios</td><td>LIC. EN CONTABILIDAD</td></tr>
          <tr><td>Área de Interés Principal</td><td>Enfoque profesional</td><td>ÁREA DE CONTABILIDAD</td></tr>
          <tr><td>Resumen Personal (Fragmento)</td><td>Descripción genérica introductoria</td><td>Lorem ipsum dolor sit amet..., Eu augue ut lectus arcu bibendum at varius vel pharetra...</td></tr>
          <tr><td>Educación (Licenciatura)</td><td>Grado obtenido</td><td>Licenciatura en Contabilidad</td></tr>
          <tr><td>Institución (Licenciatura)</td><td>Nombre de la universidad</td><td>Universidad Alta Pinta</td></tr>
          <tr><td>Periodo (Licenciatura)</td><td>Años de estudio</td><td>2010-2014</td></tr>
          <tr><td>Educación (Posgrado/Adicional)</td><td>Grado/Curso</td><td>Diplomado en Finanzas</td></tr>
          <tr><td>Institución (Diplomado)</td><td>Nombre de la universidad</td><td>Universidad Alta Pinta</td></tr>
          <tr><td>Periodo (Diplomado)</td><td>Años de estudio</td><td>2014-2016</td></tr>
          <tr><td>Experiencia Laboral (1)</td><td>Empleador y Periodo</td><td>Empresa Borcelle, 2010-2012</td></tr>
          <tr><td>Experiencia Laboral (2)</td><td>Empleador y Periodo</td><td>Empresa Borcelle, 2012-2014</td></tr>
          <tr><td>Experiencia Laboral (3)</td><td>Empleador y Periodo</td><td>Empresa Borcelle, 2014-2016</td></tr>
          <tr><td>Habilidades (Ejemplos)</td><td>Competencias destacadas</td><td>Liderazgo, Comunicación asertiva, Gestión de activos</td></tr>
          <tr><td>Habilidades (Ejemplos)</td><td>Competencias destacadas</td><td>Resolución de problemas, Elaboración de reportes, Trabajo en equipo</td></tr>
          <tr><td>Contacto (Teléfono)</td><td>Número telefónico</td><td>(55) 1234-5678</td></tr>
          <tr><td>Contacto (Correo)</td><td>Correo electrónico</td><td>hola@sitioincreible.com</td></tr>
          <tr><td>Contacto (Web)</td><td>Sitio web</td><td>www.sitioincreible.com</td></tr>
        </tbody>
      `);
    } 
    else if (normalizedDocId === 'formularios') {
      renderTable(`
        <thead>
          <tr>
            <th colspan="3"><h3 style="margin: 0;">Resumen del Formulario de Inscripción</h3></th>
          </tr>
          <tr>
            <th>Aspecto del Formulario</th>
            <th>Detalle Específico / Título del Campo</th>
            <th>Ubicación o Contexto</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Título Principal</td><td>Identificación del documento</td><td>FORMULARIO DE INSCRIPCIÓN</td></tr>
          <tr><td>Entidad/Grupo</td><td>Entidad a la que pertenece el formulario</td><td>GRUPO ENSIGNA</td></tr>
          <tr><td>Estructura</td><td>Bloques de información solicitada</td><td>Información solicitada bloque 1, Información solicitada bloque 2</td></tr>
          <tr><td>Sección Principal</td><td>Categoría de la información inicial</td><td>Datos personales</td></tr>
          <tr><td>Campos Solicitados (Identificación)</td><td>Datos requeridos del solicitante</td><td>Nombre y apellidos, DNI</td></tr>
          <tr><td>Campos Solicitados (Contacto/Ubicación)</td><td>Datos de contacto y residencia</td><td>Correo, Dirección, CP, Ciudad, Móvil</td></tr>
          <tr><td>Campos Solicitados (Demográficos)</td><td>Datos de origen</td><td>Lugar y fecha de nacimiento</td></tr>
          <tr><td>Campos Solicitados (Formalidad)</td><td>Elementos de cierre y validación</td><td>Fecha, Firma</td></tr>
          <tr><td>Información Fija (Contacto de la Entidad)</td><td>Datos de contacto visibles en el formulario</td><td>911-234-567</td></tr>
          <tr><td>Información Fija (Dirección de la Entidad)</td><td>Dirección de contacto visible</td><td>Calle Cualquiera 123, Cualquier Lugar</td></tr>
          <tr><td>Información Fija (Web de la Entidad)</td><td>Sitio web visible</td><td>www.unsitiogenial.es</td></tr>
        </tbody>
      `);
    } 
    else if(normalizedDocId === 'encuestas') {
      renderTable(`
        <thead>
          <tr>
            <th colspan="3"><h3 style="margin: 0;">Resumen de la Encuesta para Estudiantes</h3></th>
          </tr>
          <tr>
            <th>Categoría</th>
            <th>Información/Pregunta Solicitada</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Título Principal</strong></td>
            <td>Encuesta para estudiantes</td>
            
          </tr>
          <tr>
            <td><strong>Propósito</strong></td>
            <td>Recolectar la opinión de los estudiantes al final del periodo escolar.</td>
            
          </tr>
          <tr>
            <td><strong>Sección A</strong></td>
            <td>Tres actividades que disfruté</td>
            
          </tr>
          <tr>
            <td><strong>Sección B</strong></td>
            <td>Dos personas que me gustaría mencionar por su desempeño y dedicación (profesores, preceptores, secretarios, directores)</td>
            
          </tr>
          <tr>
            <td><strong>Sección C</strong></td>
            <td>Una cosa que fue difícil para mi y quisiera que en el futuro cambie</td>
            
          </tr>
          <tr>
            <td><strong>Sección D</strong></td>
            <td>El próximo año me gustaría...</td>
            
          </tr>
        </tbody>
      `);
    } 
    else if (normalizedDocId === 'pruebas') {
      renderTable(`
        <thead>
          <tr>
            <th colspan="3"><h3 style="margin: 0;">Resumen de la Encuesta Futuro Tech IA</h3></th>
          </tr>
          <tr>
            <th>Pregunta de la Encuesta</th>
            <th>Tema Central</th>
            <th>Respuestas / Opiniones Recogidas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>¿Cómo percibes el impacto de la IA en los próximos 10 años?</b></td>
            <td>Impacto a largo plazo de la IA</td>
            <td>Se percibe que transformará profundamente la educación, salud y transporte. Se espera que acelere el desarrollo científico y tecnológico a niveles sin precedentes. La IA será parte cotidiana de la vida diaria, desde el hogar hasta el trabajo. También existe la preocupación de que podría incrementar la desigualdad si no se regula correctamente. Será una herramienta clave para la innovación en todas las industrias.</td>
          </tr>
          <tr>
            <td><b>¿Crees que la IA reemplazará más empleos o generará nuevas oportunidades?</b></td>
            <td>Efecto de la IA en el mercado laboral</td>
            <td>Habrá un <b>balance entre empleos perdidos y nuevos creados</b>. Se cree que reemplazará trabajos repetitivos, pero abrirá puestos en áreas de alta especialización. Más que reemplazar, potenciará a los trabajadores actuales. Generará nuevas oportunidades en campos que aún no existen. La reconversión laboral será clave para aprovechar el cambio.</td>
          </tr>
          <tr>
            <td><b>¿Qué sector se beneficiará más del uso de la IA?</b></td>
            <td>Beneficios sectoriales</td>
            <td>Los sectores mencionados incluyen: Transporte y logística, por la optimización de rutas y vehículos autónomos. Educación, con herramientas de aprendizaje adaptativo. Finanzas, al mejorar la detección de fraudes y toma de decisiones. La salud, gracias a diagnósticos más rápidos y personalizados. Industria tecnológica en general, como motor de innovación.</td>
          </tr>
          <tr>
            <td><b>¿Confías en las decisiones tomadas por sistemas de IA?</b></td>
            <td>Confianza y ética en la IA</td>
            <td>Confianza plenamente, ya que reducen sesgos humanos si se diseñan correctamente. Confianza parcialmente, siempre que haya supervisión humana. Todavía existe desconfianza, mencionando que falta más regulación y ética en la IA. La confianza depende del área: en medicina sí, en justicia aún no. Se confía si los algoritmos son transparentes y auditables.</td>
          </tr>
          <tr>
            <td><b>¿Qué riesgos consideras más relevantes sobre la IA?</b></td>
            <td>Preocupaciones y riesgos éticos/sociales</td>
            <td>Los riesgos considerados más relevantes son: <b>El uso indebido en la manipulación de información</b>. <b>La falta de regulación ética internacional</b>. La pérdida de empleos en sectores poco calificados. El sesgo en los algoritmos y sus decisiones. La concentración del poder tecnológico en pocas empresas.</td>
          </tr>
        </tbody>
      `);
    }
  }

  // Selección dinámica del QR
  fetch('https://unlock-ai-app-7cvq.onrender.com/documento-seleccionado')
    .then(res => res.json())
    .then(data => {
      if (data.success && data.doc) {
        // Cambia el QR dinámicamente
        const qrImg = document.getElementById('qr-img');
        if (qrImg) qrImg.src = data.doc.qr;
      }
    });
}); // Fin de DOMContentLoaded