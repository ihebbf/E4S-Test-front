import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Enseignant} from '../Models/Enseignant'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private header: HttpHeaders;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) { }

  login(user:any) {

    return this.httpClient.post<any>(`${environment.apiUrl}/enseignant/login`,user);
  }





}
