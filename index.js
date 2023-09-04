let boton= document.getElementById("btn");



  boton.addEventListener("click", function() {
    let nom = document.getElementById("name").value;
    let apell = document.getElementById("lastname").value;
    let nac = document.getElementById("birthday").value;
    let update = {
        
        nombre: nom,
        apellido: apell,
        nacimiento : nac
        };

    fetch('https://jsonplaceholder.typicode.com/users',{method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),  })
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
     
      }).catch(e => {
      console.log(e);
      });
    
    });

  