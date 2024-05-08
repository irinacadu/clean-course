(() => {
  function isRedFruit(fruit: string): boolean {
    const fruitsNames: string[] = ["manzana", "cereza", "ciruela"];
    if (fruitsNames.includes(fruit)) return true;
    return false;
  }

  function getFruitsByColor(color: string): string[] {
    const redFruits: string[] = ["manzana", "fresa"];
    const yellowFruits: string[] = ["piña", "banana"];
    const purpleFruits: string[] = ["moras", "uvas"];
    switch (color) {
      case "red":
        return redFruits;
        break;
      case "yellow":
        return yellowFruits;
        break;
      case "purple":
        return purpleFruits;
        break;
      default:
        throw Error("the color must be: red, yellow, purple");
        break;
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    debugger
    if (isFirstStepWorking != true) return "First step broken.";
    if (isSecondStepWorking != true) return "Second step broken.";
    if (isThirdStepWorking != true) return "Third step broken.";
    return isFourthStepWorking ? "Working properly!" : "Fourth step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
