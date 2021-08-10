index.js > calcular
//funcion flecha
const calcular = () => {
 
   const d1= document.getElementById("inp_dato1").nodeValue;
   const d2= document.getElementById("inp_dato2").nodeValue;

   const resultado = parceInt(d1)+ parceInt(d2);

   document.getElementById("h_resultado").textContent=resultado;


}
 
 const boton = document.getElementById("btn_calcular")
 boton.addEventListener("click", calcular)