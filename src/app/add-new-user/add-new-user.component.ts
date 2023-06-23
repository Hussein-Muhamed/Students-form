import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styles: [
  ]
})
export class AddNewUserComponent {

  baseUrl = 'http://localhost:3000/users'
  
  
  constructor(public uService:UserService){}

  add(){
    if(this.validation.valid){
      let user = {name:this.validation.controls['name'].value,age:this.validation.controls['age'].value,email:this.validation.controls['email'].value}
      this.uService.addUser(user).subscribe()
    }
    console.log(this.validation);
    this.validation.reset()
  }

  get name(){
    return this.validation.controls['name'].valid  
  }

  get age(){
    return this.validation.controls['age'].valid 
  }

  get email(){
    return this.validation.controls['email'].valid 
  }

  validation = new FormGroup({
    name: new FormControl(null,[Validators.pattern('[a-zA-Z]+$'),Validators.minLength(3)]),
    age: new FormControl(null,[Validators.pattern('[0-9]*$'),Validators.max(40),Validators.min(10)]),
    email: new FormControl(null,[Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')])
  })

  
  


}
