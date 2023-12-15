console.clear;

let peopleInSpace = document.querySelector('[data-js="people-in-space"]');
let filter = "All";

async function fetchPeopleInSpace() {
  const url = "http://api.open-notify.org/astros.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    if (filter !== "All") {
      data.people = data.people.filter((person) => {
        return person.craft === filter;
      });
      data.number = data.people.length;
    }
    return data;
  } catch (error) {
    alert(`Es ist leider ein Fehler aufgetreten: ${error.message}`);
  }
}

const names = document.createElement("ul");

async function doStuff() {
  const data = await fetchPeopleInSpace();

  peopleInSpace.textContent = data.number;
  names.innerHTML = "";
  data.people.forEach((element) => {
    const name = document.createElement("li");
    name.textContent = element.name;
    names.append(name);
  });
  document.body.append(names);
}

doStuff();

function Button(props) {
  const button = document.createElement("button");
  button.textContent = props.name;
  button.type = "button";
  button.addEventListener("click", () => {
    filter = props.name;
    doStuff();
  });
  return button;
}

const buttonAll = Button({ name: "All" });
document.body.append(buttonAll);

const buttonISS = Button({ name: "ISS" });
document.body.append(buttonISS);

const buttonTiangong = Button({ name: "Tiangong" });
document.body.append(buttonTiangong);
