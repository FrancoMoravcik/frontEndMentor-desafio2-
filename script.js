const form = document.getElementById("form")

const porcentaje = document.getElementById("porcentaje")
const adjetivo = document.getElementById("adjetivo")
const texto = document.getElementById("texto")


form.addEventListener("submit", (e) => {
    e.preventDefault() 
    calcularPorcentaje()
}
)

function calcularPorcentaje () {
    let num1 = document.getElementById("reaccion").value
   let num2 = document.getElementById("memoria").value
   let num3 = document.getElementById("verbal").value
   let num4 = document.getElementById("visual").value

    if(num1.length >= 3 || num2.length >= 3 || num3.length >= 3 || num4.length >= 3){
    alert("Solo se admiten 2 digitos")
    form.reset()
    }else {
        let resultado = Math.round((parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)) / 4).toFixed(0)
    
        porcentaje.innerText = resultado

        if(resultado <= 50){
            adjetivo.innerText = "lorem"
            texto.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        }else if(resultado >= 50 && resultado <= 75){
            adjetivo.innerText = "lorem ipsum"
             texto.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.!"
        }else {
            adjetivo.innerText = "lorem ipsum dolor"
            texto.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil."
        }
    }

}   