import getData from "./getData.js";
import { showData } from "./showData.js";
import { mostrarModal } from "./modal/modal.js";
import pintar from "./carrito/carrito.js";

export const tabla = document.querySelector(".tabla")
const endpoint = `http://localhost:4050/Productos/`


const element = document.querySelector('.todos'),
    modal = document.querySelector(`.modal-content`),
    icono = document.querySelector(`.icono`),
    contenedorItems = document.querySelector(`.carrito`)



document.addEventListener('DOMContentLoaded', () => {

   const data = getData(endpoint + "name/unitarios"),
        data1 = getData(endpoint + "name/frutasyverduras"),
        data2 = getData(endpoint + "name/seleccionables");
    
        // console.log("soy "+aniadir.leght);
    showData(data, element);
    showData(data1, element);
    showData(data2, element);

    document.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`agregar`)) {
            let getId = e.target.getAttribute(`id`);

            console.log(getId)

            mostrarModal(modal, data, data1, data2, getId)
            
        }
    })
    
    icono.addEventListener("click",(e)=>{
        contenedorItems.style.display ="block"
        pintar(data,data1,data2)
        e.stopPropagation()
        document.addEventListener((`click`), (e)=>{
            if (e.target.classList.contains(`bi-x-circle-fill`)){
                location.reload()
            }
        })
    })
})

let aniadir = []
document.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.classList.contains(`add`)) {
        let item = e.target.getAttribute(`id`)
        
 
        if (modal.contains(document.querySelector(`.unidades`))) {
            let id = item,
                unidades = document.querySelector(`.unidades`).innerHTML,
                precio = document.querySelector(`.priceP`).innerHTML


            var existeProductos = aniadir.find(producto => producto.Id === item)
            
            if (aniadir.length === 0) {
                aniadir.push({
                    Id: id,
                    cantidad: unidades,
                    valor: precio
                })
            }else
            if(existeProductos){
                alert("el producto ya fue agregado")
            }
            
            else{
                aniadir.push({
                    Id: id,
                    cantidad: unidades,
                    valor: precio
                })
            }
            console.log(aniadir)
            console.log("typeof"+ existeProductos);
            e.stopPropagation()
        }
        if (modal.contains(document.querySelector(`.kilo`))) {
            let id = item,
                unidades = document.querySelector(`.kilo`).innerHTML,
                precio = document.querySelector(`.priceP1`).innerHTML
            
                
            var existeProductos = aniadir.find(producto => producto.Id === item)

            if (aniadir.length === 0) {
                aniadir.push({
                    Id: id,
                    cantidad: unidades,
                    valor: precio
                })
            } else
                if (existeProductos) {
                    alert("el producto ya fue agregado")
                }

                else {
                    aniadir.push({
                        Id: id,
                        cantidad: unidades,
                        valor: precio
                    })
                }
            console.log(aniadir)
            console.log("typeof" + existeProductos);
            e.stopPropagation()
        }
        if (modal.contains(document.querySelector(`.kilos`))) {
            let id = item,
                unidades = document.querySelector(`.kilos`).innerHTML,
                precio = document.querySelector(`.priceP2`).innerHTML,
                select = document.querySelector("#madurez").value
            
                
            var existeProductos = aniadir.find(producto => producto.Id === item)

            if (aniadir.length === 0) {
                aniadir.push({
                    Id: id,
                    cantidad: unidades,
                    valor: precio
                })
            } else
                if (existeProductos) {
                    alert("el producto ya fue agregado")
                }

                else {
                    aniadir.push({
                        Id: id,
                        cantidad: unidades,
                        valor: precio,
                        madurez: select
                    })
                }
            console.log(aniadir)
            console.log("typeof" + existeProductos);
            e.stopPropagation()
        }

        localStorage.setItem("CarritoCompras", JSON.stringify(aniadir));
        document.querySelector(`#productosIcon`).innerHTML = aniadir.length
    }
})


