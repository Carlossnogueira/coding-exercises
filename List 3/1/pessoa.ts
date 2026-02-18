import { Data } from "./Data";

export class Pessoa{
     nome: string
     idade: number
     dataNascimento:Data

    constructor(name: string,idade: number,dataNascimento: Data){
        this.nome=name
        this.idade=idade
        this.dataNascimento=dataNascimento
    }

}