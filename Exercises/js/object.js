function Car(color, year, model){
    this.color = color;
    this.model = model;
    this.year = year;
}

var newCar = new Car("Read", 2020, "Model 3");

var articulos = [
    { nombre: "Bici", costo: 1500 },
    { nombre: "Celular", costo: 1500 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];


//Crea un filtro en el objeto
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//Transforma el objeto a un array nuevo.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//find: Busca un elemento unico dentro del objeto
var buscarArticulo = articulos.find(function(articulo){
    return articulo.nombre == "Bici";
});
//Respuesta: {nombre: "Bici", costo: 1500}

// Foreach realiza filtro del mismo objeto sin modificarlo
// Recorre la lista y muestra los datos que queremos
var buscarArticulo2 = articulos.forEach(function(articulo){
    return articulo.nombre ;
});

//Some: Retorna un true o false si existe algun articulo segun la validacion
var articulosbaratos = articulos.some(function(articulo){
    return articulo.costo <= 1000;
});