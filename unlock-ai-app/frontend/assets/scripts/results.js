// Lógica JS extraída de 09-results.html
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
  }
};

// Normalizar el ID para manejar variaciones
let normalizedDocId = selectedDocId;
if (selectedDocId === 'informes financieros') {
  normalizedDocId = 'informes';
} else if (selectedDocId === 'curriculum vitae' || selectedDocId === 'cv') {
  normalizedDocId = 'curriculos';
} else if (selectedDocId === 'contrato laboral') {
  normalizedDocId = 'contratos';
} else if (selectedDocId === 'formulario de registro') {
  normalizedDocId = 'formularios';
}

// Sustituir la tabla por defecto si hay un ID seleccionado
const defaultTable = document.getElementById('defaultTable');

if (normalizedDocId && documentData[normalizedDocId]) {
  const doc = documentData[normalizedDocId];

  if (normalizedDocId === 'contratos') {
    defaultTable.innerHTML = `
      <h3>Resumen del Contrato Individual de Trabajo</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Aspecto Contractual</th>
            <th>Detalle (Patrón/Trabajador)</th>
            <th>Cita(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tipo de Contrato</td><td>Contrato Individual de Trabajo</td><td></td></tr>
          <tr><td>Fecha de Firma</td><td>Veintisiete de enero de dos mil veinte</td><td></td></tr>
          <tr><td>Lugar de Firma</td><td>Chihuahua, Chih.</td><td></td></tr>
          <tr><td>Duración del Contrato</td><td>Tiempo INDETERMINADO</td><td></td></tr>
          <tr><td>Patrón (Nombre)</td><td>Centro de Investigación en Materiales Avanzados, S.C. (CIMAV)</td><td></td></tr>
          <tr><td>Patrón (Giro)</td><td>Realizar investigaciones en materiales avanzados, desarrollo y aplicación de tecnología y programas de docencia</td><td></td></tr>
          <tr><td>Patrón (Domicilio)</td><td>Ave. Miguel de Cervantes Nº 120, Complejo Industrial Chihuahua</td><td></td></tr>
          <tr><td>Trabajador (Características)</td><td>Mexicana, sexo femenino, estado civil "soltera", xxxx años de edad</td><td></td></tr>
          <tr><td>Puesto</td><td>xxxxxxxxxxxxxxxxxx (Funciones de confianza)</td><td></td></tr>
          <tr><td>Salario Mensual</td><td>$xxxxxxxxxxxxxxxxx</td><td></td></tr>
          <tr><td>Frecuencia de Pago</td><td>Quincenalmente (los días 14 y 29 ó 30), o el día anterior laborable si el día de pago es no laborable</td><td></td></tr>
          <tr><td>Método de Pago</td><td>Por medio de tarjeta electrónica</td><td></td></tr>
          <tr><td>Jornada Laboral (Días)</td><td>Lunes a viernes</td><td></td></tr>
          <tr><td>Jornada Laboral (Horario)</td><td>Inicia a las 8:30 y termina a las 16:30</td><td></td></tr>
          <tr><td>Tiempo de Descanso (Alimentos)</td><td>30 minutos (dentro o fuera de la empresa a elección del trabajador)</td><td></td></tr>
          <tr><td>Descanso Semanal</td><td>Sábado adicional al domingo (en aplicación del Art. 59 de la Ley Federal del Trabajo)</td><td></td></tr>
          <tr><td>Vacaciones Anuales</td><td>20 días laborables al año, divididos en dos periodos</td><td></td></tr>
          <tr><td>Periodos Vacacionales</td><td>Segunda quincena de julio y segunda quincena de diciembre (proporcionalmente a la fecha de ingreso)</td><td></td></tr>
          <tr><td>Aguinaldo</td><td>40 días de salario (o parte proporcional)</td><td></td></tr>
          <tr><td>Fecha Límite de Aguinaldo</td><td>Antes del 20 de diciembre</td><td></td></tr>
          <tr><td>Obligación de Confidencialidad</td><td>El trabajador se obliga a no divulgar datos, información o resultados; esta obligación es de naturaleza permanente y no cesa con la terminación del contrato</td><td></td></tr>
          <tr><td>Normatividad Supletoria</td><td>Ley Federal del Trabajo y/o Reglamento Interior de Trabajo</td><td></td></tr>
        </tbody>
      </table>
    `;
  } else if (normalizedDocId === 'informes') {
    defaultTable.innerHTML = `
      <h3>Resumen del Informe Reporte Anual de la Empresa Corporativo Financiero Violeta y Morado</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Información Relevante</th>
            <th>Citas</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Identificación del Reporte</strong></td><td>Reporte Financiero Industrias Ariova.</td><td></td></tr>
          <tr><td><strong>Porcentajes Clave de Desempeño</strong></td><td>Productividad: <strong>41 %</strong>.</td><td></td></tr>
          <tr><td></td><td>Incremento de Predios: <strong>41 %</strong>.</td><td></td></tr>
          <tr><td></td><td>Importaciones: <strong>26 %</strong>.</td><td></td></tr>
          <tr><td></td><td>Resumen de ventas anuales: <strong>89 %</strong>.</td><td></td></tr>
          <tr><td><strong>Desglose de Ventas Anuales (Porcentaje)</strong></td><td>2024: <strong>59.3 %</strong>.</td><td></td></tr>
          <tr><td></td><td>2023: <strong>29.6 %</strong>.</td><td></td></tr>
          <tr><td></td><td>2022: <strong>11.1 %</strong>.</td><td></td></tr>
          <tr><td><strong>Productos Descontinuados</strong></td><td>Producto 01.</td><td></td></tr>
          <tr><td></td><td>Producto 02.</td><td></td></tr>
          <tr><td></td><td>Producto 03.</td><td></td></tr>
          <tr><td><strong>Temas y Métricas Adicionales</strong></td><td>Gastos en Marketing.</td><td></td></tr>
          <tr><td></td><td>Productos nuevos.</td><td></td></tr>
          <tr><td></td><td>Publicidad en Redes Sociales.</td><td></td></tr>
          <tr><td></td><td>Productos innovadores.</td><td></td></tr>
          <tr><td><strong>Información Contextual</strong></td><td>Se incluye texto introductorio <em>Lorem ipsum dolor sit amet eget, consectetur adipiscing elit. Aliquam semper felis vel metus tincidunt, ut dignissim ex efficitur. Quisque facilisis in leo eget iaculis</em>.</td><td></td></tr>
        </tbody>
      </table>
    `;
  } else if (normalizedDocId === 'curriculos') {
    defaultTable.innerHTML = `
      <h3>Resumen del Currículum Vitae de Carla Rodríguez</h3>
      <table class="table table-bordered">
        <thead>
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
      </table>
    `;
  } else if (normalizedDocId === 'formularios') {
    defaultTable.innerHTML = `
      <h3>Resumen del Formulario de Inscripción</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Aspecto del Formulario</th>
            <th>Detalle Específico / Título del Campo</th>
            <th>Ubicación o Contexto</th>
            <th>Cita(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Título Principal</td><td>Identificación del documento</td><td>FORMULARIO DE INSCRIPCIÓN</td><td></td></tr>
          <tr><td>Entidad/Grupo</td><td>Entidad a la que pertenece el formulario</td><td>GRUPO ENSIGNA</td><td></td></tr>
          <tr><td>Estructura</td><td>Bloques de información solicitada</td><td>Información solicitada bloque 1, Información solicitada bloque 2</td><td></td></tr>
          <tr><td>Sección Principal</td><td>Categoría de la información inicial</td><td>Datos personales</td><td></td></tr>
          <tr><td>Campos Solicitados (Identificación)</td><td>Datos requeridos del solicitante</td><td>Nombre y apellidos, DNI</td><td></td></tr>
          <tr><td>Campos Solicitados (Contacto/Ubicación)</td><td>Datos de contacto y residencia</td><td>Correo, Dirección, CP, Ciudad, Móvil</td><td></td></tr>
          <tr><td>Campos Solicitados (Demográficos)</td><td>Datos de origen</td><td>Lugar y fecha de nacimiento</td><td></td></tr>
          <tr><td>Campos Solicitados (Formalidad)</td><td>Elementos de cierre y validación</td><td>Fecha, Firma</td><td></td></tr>
          <tr><td>Información Fija (Contacto de la Entidad)</td><td>Datos de contacto visibles en el formulario</td><td>911-234-567</td><td></td></tr>
          <tr><td>Información Fija (Dirección de la Entidad)</td><td>Dirección de contacto visible</td><td>Calle Cualquiera 123, Cualquier Lugar</td><td></td></tr>
          <tr><td>Información Fija (Web de la Entidad)</td><td>Sitio web visible</td><td>www.unsitiogenial.es</td><td></td></tr>
        </tbody>
      </table>
    `;
  }
}
// Si no hay documento seleccionado, no se muestra ninguna tabla