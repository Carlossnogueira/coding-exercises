export class Data{
     dia: number
     mes: number
     ano: number

    constructor(dia:number,mes: number,ano: number){
        this.dia = this.validarDia(dia)
        this.mes = this.validarMes(mes)
        this.ano = this.validarAno(ano)
    }

    validarDia(dia: number) : number{
        if (dia > 32 || dia < 0){
            throw new Error("Dia invalido")
        }
        return dia
    }

     validarMes(mes: number) : number{
        if (mes > 12 || mes < 1){
            throw new Error("Mes invalido")
        }
        return mes
    }

    validarAno(ano: number) : number{
        if (ano < 1980){
            throw new Error("Ano invalido")
        } else {
            return ano
        }
    }

}