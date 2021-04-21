import Carril from "@/models/Carril";

export default class Carro {
  private _carril: Carril;
  private _distancia: number;

  constructor(carril: Carril) {
    this._carril = carril;
    this._distancia = 0;
  }
  get carril() {
    return this._carril;
  }

  get distancia() {
    return this._distancia;
  }
  avanzar(metros: number) {
    this._distancia += metros;
  }
}
