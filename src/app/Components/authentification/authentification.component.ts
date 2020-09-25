import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/authentification.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Enseignant} from '../../Models/Enseignant';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

   isLogError: boolean=false;
   user: Enseignant;

  constructor(private authService: AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    this.user=new Enseignant();

  }

  Onlogin(){
console.log(this.user)
    this.authService.login(this.user).subscribe(data => {

    localStorage.setItem('userToken',data._id)
        this.isLogError=false;
    console.log(data.role)
  if(data.role==="enseignant")
    this.router.navigate(['/enseignant'])
      else if(data.role==="etudiant")
    this.router.navigate(['/etudiant'])

    },
      (err : HttpErrorResponse)=>{
      this.isLogError=true;
      });
  }

}
