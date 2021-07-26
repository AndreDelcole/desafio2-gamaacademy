/* Abrir e fechar o modal de Cliente */
const btnClientes = document.querySelector('#btnClientes')
const modalCliente = document.querySelector('#modalCliente')
const fecharCliente = document.querySelector('#fecharCliente')

btnClientes.addEventListener('click', () => {
    modalCliente.classList.add('mostrar')
})

fecharCliente.addEventListener('click', () => {
    modalCliente.classList.remove('mostrar')
})

/* Abrir e fechar o modal de Produto */
const btnProdutos = document.querySelector('#btnProdutos')
const modalProduto = document.querySelector('#modalProduto')
const fecharProduto = document.querySelector('#fecharProduto')

btnProdutos.addEventListener('click', () => {
    modalProduto.classList.add('mostrar')
})

fecharProduto.addEventListener('click', () => {
    modalProduto.classList.remove('mostrar')
})

/* Cadastrar Cliente */
const cadCliente = document.querySelector('#cadCliente')

cadCliente.addEventListener('click', () => {

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let cpf = document.querySelector('#cpf').value
    let endereco = document.querySelector('#endereco').value
    let numero = document.querySelector('#numero').value
    let complemento = document.querySelector('#complemento').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let cep = document.querySelector('#cep').value
    let estado = document.querySelector('#estado').value

    let dadosCliente = {
        
        nome,
        email,
        telefone,
        cpf,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        cep,
        estado

    }

    let convertDadosCliente = JSON.stringify(dadosCliente);

    if (localStorage.idClienteAtual) {
        localStorage.idClienteAtual = Number(localStorage.idClienteAtual) + 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }else {
        localStorage.idClienteAtual = 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }

    alert(`Cliente: ${dadosCliente.nome} cadastrado com sucesso!`);
    document.querySelector('#formCliente').reset();

})

/* Cadastrar Produto */
const cadProduto = document.querySelector('#cadProduto')

cadProduto.addEventListener('click', () => {

    let produto = document.querySelector('#produto').value
    let codigo = document.querySelector('#codigo').value
    let categoria = document.querySelector('#categoria').value
    let quantidade = document.querySelector('#quantidade').value
    let descricao = document.querySelector('#descricao').value

    let dadosProduto = {

        produto,
        codigo,
        categoria,
        quantidade,
        descricao

    }

    let convertDadosProduto = JSON.stringify(dadosProduto)    
    
    if (localStorage.idProdutoAtual) {
        localStorage.idClienteAtual = Number(localStorage.idProdutoAtual) + 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }else {
        localStorage.idProdutoAtual = 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }

    alert(`Produto: ${dadosProduto.produto} cadastrado com sucesso!`);
    document.querySelector('#formCliente').reset();

})