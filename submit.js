  function submitData(data, url, route){
    console.log ('baba')
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
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
        });
      });
  };