import Jugador from "@/models/Jugador";
import Carro from "@/models/Carro";
import random from "@/utils/random";

export default class Conductor {
  private _jugador: Jugador;
  private _carro: Carro;
  private _position: number;

  constructor(jugador: Jugador, carro: Carro) {
    this._jugador = jugador;
    this._carro = carro;
    this._position = 0;
  }

  get jugador() {
    return this._jugador;
  }
  get carro() {
    return this._carro;
  }
  get position() {
    return this._position;
  }
  set position(position: number) {
    this._position = position;
  }
  tirarDado(): number {
    return random(7, 1);
  }
}
