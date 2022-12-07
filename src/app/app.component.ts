import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {appointmentsLoad} from './store/app.actions';
import {selectPatientsAppointments} from './store/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'patient-cards';
  public patientsAppointments$ = this.store.select(selectPatientsAppointments);

  constructor(private readonly store: Store) {
  }

  public ngOnInit() {
    // Можно использовать ngrx/router и вызывать эффект при заходе на страницу
    // вместо явного вызова, либо использовать resolver в роутах
    this.store.dispatch(appointmentsLoad({count: 10}));
  }
}
