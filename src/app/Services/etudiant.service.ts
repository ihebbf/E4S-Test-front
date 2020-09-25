import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private httpOptions: any;

  constructor(private httpClient: HttpClient) { }
  getEtudiant(classe:any) {

    return this.httpClient.get<any>(`${environment.apiUrl}/etudiant/getByClasse/`+classe)



  }
  getMatiere(_id:any) {

    return this.httpClient.get<any>(`${environment.apiUrl}/etudiant/getMatiere/`+_id)

  }

  editNote(note,idE,idM) : Observable<any>
  {

    return this.httpClient.put<any>(environment.apiUrl+"/etudiant/modifierNote/"+idE+'/'+idM,note);


  }

  CalculMoyenne(idE) : Observable<any>
  {

    return this.httpClient.get<any>(environment.apiUrl+"/etudiant/CalculerMoyenne/"+idE);


  }


}
