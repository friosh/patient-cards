import {IPatient} from '../model/patient';
import {IAppointment, IAppointmentResource} from '../model/appointment';

export type IPatientsAppointments = IPatient & { patientAppointments: Pick<IAppointmentResource, "start" | "description">[] };
type IMergePatientsAndAppointments = (patients: IPatient[] | null, appointments: IAppointment[] | null) => IPatientsAppointments[] | undefined | null;

export const mergePatientsAndAppointments: IMergePatientsAndAppointments = (patients, appointments) => appointments && patients?.map(patient => {
  const patientAppointments: Pick<IAppointmentResource, "description" | "start">[] = [];

  appointments.forEach(app => {
    const hasPatientInfo = app.resource.participant.some(participant => participant.actor?.reference?.includes(patient.id));

    if (hasPatientInfo) {
      patientAppointments.push({ start: app.resource.start, description: app.resource.description });
    }
  })

  return {...patient, patientAppointments};
});
