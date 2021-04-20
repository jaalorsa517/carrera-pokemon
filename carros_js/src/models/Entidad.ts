export default abstract class Entidad {
  private _id: number;
  private _nombre: string;

  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
  }

  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
}
