import calcularIMC from "./calculoImc.js";
class IMC {
  // Função chamada a cada vez que pedimos que um novo cálculo seja criado
  constructor(peso, altura) {
    // this._peso e this._altura são properties do objeto que esta sendo criado
    // o underline antes do nome da propert simboliza
    // que ela só deve ser acessada dentro da classe
    this._peso = peso;
    this._altura = altura;
    //Armazenaremos a data de criação desse calculo
    this._data = new Date();
  }
  //Função para calcular
  calcular() {
    //Chamada pra função calcularIMC
    const { imc, classificacao, consequencia } = calcularIMC(
      this.peso,
      this.altura
    );
    //Atribuímos valores a properts do objeto.
    this._imc = imc;
    this._classificacao = classificacao;
    this._consequencia = consequencia;
  }
  //Como não queremos que as properties com "_" sejam manipuladas externamente
  //Fornecemos GETTERS somente leitura para nossas variáveis
  get peso() {
    return this._peso;
  }
  get altura() {
    return this._altura;
  }
  get imc() {
    return this._imc;
  }
  get classificacao() {
    return this._classificacao;
  }
  get consequencia() {
    return this._consequencia;
  }
  get data() {
    return this._data;
  }
}
export default IMC;
