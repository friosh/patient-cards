import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {IAppointment, IAppointmentResponse} from '../model/appointment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly url = "https://hapi.fhir.org/baseR4/Appointment";
  constructor(private http: HttpClient) { }

  public getAppointments(count: number = 0): Observable<IAppointment[]> {
    const query = count > 0 ? `?_count=${count}` : '';
    const urlWithQuery = `${this.url}${query}`;
    return this.http.get<IAppointmentResponse>(urlWithQuery).pipe(
      map(response => response.entry)
    );
  }
}
