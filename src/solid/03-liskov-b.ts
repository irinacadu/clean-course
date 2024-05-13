export abstract class Vehicle {
 
   
    abstract getNumberOfSeats():number;
  
  }

// al heredar de la clase abstracta Vehícle implementamos los métodos de la misma en vez de realizar un
// método propio para cada clase. Se creeará un método propio solo en el caso de que ese método afecte, unicamente,
// a la clase en la que se implementa.
export class Tesla extends Vehicle{
    constructor(private numberOfSeats: number) {
        super();
    }
  getNumberOfSeats(): number {
     return this.numberOfSeats;
  }


//   getNumberOfTeslaSeats() {
//     return this.numberOfSeats;
//   }
}

export class Audi extends Vehicle{
  constructor(private numberOfSeats: number) {
      super();
  }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

//   getNumberOfAudiSeats() {
//     return this.numberOfSeats;
//   }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
  

//   getNumberOfToyotaSeats() {
//     return this.numberOfSeats;
//   }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
  

//   getNumberOfHondaSeats() {
//     return this.numberOfSeats;
//   }
}
export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}