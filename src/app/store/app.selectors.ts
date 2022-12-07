import {IAppState} from './app.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {mergePatientsAndAppointments} from '../utilities/functions';

export const selectState = createFeatureSelector<IAppState>('app');

export const selectPatients = createSelector(selectState, (state: IAppState) => state.patients);
export const selectAppointments = createSelector(selectState, (state: IAppState) => state.appointments);
export const selectPatientReferences = createSelector(selectAppointments, state => state && state.map(
    appointment => appointment.resource.participant.map(participant => participant?.actor?.reference)
  )
    .flat()
    .filter(ref => !!ref)
);

export const selectPatientsAppointments = createSelector(selectPatients, selectAppointments, mergePatientsAndAppointments);
