function ClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      newProperty = "new property";
      hello ="override";
    };
  }

@ClassDecorator  
class miSuperclase{
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(miSuperclase);

