import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  login!: FormGroup;
  student: Register = new Register;
  constructor(private service: RegisterService, private form: FormBuilder) {
    this.login = this.form.group({
      Username: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]],firstname: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]],lastname: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]], emial: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(8), Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,16}$/g')]]
  })
}
ngOnInit(): void {}

submit(){
  this.service.Onclick(this.student).subscribe(
    response => {
      console.log("Successfully Registered", response);
      Swal.fire("Successfully Inserted", 'success', 'success');
      //  last success give tick animation,error give x mark,warning give ! mark
    },
    error => {
      console.log("Error", error);
      Swal.fire("Something Error Happend", 'error', 'error');
    }
  )
}
}
