const formulario = document.getElementById('incidenciaForm');
const lista = document.getElementById('listaIncidencias');
const filtro = document.getElementById('filtroEstado');
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

filtro.addEventListener('change', renderizarLista);

function renderizarLista() {
    lista.innerHTML = '';
    const estadoFiltro = filtro.value;
    
    const incidenciasFiltradas = incidencias.filter(inc => 
        estadoFiltro === 'Todos' || inc.estado === estadoFiltro
    );

    incidenciasFiltradas.forEach(inc => {
        const li = document.createElement('li');
        li.className = 'incidencia-item';
        li.innerHTML = `<strong>${inc.titulo}</strong> <br> ${inc.descripcion} <br> <em>Estado: ${inc.estado}</em>`;
        lista.appendChild(li);
    });
}
