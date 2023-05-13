import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent implements OnInit {
  
  baseUrl = 'http://localhost:3000/users'
  id:any
  user:any
  constructor(public uService:UserService,public router:ActivatedRoute){
    this.id = router.snapshot.params['id']
  }
  ngOnInit() {
    this.user = this.uService.getUserById(this.id).subscribe({
      next:(data)=>{this.user = data},
      error:(err)=>{console.log(err);}
    })
  }
  
  update(name:any,age:any,email:any){
      let newUser = {name,age,email}
      this.uService.updateUser(this.id,newUser).subscribe()
      this.user.name = ''
      this.user.age = ''
      this.user.email = ''
  }



}
