const detalle = (precio) => {
    let sumar = 1
    let sumar1 = 1000
    let sumar2 = 1000
    document.addEventListener(`click`, (e) => {
        
        if (e.target.classList.contains(`unidadMas`)) {
            e.preventDefault()
            let unidad = document.querySelector(`.unidades`),
                precioP = document.querySelector(`.priceP`);
 
            
                sumar++
                unidad.innerHTML = sumar

            let calcularPrecio = Number(precio) * sumar;
            precioP.innerHTML = calcularPrecio




        }
        if (e.target.classList.contains(`unidadMenos`)) {
            let unidad = document.querySelector(`.unidades`),
                precioP = document.querySelector(`.priceP`);

                sumar--
                unidad.innerHTML = sumar

            let calcularPrecio = Number(precio) * sumar;
            precioP.innerHTML = calcularPrecio
        }
 


        if (e.target.classList.contains(`kilosMas`)) {
            let unidad = document.querySelector(`.kilo`),
                precioP = document.querySelector(`.priceP1`);
                

                sumar1 += 1000
                unidad.innerHTML = sumar1

            let dividir = sumar1 / 1000,
                calcularPrecio = Number(precio) * dividir;
            precioP.innerHTML = calcularPrecio




        }
        if (e.target.classList.contains(`KilosMenos`)) {
            let unidad = document.querySelector(`.kilo`),
                precioP = document.querySelector(`.priceP1`);


                sumar1 -= 1000
                unidad.innerHTML = sumar1

            let dividir = sumar1 / 1000,
                calcularPrecio = Number(precio) * dividir;
                precioP.innerHTML = calcularPrecio;


        }


        if (e.target.classList.contains(`kilosmas`)) {
            let unidad = document.querySelector(`.kilos`),
                precioP = document.querySelector(`.priceP2`);

                sumar2 += 1000
                unidad.innerHTML = sumar2

            let dividir = sumar2 / 1000,
                calcularPrecio = Number(precio) * dividir;
                precioP.innerHTML = calcularPrecio




        }
        if (e.target.classList.contains(`Kilosmenos`)) {
            let unidad = document.querySelector(`.kilos`),
                precioP = document.querySelector(`.priceP2`);

                sumar2 -= 1000
                unidad.innerHTML = sumar2

            let dividir = sumar2 / 1000,
                calcularPrecio = Number(precio) * dividir;
            precioP.innerHTML = calcularPrecio
        }
    })
}

export { detalle }