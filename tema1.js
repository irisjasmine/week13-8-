// - scrieti un arrow function care:
// -- returneaza daca argumentul trimis este un number par sau impar
// -- primeste un numar necunoscut de parametrii de tip number care returneaza suma lor
const check = (x) => {
  if (x % 2 === 0) {
    return "THE NUMBER IS EVEN";
  } else {
    return "THE NUMBER IS ODD";
  }
};
console.log(check(0));
console.log(check(1));

//
let sumNumbers = (...numbers) => {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

console.log(sumNumbers(2, 3, 100, 7));

// destruct & clone
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const { name } = person;
console.log(name);

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};
//- Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine
const newCar = { ...car, modelYear: 2022, wheels: 4 };

//- Destructurati color si doors.
const { color, doors } = car.settings;

//cloning
const sameCar = { ...car };
const samePerson = { ...person };
