var person1 = {
  name: "jose",
  age: 33,
  city: "lima",
};

var person2 = {
  name: "maría",
  age: 25,
  city: "bógota",
};

var person3 = {
  name: "jhony",
  age: 34,
  city: "buenos aires",
};

let persons = [];

persons.push(person1);
persons.push(person2);
persons.push(person3);

function presentation(person) {
  let message = [];
  for (p in person) {
    message.push(
      `Mi nombre es ${person[p].name}, tengo la edad de ${person[p].age} años y vivo en ${person[p].city}`
    );
  }

  return message;
}

let presentationPerson = presentation(persons);

for (p in presentationPerson) {
  console.log(presentationPerson[p]);
}
