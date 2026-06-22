function validarNome(nome) {
    if (nome.length < 3) {
        throw new Error("Nome inválido");
    }
}

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        throw new Error("E-mail inválido");
    }
}

function validarSenha(senha) {
    if (senha.length < 8) {
        throw new Error("Senha inválida");
    }
}

// Teste
try {
    validarNome("João");
    validarEmail("joao@email.com");
    validarSenha("12345678");

    console.log("Dados válidos!");
} catch (erro) {
    console.log(erro.message);
}