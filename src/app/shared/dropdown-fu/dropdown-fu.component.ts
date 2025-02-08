import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FederativeUnitService } from '../../core/services/federative-unit.service';
import { FederativeUnit } from '../../core/types/type';

@Component({
  selector: 'app-dropdown-fu',
  standalone: false,

  templateUrl: './dropdown-fu.component.html',
  styleUrl: './dropdown-fu.component.scss'
})
export class DropdownFuComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconPrefix: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  federativeUnits: FederativeUnit[] = [];

  filteredOptions$? : Observable<FederativeUnit[]>;

  constructor (private federativeUnitService: FederativeUnitService) {}

  ngOnInit(): void {
    this.federativeUnitService.list().subscribe(data => {
      this.federativeUnits = data;
      console.log(this.federativeUnits);
    })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filterFus(value))
    )
  }

  filterFus(value: string | FederativeUnit): FederativeUnit[] {
    const nameFu = typeof value === 'string' ? value : value?.nome;
    const filteredValue = nameFu?.toLowerCase();
    const result = this.federativeUnits.filter(
      estado => estado.nome.toLowerCase().includes(filteredValue)
    )
    return result;
  }

  displayFn(estado: FederativeUnit): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
