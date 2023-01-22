let base64String = "";

function imageUploaded() {
  const file = document.querySelector("input[type=file]")["files"][0];
  const reader = new FileReader();
  console.log("next");
  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    alert(base64String);
  };
  reader.readAsDataURL(file);
}
function displayString(e) {
    e.preventDefault();
    console.log("Base64String about to be printed");
    alert(base64String);
  };

  function submitData(data, url, route){
    console.log ('baba')
        fetch(`https://localhost:7172/${url}`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "text/json",
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            alert("Uzklausa sekminga");
            window.location.replace(`${route}`);
          } else {
            alert("Uzklausa nesekminga");
          }
        })};