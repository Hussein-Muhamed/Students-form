import { Component,OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  id:any
  user:any

  constructor(public uService:UserService,router:ActivatedRoute){
    this.id = router.snapshot.params['id']
    console.log(router);
  }

  ngOnInit(): void {
    this.uService.getUserById(this.id).subscribe({
      next:(data)=>{this.user = data},
      error:(err)=>{console.log(err);}
    })
  }


  delete(){
    this.uService.deleteUser(this.id).subscribe()
  }
}
