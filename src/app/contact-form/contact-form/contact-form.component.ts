import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  title = 'Contact form';
  subtitle = 'Gracias por tomarte el tiempo para contactar con nosotros y ayudarnos a mejorar';

  roles = ['Estudiante','Trabajo a tiempo completo','Freelance','Busco trabajo'];
  recoOthers = [
    {key: 'Yes', value: 'Definitivamente sí'},
    {key: 'Maybe', value: 'Quizás'},
    {key: 'NotShure', value: 'No estoy seguro'},
    {key: 'No', value: 'No la verdad'},
  ]
  recoOptions = [
    {key: 'Front', value: 'Proyectos Front-end'},
    {key: 'Back', value: 'Proyectos Back-end'},
    {key: 'Media', value: 'Social media (Marketing)'},
    {key: 'VideoGames', value: 'Desarollo de Videojuegos'},
    {key: 'UIUX', value: 'Tutoriales de UX/UI'},
    {key: 'Others', value: 'Otros'},
  ]

  profileForm = this.fb.group({
    fullname: ['', {
      validators: Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required,
      ]),
      updateOn: 'submit',
    }],
    email: ['',{
      validators: Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    age: ['',{
      validators: Validators.compose([
        Validators.min(18),
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    rol: ['',{
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    recoOth: ['',{
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    recoOpt: ['',{
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    date: ['',{
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    text: ['',{
      validators: Validators.compose([
        Validators.maxLength(5),
      ]),
      updateOn: 'blur',
    }],
  });

  validation_messages = {
    'fullname': [
      { type: 'required', message: 'El nombre es requerido' },
      { type: 'minlength', message: 'El nombre debe tener al menos 5 caracteres' },
      { type: 'maxlength', message: 'El nombre debe tener máximo 25 caracteres' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
    ],
    'email': [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'Email no valido' }
    ],
    'age': [
      { type: 'required', message: 'La edad es requerida' },
      { type: 'min', message: 'Edad minima de 18 años' }
    ],
    'rol': [
      { type: 'required', message: 'Debes seleccionar un rol' },
    ],
    'option': [
      { type: 'required', message: 'Debes seleccionar una opción' },
    ],
    'date': [
      { type: 'required', message: 'La fecha es requerida' },
    ],
    'text': [
      { type: 'maxlength', message: 'El comentario debe ser menor a 20 caracteres' },
    ],
    
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.querySelector('body')?.classList.add('contact');
  }

  ngOnDestroy() {
    document.querySelector('body')?.classList.remove('contact');
  }

  onSubmit() {
    if(this.profileForm.valid){
      alert('VALID');
    }else {
      alert('INVALID');
      
    }
    
    

  }

}
