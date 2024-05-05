import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  baseUrl:string = environment.baseUrl;
  basePath:string = '/participants';

  constructor(private http: HttpClient) { }

  getParticipants(){
    return this.http.get(this.baseUrl + this.basePath);
  }
}
