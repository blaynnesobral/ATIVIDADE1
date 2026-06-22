class Aluno {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class CadastroAluno {
    validar(aluno) {
        if (aluno.nome.length < 3) {
            throw new Error("Nome deve ter no mínimo 3 caracteres");
        }

        if (!aluno.email.includes("@") || !aluno.email.includes(".")) {
            throw new Error("E-mail inválido");
        }

        if (aluno.senha.length < 8) {
            throw new Error("Senha deve ter pelo menos 8 caracteres");
        }

        if (!/\d/.test(aluno.senha)) {
            throw new Error("Senha deve possuir ao menos 1 número");
        }
    }

    salvar(aluno) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Aluno cadastrado com sucesso");
            }, 3000);
        });
    }
}

const aluno = new Aluno("João", "joao@gmail.com", "abc12345");
const cadastro = new CadastroAluno();

async function executar() {
    try {
        cadastro.validar(aluno);
        const resposta = await cadastro.salvar(aluno);
        console.log(resposta);
    } catch (erro) {
        console.log(erro.message);
    }
}

executar();