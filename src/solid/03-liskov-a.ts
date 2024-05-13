import { Tesla, Audi, Toyota, Honda, Vehicle, Ford } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    //si recorremos cars nos va a traer todas las clases que heredan de Vehículo

      cars.forEach((car) => {
        console.log(car.constructor.name, car.getNumberOfSeats())
      });
    

    /*El código siguiente está violentando el principio de open and close porque requiere instanceof 
        the cada nuevo coche que vaya a añadir.*/

    // for (const car of cars) {

    //     if( car instanceof Tesla ) {
    //         console.log( 'Tesla', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Audi ) {
    //         console.log( 'Audi', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Toyota ) {
    //         console.log( 'Toyota', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Honda ) {
    //         console.log( 'Honda', car.getNumberOfSeats() )
    //         continue;
    //     }

    // }
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Ford(2),
  ];

  printCarSeats(cars);
})();
