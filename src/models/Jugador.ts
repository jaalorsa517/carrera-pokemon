import Entidad from "@/models/Entidad";

export default class Jugador extends Entidad {
  private _tipo: string;

  constructor(id: number, nombre: string, tipo: string) {
    super(id, nombre);
    this._tipo = tipo;
  }

  get tipo(): string {
    return this._tipo;
  }
}
