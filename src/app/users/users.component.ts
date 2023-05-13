import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users: any;
  
  id:any

  constructor(public uService:UserService, router:ActivatedRoute){
    this.id = router.snapshot.params['id']
  }

  ngOnInit(): void {
    this.uService.getUsers().subscribe({
      next:(data)=>{this.users = data},
      error:(err)=>{console.log(err);}
    })
  }
}
