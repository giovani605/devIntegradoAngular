export class Cartao {
    public saldo: number;
    public desc: string;
    public id: any;
    public conta: any;

    constructor(saldo, desc, id, conta) {
        console.log("oi" + saldo+desc);
        this.saldo = saldo;
        this.desc = desc;
        this.id = id;
        this.conta = conta;
    }

}