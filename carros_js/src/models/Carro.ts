import Carril from "@/models/Carril";

export default class Carro {
  private _carril: Carril;
  private _distancia: number;

  constructor(carril: Carril) {
    this._carril = carril;
    this._distancia = 0;
  }

  avanzar(metros: number) {
    this._distancia += metros;
  }
}
