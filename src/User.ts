import faker from 'faker';
import { Profile } from './Profile';

export class User implements Profile{
  name: string;
  location: { lat: number; lng: number; };
  
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat : parseFloat(faker.address.latitude()),
      lng : parseFloat(faker.address.longitude())
    }
  }
}