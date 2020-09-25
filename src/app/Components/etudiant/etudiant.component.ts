import { Component, OnInit } from '@angular/core';
import {EnseignantService} from '../../Services/enseignant.service';
import {Router} from '@angular/router';
import {EtudiantService} from '../../Services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  matieres: any;
   moyenne: any;

  constructor(private enseignantService: EnseignantService,private router:Router,private etudiantService: EtudiantService) { }

  ngOnInit(): void {

    this.etudiantService.getMatiere(localStorage.getItem("userToken")).subscribe((data)=>{
      this.matieres=data


    },(err)=>{})


    this.etudiantService.CalculMoyenne(localStorage.getItem("userToken")).subscribe((data)=>{
this.moyenne=data.moyenne
    },(err)=>{})




  }


}
