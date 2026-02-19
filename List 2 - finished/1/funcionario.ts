import { Pessoa } from "./pessoa";
import { Data } from "./data";

export class Funcionario extends Pessoa{
     dataAdmicao:Data

    constructor(nome: string,idade: number,dataNascimento: Data,dataAdmicao: Data){
        super(nome,idade,dataNascimento);
        this.dataAdmicao = dataAdmicao
    }

}