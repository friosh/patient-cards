import {createAction, props} from '@ngrx/store';
import {IAppointment} from '../model/appointment';
import {IPatient} from '../model/patient';

export const appointmentsLoad = createAction('[App] Appointments Load', props<{ count?: number }>());
export const appointmentsLoaded = createAction('[App] Appointments Load', props<{ appointments: IAppointment[] }>());
export const patientsLoaded = createAction('[Patient] Patient Loaded', props<{ patients: IPatient[] }>());
