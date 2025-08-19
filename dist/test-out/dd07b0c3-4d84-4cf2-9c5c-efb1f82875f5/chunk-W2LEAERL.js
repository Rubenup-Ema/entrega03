import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-KRN7HVK5.js";
import {
  CommonModule,
  init_common
} from "./chunk-HKV4MEHV.js";
import {
  Component,
  EventEmitter,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-54PHUPNT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\course\add-course\add-course.html
var add_course_default;
var init_add_course = __esm({
  "angular:jit:template:src\\app\\features\\course\\add-course\\add-course.html"() {
    add_course_default = `<div class="container bg-light">
  <h2>A\xF1adir Curso</h2>

  <form class="mb-3" [formGroup]="courseForm" (ngSubmit)="onSubmit()">
    
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
      <div *ngIf="courseForm.get('dni')?.invalid && courseForm.get('dni')?.touched">
        DNI es requerido
      </div>
    </div>

    <!-- Campo Title -->
    <div class="form-group">
      <label for="name">Curso:</label>
      <input 
        type="text" 
        class="form-control"
        id="title" 
        formControlName="title" 
        placeholder="Ingrese nombre del curso">
      <div *ngIf="courseForm.get('title')?.invalid && courseForm.get('title')?.touched">
        Nombre del curso es requerido
      </div>
    </div>

    <!-- Campo Apellido -->
    <div class="form-group">
      <label for="surname">Descripci\xF3n:</label>
      <input 
        type="text" 
        class="form-control"
        id="description" 
        formControlName="description" 
        placeholder="Ingrese breve descripci\xF3n">
      <div *ngIf="courseForm.get('description')?.invalid && courseForm.get('description')?.touched">
        Descripci\xF3n es requerido
      </div>
    </div>

 

  </form>

   <div class="row text-center mb-3">

        <div class="col text-center">
            <button type="submit" (click)="onSubmit()" class="btn btn-success" [disabled]="courseForm.invalid" >Agregar Curso</button>
            
        </div>

        <div class="col text-center">
            
            <button type="button" (click)="onReset()" class="btn btn-danger" >Salir</button>

        </div>
    

    </div>
</div>`;
  }
});

// angular:jit:style:src\app\features\course\add-course\add-course.scss
var add_course_default2;
var init_add_course2 = __esm({
  "angular:jit:style:src\\app\\features\\course\\add-course\\add-course.scss"() {
    add_course_default2 = "/* src/app/features/course/add-course/add-course.scss */\n/*# sourceMappingURL=add-course.css.map */\n";
  }
});

// src/app/features/course/add-course/add-course.ts
var AddCourse;
var init_add_course3 = __esm({
  "src/app/features/course/add-course/add-course.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_course();
    init_add_course2();
    init_core();
    init_forms();
    init_common();
    AddCourse = class AddCourse2 {
      fb;
      courseForm;
      courseAdded = new EventEmitter();
      noChanges = new EventEmitter();
      constructor(fb) {
        this.fb = fb;
      }
      ngOnInit() {
        this.courseForm = this.fb.group({
          id: [0, [Validators.required]],
          title: ["", Validators.required],
          description: ["", Validators.required]
        });
      }
      onSubmit() {
        this.courseAdded.emit(this.courseForm.value);
      }
      onReset() {
        this.courseForm.reset();
        this.noChanges.emit(true);
      }
      static ctorParameters = () => [
        { type: FormBuilder }
      ];
      static propDecorators = {
        courseAdded: [{ type: Output }],
        noChanges: [{ type: Output }]
      };
    };
    AddCourse = __decorate([
      Component({
        selector: "app-add-course",
        imports: [ReactiveFormsModule, CommonModule],
        template: add_course_default,
        styles: [add_course_default2]
      })
    ], AddCourse);
  }
});

export {
  AddCourse,
  init_add_course3 as init_add_course
};
//# sourceMappingURL=chunk-W2LEAERL.js.map
