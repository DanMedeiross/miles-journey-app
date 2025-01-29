import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {
  formSearch: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formSearch = new FormGroup({
      oneWayTrip: new FormControl(false),
      origin: new FormControl(null),
      destination: new FormControl(null),
      type: new FormControl("Economic"),
      adults: new FormControl(1),
      children: new FormControl(0),
      infants: new FormControl(0)
    })
  }

  getPassengerDescription (): string {
    let description = ''

    const adults = this.formSearch.get('adults')?.value;
    if (adults && adults > 0) {
      description += `${adults} adult${adults > 1 ? 's' : ''}`;
    }

    const children = this.formSearch.get('children')?.value;
    if (children && children > 0) {
      description += `${description ? ', ' : ''}${children} child${children > 1 ? 'ren' : ''}`;
    }

    const infants = this.formSearch.get('infants')?.value;
    if (infants && infants > 0) {
      description += `${description ? ', ' : ''}${infants} infant${infants > 1 ? 's' : ''}`;
    }

    return description
  }

  switchOriginDestination(): void {
    const origin = this.formSearch.get('origin')?.value;
    const destination = this.formSearch.get('destination')?.value;

    this.formSearch.patchValue({
      origin: destination,
      destination: origin
    });
  }

  gainControl(name: string): FormControl {
    const control = this.formSearch.get(name);
    if (!control) {
      throw new Error(`FormControl with name "${name}" doesn't exist`);
    }
    return control as FormControl;
  }

  alterType (event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({
        type
      })
      console.log('Ticket type altered to: ', type)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
