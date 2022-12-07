import { Pipe, PipeTransform } from '@angular/core';
import {IHumanName} from './model/patient';

@Pipe({
  name: 'patientName'
})
export class PatientNamePipe implements PipeTransform {
  transform(name: IHumanName): unknown {
    return name.text || `${name.given} ${name.given}`;
  }
}
