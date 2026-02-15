class Lampada {
    private tipo: string;
    private voltagem: number;
    private cor: string;
    private marca: string;
    private preco: number;
    private potencia: number;
    private status: boolean;

    constructor(tipo: string, voltagem: number, cor: string, marca: string, preco: number, potencia: number) {
        this.tipo = tipo;
        this.voltagem = voltagem;
        this.cor = cor;
        this.marca = marca;
        this.preco = preco;
        this.potencia = potencia;
        this.status = false;
    }

    // Getters e Setters
    public getTipo(): string { return this.tipo; }
    public setTipo(tipo: string): void { this.tipo = tipo; }

    public getVoltagem(): number { return this.voltagem; }
    public setVoltagem(voltagem: number): void { this.voltagem = voltagem; }

    public getCor(): string { return this.cor; }
    public setCor(cor: string): void { this.cor = cor; }

    public getMarca(): string { return this.marca; }
    public setMarca(marca: string): void { this.marca = marca; }

    public getPreco(): number { return this.preco; }
    public setPreco(preco: number): void { this.preco = preco; }

    public getPotencia(): number { return this.potencia; }
    public setPotencia(potencia: number): void { this.potencia = potencia; }

    public getStatus(): boolean { return this.status; }

    // Métodos de ação
    public ascender(): void { this.status = true; }
    public apagar(): void { this.status = false; }

    public toString(): string {
        return `Tipo: ${this.tipo} | Marca: ${this.marca} | Cor: ${this.cor} | Voltagem: ${this.voltagem}V | Potência: ${this.potencia}W | Preço: R$${this.preco.toFixed(2)} | Status: ${this.status ? "Acesa" : "Apagada"}`;
    }
}

class LampadaTesteVetor {
    private vetor: Lampada[] = [];
    private readonly LIMITE = 30;

    public menu(): void {
        let opcao: number;
        do {
            opcao = Number(prompt(
                "1 – Cadastrar lâmpada\n" +
                "2 – Exibir todas as lâmpadas\n" +
                "3 – Exibir quantidade de lâmpadas cadastradas\n" +
                "4 – Consultar quantidade por potência\n" +
                "5 – Lâmpadas abaixo do preço médio\n" +
                "6 – Quantidade de acesas e apagadas\n" +
                "0 – Sair"
            ));

            switch (opcao) {
                case 1: this.cadastrar(); break;
                case 2: this.exibirTodas(); break;
                case 3: this.exibirQuantidade(); break;
                case 4: this.consultarPorPotencia(); break;
                case 5: this.exibirAbaixoDaMedia(); break;
                case 6: this.exibirStatusContagem(); break;
                case 0: console.log("Encerrando..."); break;
                default: console.log("Opção inválida!");
            }
        } while (opcao !== 0);
    }

    private cadastrar(): void {
        if (this.vetor.length >= this.LIMITE) {
            console.log("Vetor cheio");
            return;
        }

        const tipo = prompt("Tipo (LED, Fluorescente...):") || "";
        const voltagem = Number(prompt("Voltagem:"));
        const cor = prompt("Cor:") || "";
        const marca = prompt("Marca:") || "";
        const preco = Number(prompt("Preço:"));
        const potencia = Number(prompt("Potência:"));

        const novaLampada = new Lampada(tipo, voltagem, cor, marca, preco, potencia);
        
        if (confirm("Deseja acender a lâmpada agora?")) novaLampada.ascender();

        this.vetor.push(novaLampada);
        console.log("Lâmpada cadastrada com sucesso!");
    }

    private exibirTodas(): void {
        if (this.vetor.length === 0) return console.log("Nenhuma lâmpada cadastrada.");
        this.vetor.forEach((l, i) => console.log(`${i + 1}: ${l.toString()}`));
    }

    private exibirQuantidade(): void {
        console.log(`Total de lâmpadas cadastradas: ${this.vetor.length}`);
    }

    private consultarPorPotencia(): void {
        const pBusca = Number(prompt("Digite a potência para consulta:"));
        const qtd = this.vetor.filter(l => l.getPotencia() === pBusca).length;
        console.log(`Existem ${qtd} lâmpadas com potência de ${pBusca}W.`);
    }

    private exibirAbaixoDaMedia(): void {
        if (this.vetor.length === 0) return;
        
        const somaPrecos = this.vetor.reduce((acc, l) => acc + l.getPreco(), 0);
        const media = somaPrecos / this.vetor.length;
        
        console.log(`Preço médio: R$${media.toFixed(2)}. Lâmpadas abaixo da média:`);
        this.vetor.filter(l => l.getPreco() < media).forEach(l => console.log(l.toString()));
    }

    private exibirStatusContagem(): void {
        const acesas = this.vetor.filter(l => l.getStatus()).length;
        const apagadas = this.vetor.length - acesas;
        console.log(`Lâmpadas Acesas: ${acesas} | Lâmpadas Apagadas: ${apagadas}`);
    }
}


const teste = new LampadaTesteVetor();
teste.menu();