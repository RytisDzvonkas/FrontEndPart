const state = {};
//https://robust-safe-crafter.glitch.me/
//https://localhost:7205/House/
function fetchParameter(param) {
  fetch(`https://localhost:7172/${param}`)
    .then((res) => res.json())
    .then((param) => {
      renderFilterPerson([...new Set(param.map((name) => name.person))]);
      renderPersonCards(param);
      state.person = param;
    });
}

fetchParameter("Person");
fetchParameter("Person/id");

function renderFilterPerson(names) {
  names.forEach((name) => {
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
function imageUploaded() {
  var file = document.querySelector("input[type=file]")["files"][0];
  var reader = new FileReader();
  console.log("next");
  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    imageBase64Stringsep = base64String;
    // alert(imageBase64Stringsep);
    console.log(base64String);
  };
  reader.readAsDataURL(file);
}
function displayString() {
  console.log("Base64String about to be printed");
  alert(base64String);
}
