class IMCHistory {
  constructor() {
    //Cria lista atribuindo array vazio
    this._history = [];
    //Busca no localStorage o histórico
    const historyJson = localStorage.getItem("imc-history");
    //Caso o histórico ainda não exista encerra construtor
    if (historyJson === null) return;
    //Faz o parse do JSON para this._history
    this._history = JSON.parse(historyJson);
  }
  add(imc) {
    //inclui novo objeto na lista
    this._history.push(imc);
    //transforma this._history em JSON
    const historyJson = JSON.stringify(this._history);
    //escreve lista no localStorage
    localStorage.setItem("imc-history", historyJson);
  }
}
export default IMCHistory;
