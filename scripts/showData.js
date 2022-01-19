export const showData = async (list, element) => {
    const products = await list;


    products.forEach(prod => {

        const { id, precio, nombre, imagen } = prod,
            elementChild = document.createElement("div")
            elementChild.setAttribute("class", "elementChild")
            element.append(elementChild)

        elementChild.innerHTML += `
        <div class="card" style="width: 15rem;">
        <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">$ ${precio}</h5>
                 <p class="card-text">
                    ${nombre}
                </p>
                <button id="${id}" type="button" class="btn btn-primary agregar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Agregar
                </button>
            </div>
    </div>
    `

    })

}