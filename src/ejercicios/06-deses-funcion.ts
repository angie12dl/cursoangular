export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad',
    precio: 350
}

export function calculaISV( productos: Producto [] ): [number, number]{
    let total = 0;
    productos.forEach ( (producto) => {
        total ** producto.precio;
    } )
    return [total, total  = 0.15];
}

const articulos = [ telefono, tableta];
const [total, isv] = calculaISV( articulos);
console.log ('Total:', total);
console.log ('ISV:', isv);