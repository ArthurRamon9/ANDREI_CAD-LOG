const botao = document.getElementById('botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../Forum/forum.html';
});


async function logar() {
    const nomecompleto = document.getElementById('nomecompleto').value;
    const senha = document.getElementById('senha').value;

    console.log(nomecompleto);
    console.log(senha);

    const data = {
        nomecompleto,
        senha
    };

    fetch('http://localhost:3004/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.success);

            alert('Valida retorno');

        });
}