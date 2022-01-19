import getData from "../getData.js";


const pintar = async (data, data1, data2)  => {
    

    const carrito = JSON.parse(localStorage.getItem("CarritoCompras")),
        tBody = document.querySelector("#tBody")

    const Data = await data,
        Data1 = await data1,
        Data2 = await data2;

    carrito.forEach(producto => {


        const { Id, cantidad, valor } = producto
        const existeProducto = Data.filter(producto => producto.id === Number(Id)),
            existeProducto1 = Data1.filter(producto => producto.id === Number(Id)),
            existeProducto2 = Data2.filter(producto => producto.id === Number(Id));

        if (existeProducto.length > 0) {

            let prod = existeProducto[0]
            const { nombre, id, precio, imagen } = prod
            tBody.innerHTML += `
                        <tr>
                            <td><img src=${imagen} alt="..."/></td>
                            <td>
                                <p>${nombre}</p>
                                <p>${valor}</p>
                            </td>
                            <td>
                                <i class="bi bi-plus "></i>
                                <span>${cantidad}</span>
                                <i class="bi bi-dash"></i>
                            </td>
                        </tr>

                        `
        }

        if (existeProducto1.length > 0) {
            let prod = existeProducto[0]
            const { nombre, id, precio, imagen } = prod
            tBody.innerHTML += `
                        <tr>
                            <td><img src=${imagen} alt="..."/></td>
                            <td>
                                <p>${nombre}</p>
                                <p>${valor}}</p>
                            </td>
                            <td>
                                <i class="bi bi-plus "></i>
                                <span>${cantidad}</span>
                                <i class="bi bi-dash"></i>
                            </td>
                        </tr>
                        `

        }

        if (existeProducto2.length > 0) {
            let prod = existeProducto[0]
            const { nombre, id, precio, imagen } = prod
            tBody.innerHTML += `
                        <tr>
                            <td><img src=${imagen} alt="..."/></td>
                            <td>
                                <p>${nombre}</p>
                                <p>${valor}}</p>
                            </td>
                            <td>
                                <i class="bi bi-plus "></i>
                                <span>${cantidad}</span>
                                <i class="bi bi-dash"></i>
                            </td>
                        </tr>
                        `

        }
    })
}

export default pintar