async function listarTodos() {
    const buscaNoBancoDeDados = await fetch('http://localhost:3000/clientePetShop');
    const respostaObtida = await buscaNoBancoDeDados.json();
    console.log(respostaObtida);
    let html = '<table border="1"><tr><th>Nome do Dono</th><th>Nome do Pet</th><th>Endereço</th><th>Telefone</th></tr>';

    respostaObtida.forEach(cliente => {
        html += `<tr>
        <td>${cliente.nomeDono}</td>
        <td>${cliente.nomePet}</td>
        <td>${cliente.endereco}</td>
        <td>${cliente.telefone}</td>
        </tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
