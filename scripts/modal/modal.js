
import { detalle } from "./funcionModal.js";
// import {capturarDatos, capturarDatos1, capturarDatos2 } from "./capturarDatos.js"

export const mostrarModal = async (modal, data, data1, data2, getId) => {


    const Data = await data,
        Data1 = await data1,
        Data2 = await data2;


    console.log(Data1);
    const existeProducto = Data.filter(producto => producto.id === Number(getId)),
        existeProducto1 = Data1.filter(producto => producto.id === Number(getId)),
        existeProducto2 = Data2.filter(producto => producto.id === Number(getId));




    console.log(existeProducto, existeProducto1, existeProducto2);
    console.log(existeProducto[0], existeProducto1[0], existeProducto1[0]);
    if (existeProducto.length > 0) {

        let prod = existeProducto[0]
        const { nombre, id, precio, imagen } = prod
        modal.innerHTML = `
            <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div  class="contenedorCarrito">
                        <div class="card carritoImagen" style="width: 15rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title priceP"> ${precio}</h5>
                            
                        </div>
                        <div class="borrarItem">
                            <i class="bi bi-plus unidadMas"></i>
                            <i class="unidades">1</i>
                            <i class="bi bi-dash unidadMenos"></i>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id=${id} type="button" data-bs-dismiss="modal" class="btn btn-primary add">Agregar</button>
            </div>
            `
        detalle(precio)
        // capturarDatos(aniadidos)
    }
    if (existeProducto1.length > 0) {
        let contenedorModal = document.createElement(`div`);
        let prod = existeProducto1[0]
        const { nombre, id, precio, imagen } = prod
        modal.innerHTML = `
            <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div  class="contenedorCarrito">
                        <div class="card carritoImagen" style="width: 15rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title priceP1"> ${precio}</h5>
                            
                        </div>
                        <div class="borrarItem">
                            <i class="bi bi-plus kilosMas"></i>
                            <i class="kilo">1000</i><i>g</i>
                            <i class="bi bi-dash KilosMenos"></i>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id=${id} type="button" data-bs-dismiss="modal" class="btn btn-primary add">Agregar</button>
            </div>
            `
        detalle(precio)
        // capturarDatos1(aniadidos)
    }
    if (existeProducto2.length > 0) {

        let prod = existeProducto2[0]
        const { nombre, id, precio, imagen } = prod
        modal.innerHTML = `
            <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div  class="contenedorCarrito">
                        <div class="card carritoImagen" style="width: 15rem;">
                            <img src="${imagen}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title priceP2"> ${precio}</h5>
                            </div>
                                <label for="madurez">Selecciona la madurez </label>
                                <select id="madurez" name="madurez" class="dropdown">
                                    <option value="" disabled selected>-- Seleccione --</option>
                                    <option value="maduro"> Maduro (Para hoy)</option>
                                    <option value="normal">Normal 3-5 días)</option>
                                    <option value="duro">Duro (7 días)</option>
                                </select>
                            <div>
                        </div>
                        <div class="borrarItem">
                            <i class="bi bi-plus kilosmas"></i>
                            <i class="kilos">1000</i><i>g</i>
                            <i class="bi bi-dash Kilosmenos"></i>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id=${id} type="button" data-bs-dismiss="modal" class="btn btn-primary add">Agregar</button>
            </div>
            `
        detalle(precio)
        // capturarDatos2(aniadidos)
    }

}