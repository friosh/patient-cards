import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPatient} from '../model/patient';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url = 'http://hapi.fhir.org/baseR4';
  constructor(private http: HttpClient) { }

  public getPatient(reference: string): Observable<IPatient> {
    return this.http.get<IPatient>(`${this.url}/${reference}`);
  }
}
