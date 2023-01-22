const state = {};
function fetchParameter(param) {
  fetch(`https://localhost:7172/${param}`)
    .then((res) => res.json())
    .then((data) => {
      renderFilterPerson([...new Set(data.map((entry) => entry.person))]);
      renderPersonCards(data);
      state.person = data;
    });
}

fetchParameter("Person");
fetchParameter("Person/id");

function renderFilterPerson(name) {
  name.forEach((name) => {
    const filterButton = document.createElement("button");
    filterButton.innerText = name;
    const filterContainer = document.getElementById("filter-container");
    filterContainer.append(filterButton);
  });
}

function renderPersonCards(person) {
  const personContainer = document.getElementById("users-container");
  personContainer.innerHTML = "";
  person.forEach((person) => {
    const personCard = document.createElement("div");
    personCard.setAttribute("class", "user-card");
    const personImage = document.createElement("img");
    personImage.src = person.image;
    const personName = document.createElement("h1");
    personName.textContent = person.name;
    const personSurname = document.createElement("p");
    personSurname.textContent = person.surname;
    const personsCode = document.createElement("p");
    personsCode.textContent = person.personsCode;

    personCard.append(personImage, personName, personSurname, personsCode);
    personContainer.append(personCard);
  });
}

function filterPerson(event) {
  if (event.target.tagName.toLowerCase() === "button") {
    const isAlreadySelected = event.target.classList.contains("selected");
    if (isAlreadySelected) {
      renderPersonCards(state.person);
    } else {
      const personNameClicked = event.target.innerText;
      renderPersonCards(
        state.person.filter((person) => person.name === personNameClicked)
      );
      const allFilterButtons = event.target.parentNode.children;
      for (let i = 0; i < allFilterButtons.length; i++) {
        allFilterButtons[i].classList.remove("selected");
      }
    }
    event.target.classList.toggle("selected");
  }
}
let base64String = "";

function CheckUser(user) {
  fetch(`https://localhost:7172/${param}`)
    .then((res) => res.json())
    .then((data) => {
      renderFilterPerson([...new Set(data.map((entry) => entry.user))]);
      renderPersonCards(data);
      state.user = data;
    });
  if (user.status == 404) {
    document.getElementById("error-msg").innerText = "Bad login or password";
  } else {
    console.log(user);
    sessionStorage.setItem("userId", user.id);
    sessionStorage.setItem("role", user.role);
    window.location.href = "userInfo.html";
  }
}


