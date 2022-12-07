import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {appointmentsLoad, appointmentsLoaded, patientsLoaded} from './app.actions';
import {filter, forkJoin, map, mergeMap, switchMap} from 'rxjs';
import {AppointmentService} from '../data-access/appointment.service';
import {PatientService} from '../data-access/patient.service';
import {Store} from '@ngrx/store';
import {selectPatientReferences} from './app.selectors';

@Injectable()
export class AppEffects {
  public appointmentsLoad$ = createEffect(() => this.actions$.pipe(
    ofType(appointmentsLoad),
    filter(count => !!count.count),
    switchMap(({count}) => this.appointmentSrv.getAppointments(count).pipe(
      map(appointments => appointmentsLoaded({appointments}))
    ))
  ));

  public requestPatients$ = createEffect(() => this.store.select(selectPatientReferences).pipe(
    filter(refs => !!refs?.length),
    map(refs => Array.from(new Set(refs))),
    mergeMap(refs => forkJoin((refs as string[]).map(ref => this.patientSrv.getPatient(ref)))),
    map(patients => patientsLoaded({patients}))
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly appointmentSrv: AppointmentService,
    private readonly patientSrv: PatientService
  ) {
  }
}
