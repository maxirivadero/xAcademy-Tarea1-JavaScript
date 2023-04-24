
// Creamos la clase
class Carrito {
    constructor(montoTotal, productos, unidades) {
        this.montoTotal = montoTotal;
        this.productos = [productos];
        this.unidades = [unidades];
    }

    // Metodo para agregar productos al carrito
    agregar_producto(nombre, precio, unidades) {

        // Revisar si existe o no un elemento en el array
        const existe = (array, elemento) => {
            return array.find(n => n === elemento);
        }

        // Por si ya existe el elemento, buscamos las unidades que existen
        const encontrar_posc = (array, elemento) => {
            for (let i = 0; i < array.length; i++) {        
                if (array[i] === elemento) {
                    return this.unidades[i];
                }
            }
        }        
        
        // Agregamos el elemento a los productos del carrito
        if (!existe(this.productos, nombre)) {
            this.productos.push(nombre);
            this.unidades.push(unidades);
            this.montoTotal += (precio * unidades);
        } else {
            console.log(`Ya existe ${nombre} con ${encontrar_posc(this.productos, nombre)} unidades`)
        }
    }
}


// Mostrar cadenas de numeros como si fuera una piramide
function piramide(numero) {
    let renglon = "";
    if (numero > 0 && numero !== NaN) {
        for (let i = 1; i <= numero; i++) {
            console.log(renglon += i);
        }
    } else {
        console.log("ERROR: Ingrese un valor o numero mayor a cero");
    }
}


// Funcion para encontrar elemento en un array
const existe_elemento = (array, elemento) => {
    return array.find(n => n === elemento);
}


// Buscar elementos en comun entre dos arrays
function elementos_comun(array1, array2, funcion) {
    const miArray = [];
    array1.forEach((element) => {        
        if (funcion(array2, element) && !miArray.includes(element)) {
            miArray.push(element);
        }
    })
    return miArray;
}


function main() {
    // Variables a usar
    let numero_piramide = 6;

    let array1 = ['rojo', 'azul', 'amarillo'];
    let array2 = ['blanco', 'negro', 'rojo'];
    let array3 = [4, 3, true, 'manzana'];
    let array4 = ['pera', 3, false, true, 3, true];

    // Ejercicio 1
    piramide(numero_piramide);
    
    // Ejercicio 2
    console.log(elementos_comun(array1, array2, existe_elemento));
    console.log(elementos_comun(array3, array4, existe_elemento));

    // Ejercicio 3
    const carrito1 = new Carrito(50, "Azucar", 1);
    console.log(carrito1);
    carrito1.agregar_producto("Leche", 20, 3);
    console.log(carrito1);
    carrito1.agregar_producto("Leche", 20, 3);
    carrito1.agregar_producto("Azucar", 150, 3);
    carrito1.agregar_producto("Gaseosa", 50, 3);
    console.log(carrito1);
}


try {
    main();
} catch (error){
    console.error(error)
}