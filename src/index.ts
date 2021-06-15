import { User } from './User';
import { Company } from './Company';

const user = new User()
const company = new Company()

new google.maps.Map(document.querySelector('#map'), {
  zoom:1,
  center:{
    lat:0,
    lng:0 
  }
})

console.log(user);
console.log(company);
