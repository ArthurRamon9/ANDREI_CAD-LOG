function logar() {
alert('Login efetuado com sucesso')
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const data = {
    email,
    senha
  };
  alert(JSON.stringify(data))
  fetch('http://localhost:3004/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {      
        window.location.href = "../Forum/forum.html";      
    })
    .catch((err) => {
      alert(err);
    });
}