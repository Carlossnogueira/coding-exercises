import { Data } from './data';
import { Aluno } from './aluno';
import { Funcionario } from './funcionario';
import PromptSync from "prompt-sync";
const scan = PromptSync();

function obterDados(tipo: string) {
    console.log(`\n===== DADOS DO ${tipo.toUpperCase()} =====`);
    
    const nome = scan(`• Nome do ${tipo}: `);
    const idade = Number(scan(`• Idade do ${tipo}: `));
    
    console.log(`\n• Data de nascimento:`);
    const diaNasc = Number(scan("  Dia: "));
    const mesNasc = Number(scan("  Mês: "));
    const anoNasc = Number(scan("  Ano: "));
    
    return { 
        nome, 
        idade, 
        dataNascimento: new Data(diaNasc, mesNasc, anoNasc) 
    };
}


function obterData(titulo: string) {
    console.log(`\n• ${titulo}:`);
    const dia = Number(scan("  Dia: "));
    const mes = Number(scan("  Mês: "));
    const ano = Number(scan("  Ano: "));
    return new Data(dia, mes, ano);
}


const aluno = obterDados("aluno");
const matricula = obterData("Data de matrícula");


const funcionario = obterDados("funcionário");
const admissao = obterData("Data de admissão");


const primeiroAluno = new Aluno(
    aluno.nome,
    aluno.idade,
    aluno.dataNascimento,
    matricula
);

const primeiroFuncionario = new Funcionario(
    funcionario.nome,
    funcionario.idade,
    funcionario.dataNascimento,
    admissao
);


console.log("\n===== CADASTRO REALIZADO COM SUCESSO =====");
console.log("\nALUNO:");
console.log(`• Nome: ${primeiroAluno.nome}`);
console.log(`• Idade: ${primeiroAluno.idade} anos`);
console.log(`• Data Nascimento: ${aluno.dataNascimento}`);
console.log(`• Data Matrícula: ${matricula}`);

console.log("\nFUNCIONÁRIO:");
console.log(`• Nome: ${primeiroFuncionario.nome}`);
console.log(`• Idade: ${primeiroFuncionario.idade} anos`);
console.log(`• Data Nascimento: ${funcionario.dataNascimento}`);
console.log(`• Data Admissão: ${admissao}`);