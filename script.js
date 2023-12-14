console.clear;

console.log("Sanity check");

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

async function fetchPeopleInSpace() {
  const url = "http://api.open-notify.org/astros.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data);
    peopleInSpace.textContent = data.number;
  } catch (error) {
    console.log("error.message");
  }
}

fetchPeopleInSpace();

async function fetchNames() {
  const url = "http://api.open-notify.org/astros.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data);

    const names = document.createElement("ul");

    document.body.append(names);
  } catch (error) {
    console.log("error.message");
  }
}
