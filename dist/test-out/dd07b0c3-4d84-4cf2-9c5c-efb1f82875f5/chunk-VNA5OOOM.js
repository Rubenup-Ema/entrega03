import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-PFTOLH65.js";
import {
  CommonModule,
  init_common
} from "./chunk-TN4SF22G.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-OSLE7AZX.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\students\add-student\add-student.html
var add_student_default;
var init_add_student = __esm({
  "angular:jit:template:src\\app\\features\\students\\add-student\\add-student.html"() {
    add_student_default = `
  <h2>A\xF1adir Estudiante</h2>

  <form class="mb-3" [formGroup]="studentForm" (ngSubmit)="onSubmit()">
    
    <!-- Campo ID -->
    <div class="form-group">
      <label for="dni">ID:</label>
      <input 
        type="text" 
        class="form-control"
        id="id" 
        formControlName="id" 
        placeholder="Ingrese ID"
        readonly>
      <div *ngIf="studentForm.get('id')?.invalid && studentForm.get('id')?.touched">
        DNI es requerido
      </div>
    </div>

    <!-- Campo DNI -->
    <div class="form-group">
      <label for="codigo">DNI:</label>
      <input 
        type="text" 
        class="form-control"
        id="codigo" 
        formControlName="codigo" 
        placeholder="Ingrese DNI">
      <div *ngIf="studentForm.get('codigo')?.invalid && studentForm.get('codigo')?.touched">
        DNI es requerido y debe ser mayor 5 caracteres
      </div>
    </div>

    <!-- Campo Nombre -->
    <div class="form-group">
      <label for="name">Nombre:</label>
      <input 
        type="text" 
        class="form-control"
        id="name" 
        formControlName="name" 
        placeholder="Ingrese nombre">
      <div *ngIf="studentForm.get('name')?.invalid && studentForm.get('name')?.touched">
        Nombre es requerido
      </div>
    </div>

    <!-- Campo Apellido -->
    <div class="form-group">
      <label for="surname">Apellido:</label>
      <input 
        type="text" 
        class="form-control"
        id="surname" 
        formControlName="surname" 
        placeholder="Ingrese apellido">
      <div *ngIf="studentForm.get('surname')?.invalid && studentForm.get('surname')?.touched">
        Apellido es requerido
      </div>
    </div>

     <!-- Campo Email -->
    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        type="text" 
        class="form-control"
        id="email" 
        formControlName="email" 
        placeholder="Ingrese el email">
      <div *ngIf="studentForm.get('email')?.invalid && studentForm.get('email')?.touched">
        El email es requerido
      </div>
    </div>

 <!-- Campo Edad -->
    <div class="form-group">
      <label for="age">Edad:</label>
      <input 
        type="number" 
        class="form-control"
        id="age" 
        formControlName="age" 
        placeholder="Ingrese la edad">
         <div *ngIf="studentForm.get('age')?.invalid && studentForm.get('age')?.touched">
        Edad requerida >= 0
      </div>
    </div>


    <!-- Campo Promedio -->
    <div class="form-group">
      <label for="average">Average:</label>
      <input 
        type="number" 
        class="form-control"
        id="avg" 
        formControlName="avg" 
        placeholder="Ingrese promedio">
         <div *ngIf="studentForm.get('avg')?.invalid && studentForm.get('avg')?.touched">
        Promedio requerido [0,100]
      </div>
    </div>

    <!-- Campo Curso -->
    <div class="form-group">
        <label for="curso">Seleccione un curso:</label>
        <select class="form-select" formControlName="courseId" id="cursoId">
            <option [value]="0">-- Seleccionar --</option>
            <option *ngFor="let c of courses" [value]="c.id">
            {{ c.title }}
            </option>
        </select>
    </div>
  </form>

   <div class="row text-center mb-3">

        <div class="col text-center">
            <button type="submit" (click)="onSubmit()" class="btn btn-success" [disabled]="studentForm.invalid" >Agregar Estudiante</button>
            
        </div>

        <div class="col text-center">
            
            <button type="button" (click)="onReset()" class="btn btn-danger" >Salir</button>

        </div>
    

    </div>
`;
  }
});

// angular:jit:style:src\app\features\students\add-student\add-student.scss
var add_student_default2;
var init_add_student2 = __esm({
  "angular:jit:style:src\\app\\features\\students\\add-student\\add-student.scss"() {
    add_student_default2 = "/* src/app/features/students/add-student/add-student.scss */\n/*# sourceMappingURL=add-student.css.map */\n";
  }
});

// src/app/features/students/add-student/add-student.ts
var AddStudent;
var init_add_student3 = __esm({
  "src/app/features/students/add-student/add-student.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_student();
    init_add_student2();
    init_core();
    init_forms();
    init_common();
    AddStudent = class AddStudent2 {
      fb;
      studentForm;
      courses = [];
      studentAdded = new EventEmitter();
      noChanges = new EventEmitter();
      constructor(fb) {
        this.fb = fb;
      }
      ngOnInit() {
        this.studentForm = this.fb.group({
          id: [0, [Validators.required, Validators.min(0)]],
          codigo: ["", [Validators.required, Validators.minLength(5)]],
          name: ["", Validators.required],
          surname: ["", Validators.required],
          age: [0, [Validators.required, Validators.min(0)]],
          avg: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
          email: ["", [Validators.required, Validators.email]],
          courseId: [0, [Validators.required, Validators.min(1)]],
          title: [""]
        });
      }
      onSubmit() {
        this.studentAdded.emit(this.studentForm.value);
      }
      onReset() {
        this.studentForm.reset();
        this.noChanges.emit(true);
      }
      static ctorParameters = () => [
        { type: FormBuilder }
      ];
      static propDecorators = {
        courses: [{ type: Input }],
        studentAdded: [{ type: Output }],
        noChanges: [{ type: Output }]
      };
    };
    AddStudent = __decorate([
      Component({
        selector: "app-add-student",
        imports: [ReactiveFormsModule, CommonModule],
        template: add_student_default,
        styles: [add_student_default2]
      })
    ], AddStudent);
  }
});

export {
  AddStudent,
  init_add_student3 as init_add_student
};
//# sourceMappingURL=chunk-VNA5OOOM.js.map
