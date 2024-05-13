// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim():void;
// }

// class Tucan implements Bird {
//   swim(): void {
//       throw new Error("Method not implemented.");
//   }
//   public fly() {}
//   public eat() {}
//   public run() {}
// }

// class Humminbird implements Bird{
//   swim(): void {
//       throw new Error("Method not implemented.");
//   }
//   public fly() {}
//   public eat() {}
//   public run() {}
// }

// // la avestruz no vuela asi que no necesitaría el método fly de la interfaz
// class Ostrich implements Bird{
//     swim(): void {
//         throw new Error("Method not implemented.");
//     }

//     //no tiene sentido crear un error cuando siempre va a ser error
//     public fly(): void {
//         throw new Error("Method not implemented.");
//     }
//     public eat() {}
//     public run() {}

// }

// class Penguin implements Bird{
//     //no tiene sentido crear un error cuando siempre va a ser error
//     public fly(): void {
//         throw new Error("Method not implemented.");
//     }
//     public eat() {}
//     public run() {}

//     // tendríamos que añadir este método cuando ninguna de las demás avez nada
//     public swim(){}

// }

// Cuando empieza el proyecto , por ejemplo, no tenemos aves que naden y mientras va escalando van apareciendo
// nuevos tipos de aves con necesidades concretas. Estamos aumentando la deuda técnica a medida que avanza el proyecto.


// Tenemos que tener en cuenta las características en común que tienen todas las aves como por ejemplo comer
// Sabemos que La avestruz y el pingüino no vuelan por lo tanto no deberían estar obligados a implementar ese método.
//La segregación se podría hacer de la siguiente manera

//creamos una interfaz con los métodos de las aves que vuelan. Las clases que no dependen no deberían verse afectadas
interface Bird {
 
  eat(): void; 
 
}

interface FlyingBird{
   fly():void;
}

interface RunningBird{
    run(): void;
}

interface SwimmingBird{
    swim():void;
}

// El Tucan si vuela por lo que que implementamos, además, la interfaz FlyingBird
class Tucan implements Bird, FlyingBird{
  public fly() {}
  public eat() {}

}

//la avestruz no vuela asi que no se ve obligada a implementar la interfas FlyingBird pero al correr implementamos
//la interfaz runningBird
class Ostrich implements Bird,RunningBird{   
    public eat() {}
    public run() {}
}

// El pinguino come y nada pero no corre ni vuela
class Penguin implements Bird,SwimmingBird{
  
    public eat() {}
    public swim(){}

}