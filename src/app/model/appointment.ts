// Описал только необходимые поля
export interface IAppointmentResponse {
  entry: IAppointment[]
}

export interface IAppointment {
  resource: IAppointmentResource;
}

export interface IAppointmentResource {
  start: string;
  description: string;
  participant: IAppointmentParticipant[];
}

export interface IAppointmentParticipant {
  actor: IAppointmentActor;
}

export interface IAppointmentActor {
  reference: string;
}
