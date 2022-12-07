// Описал только необходимые поля
export interface IPatient {
  id: string;
  name: IHumanName[];
  gender: string;
  birthDate: string;
}

export interface IHumanName {
  text: string;
  family: string;
  given: string[];
}
