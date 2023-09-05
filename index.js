let boton= document.getElementById("btn");



  boton.addEventListener("click", function() {
    let nom = document.getElementById("name").value;
    let apell = document.getElementById("lastname").value;
    let nac = document.getElementById("birthday").value;
    let update = {
        
        Nombre: nom,
        Apellido: apell,
        Nacimiento : nac
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
      console.log(update)
      
       document.getElementById("result").innerHTML= `<br><br>Sus datos se han registrado correctamente:<br><br>
       nombre: ${nom} <br><br>
      apellido: ${apell} <br><br>
      Fecha de nacimiento: ${nac}
      
      `      
      ;
     
      }).catch(e => {
      console.log(e);
      });
    
    });