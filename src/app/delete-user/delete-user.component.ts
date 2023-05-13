import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styles: [
  ]
})
export class  DeleteUserComponent{

id:any

constructor( public router:ActivatedRoute,public uService:UserService,public nav:Router){
  this.id = router.snapshot.params['id']
}

  
  yes(){
    this.uService.deleteUser(this.id).subscribe()
    this.nav.navigate(['/users'])
  }

  no(){
    this.nav.navigate(['/users'])
  }
}
