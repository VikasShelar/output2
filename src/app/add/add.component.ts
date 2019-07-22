import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{
  title = "Add New Form";
  userRegistration;
  user = new User();
  constructor() {
    this.userRegistration = new FormGroup({
      'name': new FormControl('',Validators.required),
      'company': new FormControl(),
      'address': new FormControl('',Validators.required),
      'phone': new FormControl()
    });
  }


  showValues() {
    console.log('FormGroup Object:', this.userRegistration.value);
    Object.assign(this.user, this.userRegistration.value)
    console.log('User Object:',this.user);

  }

  reset(){
    this.userRegistration.reset()
  }
  ngOnInit(){
    // console.log(this.userRegistration.name.value);
    // console.log(this.userRegistration.company.value)
    // console.log(this.userRegistration.address.value)
    // console.log(this.userRegistration.phone.value)
  }
}

