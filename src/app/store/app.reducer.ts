import {createReducer, on} from '@ngrx/store';
import {appointmentsLoaded, patientsLoaded} from './app.actions';
import {IPatient} from '../model/patient';
import {IAppointment} from '../model/appointment';

export interface IAppState {
  patients: IPatient[] | null;
  appointments: IAppointment[] | null;
}

export const initialState: IAppState = {
  patients: null,
  appointments: null,
};

export const appReducer = createReducer(
  initialState,
  on(patientsLoaded, (state, {patients}) => ({...state, patients})),
  on(appointmentsLoaded, (state, {appointments}) => ({...state, appointments}))
);
