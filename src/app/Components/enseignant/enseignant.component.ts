import { Component, OnInit } from '@angular/core';
import {Enseignant} from '../../Models/Enseignant';
import {Etudiant} from '../../Models/Etudiant';

import {AuthentificationService} from '../../Services/authentification.service';
import {Router} from '@angular/router';
import {EnseignantService} from '../../Services/enseignant.service';
import {EtudiantService} from '../../Services/etudiant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
 enseignant:Enseignant
  classes:[]
  show: boolean;
  classe: any;
  etudiants: Array<Etudiant> = []
  etudiant: any;
  matieres: [];
  matiere: any;
  showEtudiant: boolean;
  showNote: boolean;
  note: any;

    constructor(private enseignantService: EnseignantService,private router:Router,private etudiantService: EtudiantService) { }

    ngOnInit(): void {
      this.etudiants=[]

      this.enseignant=new Enseignant();

      console.log()
      this.enseignantService.getClaases(localStorage.getItem("userToken")).subscribe((data)=>{
        this.classes=data
        this.show=false
        this.showNote=false

        this.showEtudiant=false
        console.log(this.classe)

      },(err)=>{})

  }



  setReplyTypeValue() {

    console.log(this.classe)
    this.etudiantService.getEtudiant(this.classe).subscribe((data)=>{
      this.etudiants=data
      this.show=true
      console.log(this.classe)

    },(err)=>{})

  }



  onChangeEtudiant() {
    this.etudiantService.getMatiere(this.etudiant).subscribe((data)=>{
      this.matieres=data
      this.showEtudiant=true

    },(err)=>{})

  }

  onChangeMatiere() {
    this.showNote=true

  }

  AjoutNote() {
    this.etudiantService.editNote({"note":this.note},this.etudiant,this.matiere).subscribe((data)=>{
  alert("Note affectée avec succes")
    },(err)=>{})

  }

}
