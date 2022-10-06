export class Hero {
  private _id!:number
  private _name!:string
  private _power!:string
  private _alterEgo!:string

  constructor(id:number, name:string, power:string, alterEgo?:string){
    this.id = id
    this.name = name
    this.power = power
    this.alterEgo = alterEgo || "";
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
      this._id = id;
  }

  public get name(): string {
      return this._name;
  }

  public set name(name: string) {
      this._name = name;
  }

  public get power(): string {
      return this._power;
  }

  public set power(power: string) {
      this._power = power;
  }

  public get alterEgo(): string {
      return this._alterEgo;
  }

  public set alterEgo(alterEgo: string) {
      this._alterEgo = alterEgo;
  }

}
