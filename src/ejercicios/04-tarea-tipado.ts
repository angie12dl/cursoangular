interface superHeroe {
    nombre: string;
    edad: number;
    direccion: direccion,
mostrarDireccion: () =>  string;
}
 interface direccion{
    calle: string;
    pais: string;
    cuidad: string;
}


const superHeroe = {
    nombre:' Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        cuidad: 'NY'
    
    },
    mostratDireccion() {
        return this.nombre + ', ' + this.direccion.cuidad + ', ' + this.direccion.pais; 
    }
}

const direccion = superHeroe.mostratDireccion();
console.log(direccion);

