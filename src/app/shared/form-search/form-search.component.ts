import { Component, inject } from '@angular/core';
import { FormSearchService } from '../../core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  standalone: false,

  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.scss'
})
export class FormSearchComponent {
  constructor(public formSearchService : FormSearchService) {}

  search() {
    console.log(this.formSearchService.formSearch.value);
  }
}
