const botao = document.getElementById('botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../Login/login.html';
});


async function cadastrar() {
    const nomecompleto = document.getElementById('nomecompleto').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    const data = {
      nomecompleto,
      email,
      senha
    };  
    console.log(data);

    try {

      await fetch('http://localhost:3004/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })

      .then((response) => response.json())
      .then((data) => { 
        console.log(data)

        })
      .catch((error) => { console.log(error) });
    } catch (error) {
      alert('NAo')
      alert(error);
    };
    alert('Cadastro feito com sucesso');
}