import { series } from './data.js';
const tabla = document.querySelector('#series-table tbody');
const promedio = document.getElementById('average-seasons');
let suma = 0;
for (let i = 0; i < series.length; i++) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${series[i].id}</td>
    <td>${series[i].nombre}</td>
    <td>${series[i].canal}</td>
    <td>${series[i].temporadas}</td>
  `;
    tabla.appendChild(fila);
    suma += series[i].temporadas;
}
const promedioFinal = suma / series.length;
promedio.innerHTML = `Promedio de temporadas: <b>${promedioFinal.toFixed(2)}</b>`;
