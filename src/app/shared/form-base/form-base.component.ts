import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FederativeUnit } from '../../core/types/type';
import { FormService } from '../../core/services/form.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  standalone: false,

  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent implements OnInit {
  registrationForm!: FormGroup;
  stateControl = new FormControl<FederativeUnit | null>(null, Validators.required);

  @Input() profileComponent = false;
  @Input() title: string = 'Create an account';
  @Input() buttonText: string = 'Register';
  @Output() clickAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() exit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private formService : FormService) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['other'],
      telefone: [null, Validators.required],
      estado: this.stateControl,
      confirmEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      acceptTerms: [null, [Validators.requiredTrue]]
    });
    if(this.profileComponent) {
      this.registrationForm.get('acceptTerms')?.setValidators(null);
    } else {
      this.registrationForm.get('acceptTerms')?.setValidators([Validators.requiredTrue]);
    }
    this.registrationForm.get('acceptTerms')?.updateValueAndValidity();

    this.formService.setRegister(this.registrationForm);
  }

  executeAction() {
    // Implement action based on form data
    this.clickAction.emit();
  }

  logout() {
    this.exit.emit();
  }
}
