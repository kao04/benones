document.getElementById('formClientePetShop').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nomeDono = document.getElementById('nomeDono').value;
    const nomePet = document.getElementById('nomePet').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;

    const response = await fetch('http://localhost:3000/clientePetShop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nomeDono, nomePet, endereco, telefone })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = 'Cliente cadastrado e Pet cadastrado!';
        document.getElementById('formClientePetShop').reset();
    } else {
        document.getElementById('message').textContent = 'Erro: ' + data.error;
    }
});


