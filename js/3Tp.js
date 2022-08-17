//Detalles de Signos - piscis

let btnVerDetalle = document.getElementById("btnVerDetalle");
btnVerDetalle.addEventListener("click", verDetalle);

function verDetalle(){
  let sectionPadre = document.getElementById("info");

  if(btnVerDetalle.innerHTML = "Ver detalle") {
  let parrafoNuevo = document.createElement("p");
  parrafoNuevo.innerHTML = "En astrología, Piscis ​es el duodécimo y último signo del zodíaco, el sexto de naturaleza negativa y de cualidad mutable."
  parrafoNuevo.className = "lead";
  sectionPadre.prepend(parrafoNuevo)
  
  btnVerDetalle.innerHTML = "Ocultar";
  btnVerDetalle.className = "btn btn-danger"
}else{
  console.log(sectionPadre.children)
  sectionPadre.removeChild(sectionPadre.p)
  btnVerDetalle.innerHTML = "Ver detalle";
  btnVerDetalle.className = "btn btn-primary";

}

}