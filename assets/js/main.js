var MensajeS1 = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}
var MensajeS2 = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}
var MensajeS3 = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}
//Funcion Coders



// Funcion Dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i ;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
	
			if (openDropdown.classList.contains('show')) {

				openDropdown.classList.remove('show');

				var imprimir =document.getElementById('imprimir');
               

    var datos =
  [ { nombre : "Meche", apellido : "Zubieta", rol : "1era Promoción", status : "Trabajando" },
    { nombre : "Arabela", apellido : "Rojas", rol : "2da Promocion", status : "Trabajando" },
    { nombre : "Guadalupe", apellido : "Racio", rol : "3ra Promoción", status : "Trabajando" },
    { nombre : "Daniella", apellido : "Durán", rol : "4ta Promoción", status : "Trabajando" },
    { nombre : "Michelle", apellido : "Seguil", rol : "5ta Promoción", status : "Trabajando" },
    { nombre : "Diana", apellido : "Navarro", rol : "5ta Promoción", status : "Trabajando" } ];

    imprimir.innerHTML = "";
    datos.forEach(function(elem){
      imprimir.innerHTML += "<div><ul><li>"+ "Nombre: "+ elem.nombre + "</li>"+
      "<li>"+ "Apellido: "+ elem.apellido + "</li>"+
      "<li>"+ "Rol: "+ elem.rol + "</li>"+
      "<li>"+ "Cumpleaños: "+ elem.status + "</li></ul></div>" ;
    } ); 
			}
		}
	}
}

 /*var imprimir =document.getElementById('imprimir');
var valorA = document.getElementsByTagName('a')[0];
 console.log(valorA);

    var datos =
  [ { nombre : "Meche", apellido : "Zubieta", rol : "1era Promoción", status : "Trabajando" },
    { nombre : "Arabela", apellido : "Rojas", rol : "2da Promocion", status : "Trabajando" },
    { nombre : "Guadalupe", apellido : "Racio", rol : "3ra Promoción", status : "Trabajando" },
    { nombre : "Daniella", apellido : "Durán", rol : "4ta Promoción", status : "Trabajando" },
    { nombre : "Michelle", apellido : "Seguil", rol : "5ta Promoción", status : "Trabajando" },
    { nombre : "Diana", apellido : "Navarro", rol : "5ta Promoción", status : "Trabajando" } ];

    imprimir.innerHTML = "";
    datos.forEach(function(elem){
      valor.innerHTML += "<div><ul><li>"+ "Nombre: "+ elem.nombre + "</li>"+
      "<li>"+ "Apellido: "+ elem.apellido + "</li>"+
      "<li>"+ "Rol: "+ elem.rol + "</li>"+
      "<li>"+ "Cumpleaños: "+ elem.status + "</li></ul></div>" ;
    } ); }
    else{ alert('holii'); }; */







