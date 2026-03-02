function generarCV() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const perfil = document.getElementById("perfil").value;
    const educacion = document.getElementById("educacion").value;
    const experiencia = document.getElementById("experiencia").value;
    const habilidades = document.getElementById("habilidades").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h2>${nombre}</h2>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <h3>Perfil Profesional</h3>
        <p>${perfil}</p>
        <h3>Educación</h3>
        <p>${educacion}</p>
        <h3>Experiencia Laboral</h3>
        <p>${experiencia}</p>
        <h3>Habilidades</h3>
        <p>${habilidades}</p>
    `;
}

function descargarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const contenido = document.getElementById("resultado").innerText;

    doc.text(contenido, 10, 10);
    doc.save("Curriculum.pdf");
}