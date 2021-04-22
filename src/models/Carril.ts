export default class Carril {
  private _longitud: number;

  constructor(_longitud: number) {
    this._longitud = _longitud;
  }

  get longitud() {
    return this._longitud;
  }
}
