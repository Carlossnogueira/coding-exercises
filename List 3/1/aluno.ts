import { Pessoa } from "./pessoa";
import { Data } from "./data";

export class Aluno extends Pessoa{
     dataMatricula:Data

    constructor(nome: string,idade: number,dataNascimento: Data,dataMatricula: Data){
        super(nome,idade,dataNascimento);
        this.dataMatricula = dataMatricula
    }

}