const state = {};
//https://robust-safe-crafter.glitch.me/
//https://localhost:7205/House/
function fetchPerson(param){
  fetch(`https://localhost:7172/${param}`)
  .then((res) => res.json())
  .then((data) => {
    renderFilterUsers([...new Set(data.map((entry) => entry.city))]);
    renderUserCards(data);
    state.properties = data;
  });
}

fetchPerson('Person');
fetchPerson('Person/id');

function renderUserCards(properties) {
  const userContainer = document.getElementById("properties-container");
  userContainer.innerHTML = "";
  properties.forEach((property) => {
    const userCard = document.createElement("div");
    userCard.setAttribute("class", "user-card");
    const userImage = document.createElement("img");
    userImage.src = property.image;
    const userName = document.createElement("h1");
    userName.textContent = user.name;
    const userSurname = document.createElement("p");
    userSurname.textContent = user.surname;
    const personsCode = document.createElement("p");
    personsCode.textContent = user.personsCode;

    propertyCard.append(
      userImage,
      userName,
      userSurname,
      personsCode
    );
    userContainer.append(userCard);
  });
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
document
  .getElementById("filter-container")