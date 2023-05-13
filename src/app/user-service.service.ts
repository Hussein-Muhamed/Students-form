import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly Base_URL = 'http://localhost:3000/users'
  constructor(private readonly client:HttpClient) {}
    getUsers(){
      return this.client.get(this.Base_URL)
    }
    getUserById(id:any){
      return this.client.get(`${this.Base_URL}/${id}`)
    }
    addUser(newUser:any){
      return this.client.post(this.Base_URL,newUser)
    }
    updateUser(id:any,newUser:any){
      return this.client.put(`${this.Base_URL}/${id}`,newUser)
    }
    deleteUser(id:any){
      return this.client.delete(`${this.Base_URL}/${id}`)
    }
}
