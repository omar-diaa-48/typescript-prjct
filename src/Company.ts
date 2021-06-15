import { Profile } from './Profile';
import faker from 'faker';

export class Company implements Profile{
  companyName:string
  catchPhrase:string
  location : {
    lat:number,
    lng:number
  }

  constructor(){
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat : parseFloat(faker.address.latitude()),
      lng : parseFloat(faker.address.longitude())
    }
  }
  displayText(): string {
    return `${this.companyName}//${this.catchPhrase}`
  }
}