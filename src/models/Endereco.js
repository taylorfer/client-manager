class Endereco {
    constructor(rua, numero, bairro, cep, cidade, estado) {
        if (!cep || cep.trim() === "") {
            throw new Error("CEP não pode ser vazio");
        }

        const cepValido = /^\d{5}-?\d{3}$/.test(cep);

        if (!cepValido) {
            throw new Error("CEP inválido. Use o formato 00000-000 ou 00000000");
        }

        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
    }
}

module.exports = Endereco;
