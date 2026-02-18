/*

    Implementar  uma  classe  Data  que  deve  possuir  como  características  os  atributos  dia,  mês  e  ano  (todas  do 
    tipo inteiro). Nesta classe além dos métodos construtores, getters, setters e toString, deverá ser 
    implementado o método validarData (int, int, int): boolean que deverá verificar se as informações passadas 
    por  parâmetros  é  verdadeira  ou  não.  Este  método  deverá  inclusive  verificar  se  é  ano  bissexto.  O  método 
    toString deverá retornar  uma  string  no  seguinte  formato  “dia/mês/ano”,  como  por  exemplo 
    “05/março/2015” 
*/

class Data {
    private _dia: number;
    private _mes: number;
    private _ano: number;

    constructor(dia: number, mes: number, ano: number) {
        // Inicializa com valores padrão caso a data seja inválida
        if (this.validarData(dia, mes, ano)) {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
        } else {
            console.error("Data inválida! Inicializando com data padrão (01/01/2000).");
            this._dia = 1;
            this._mes = 1;
            this._ano = 2000;
        }
    }

    // Getters e Setters
    get dia() { return this._dia; }
    set dia(valor: number) { if (this.validarData(valor, this._mes, this._ano)) this._dia = valor; }

    get mes() { return this._mes; }
    set mes(valor: number) { if (this.validarData(this._dia, valor, this._ano)) this._mes = valor; }

    get ano() { return this._ano; }
    set ano(valor: number) { if (this.validarData(this._dia, this._mes, valor)) this._ano = valor; }

    // Método de Validação
    public validarData(dia: number, mes: number, ano: number): boolean {
        if (mes < 1 || mes > 12 || dia < 1) return false;

        const diasPorMes = [31, (this.isBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        return dia <= diasPorMes[mes - 1];
    }

   
    private isBissexto(ano: number): boolean {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }

   
    public toString(): string {
        const mesesExtenso = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];
        
        const diaFormatado = this._dia < 10 ? `0${this._dia}` : this._dia;
        
        return `${diaFormatado}/${mesesExtenso[this._mes - 1]}/${this._ano}`;
    }
}


const data1 = new Data(5, 3, 2015);
console.log(data1.toString()); 

const data2 = new Data(29, 2, 2024); 
console.log(data2.toString()); 