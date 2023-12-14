console.clear;

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

async function fetchPeopleInSpace() {
  const url = "http://api.open-notify.org/astros.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert(`Es ist leider ein Fehler aufgetreten: ${error.message}`);
  }
}

async function doStuff() {
  const data = await fetchPeopleInSpace();

  peopleInSpace.textContent = data.number;

  const names = document.createElement("ul");
  data.people.forEach((element) => {
    const name = document.createElement("li");
    name.textContent = element.name;
    names.append(name);
  });
  document.body.append(names);
}

doStuff();
