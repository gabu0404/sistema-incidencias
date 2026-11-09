const formulario = document.getElementById('incidenciaForm');
const lista = document.getElementById('listaIncidencias');
let incidencias = [];

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const nuevaIncidencia = { id: Date.now(), titulo: titulo, descripcion: descripcion, estado: 'Pendiente' };
    incidencias.push(nuevaIncidencia);
    formulario.reset();
    renderizarLista();
});
