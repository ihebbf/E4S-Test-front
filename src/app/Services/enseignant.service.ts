import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private httpOptions: any;

  constructor(private httpClient: HttpClient) { }
  getClaases(_id:any) {

    return this.httpClient.get<any>(`${environment.apiUrl}/enseignant/getClasse/`+_id)



  }
}
