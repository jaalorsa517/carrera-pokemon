import Pista from "@/models/Pista";
import Conductor from "@/models/Conductor";

export default class Juego {
  private _id;
  public pistas: Array<Pista>;
  public conductores: Array<Conductor>;

  constructor(id: number) {
    this._id = id;
    this.pistas = [];
    this.conductores = [];
  }

  get id() {
    return this._id;
  }

  private finalizar() {}

  iniciar() {}
}
