import Conductor from "@/models/Conductor";

export default class Podio {
  private _resultado: Array<Conductor> = [];

  guardarFinal(conductores: Array<Conductor>) {}

  get resultado() {
    return this._resultado;
  }
}
