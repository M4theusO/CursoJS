class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvazia()   {
        this._negociacoes = [];
    }

    get negociacoes() {
        return [].concat(this._negociacoes); //programação defensiva - cria uma cópia do array
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }
   
}