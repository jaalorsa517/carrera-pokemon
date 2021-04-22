import Entidad from "@/models/Entidad";
import Carril from "@/models/Carril";

export default class Pista extends Entidad {
  private _limite: number;
  private _carriles: Array<Carril>;

  constructor(id: number, nombre: string, limite: number) {
    super(id, nombre);
    this._limite = limite;
    this._carriles = [];
  }

  get limite(): number {
    return this._limite;
  }

  addCarril(carril: Carril) {
    this._carriles.push(carril);
  }
}
