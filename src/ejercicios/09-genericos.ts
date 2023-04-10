function queTiposoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTiposoy('Hola Mundo');
let soyNumero = queTiposoy(100);
let soyArreglo = queTiposoy([1,2,3,4,5,,7,8,9,10]);

let soyExplicito = queTiposoy<number>(100);