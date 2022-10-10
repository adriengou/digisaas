export class Profile {
  private _nom!: string;
  private _prenom!: string;
  private _skills!: string[];
  private _avatar!: string;
  private _birthDate!: Date;
  private _mail!: string;

  constructor(
    nom: string,
    prenom: string,
    birthDate: Date,
    mail: string,
    skills: string[],
    avatar: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.birthDate = birthDate;
    this.mail = mail;
    this.skills = skills;
    this.avatar = avatar;
  }

  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }
  public get prenom(): string {
    return this._prenom;
  }
  public set prenom(value: string) {
    this._prenom = value;
  }
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }
  public get mail(): string {
    return this._mail;
  }
  public set mail(value: string) {
    this._mail = value;
  }
  public get skills(): string[] {
    return this._skills;
  }
  public set skills(value: string[]) {
    this._skills = value;
  }
  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
}
