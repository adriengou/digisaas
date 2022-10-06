export class Job {

  private _logo:string;
  private _societyName:string;
  private _rating:number;
  private _jobTitle:string;
  private _wage:number;
  private _location:string;




  constructor(logo:string, societyName:string, rating:number, jobTitle:string, wage:number, location:string){
    this._logo = logo
    this._societyName = societyName
    this._rating = rating
    this._jobTitle = jobTitle
    this._wage = wage
    this._location = location
  }

  public get logo(): string {
    return this._logo;
  }

  public set logo(logo: string) {
      this._logo = logo;
  }

  public get societyName(): string {
      return this._societyName;
  }

  public set societyName(societyName: string) {
      this._societyName = societyName;
  }

  public get rating(): number {
      return this._rating;
  }

  public set rating(rating: number) {
      this._rating = rating;
  }

  public get jobTitle(): string {
      return this._jobTitle;
  }

  public set jobTitle(jobTitle: string) {
      this._jobTitle = jobTitle;
  }

  public get wage(): number {
      return this._wage;
  }

  public set wage(wage: number) {
      this._wage = wage;
  }

  public get location(): string {
      return this._location;
  }

  public set location(location: string) {
      this._location = location;
  }

}
