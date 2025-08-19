import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-7LUDZOXF.js";
import {
  CommonModule,
  init_common
} from "./chunk-XWXE3BYN.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CYARENY7.js";
import {
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\course\edit-course\edit-course.html
var edit_course_default;
var init_edit_course = __esm({
  "angular:jit:template:src\\app\\features\\course\\edit-course\\edit-course.html"() {
    edit_course_default = `<div class="container bg-light">
  <h2>Editar Curso</h2>

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
            <button type="submit" (click)="onSubmit()" class="btn btn-success" [disabled]="courseForm.invalid" >Editar Curso</button>
            
        </div>

        <div class="col text-center">
            
            <button type="button" (click)="onReset()" class="btn btn-danger" >Salir</button>

        </div>
    

    </div>
</div>`;
  }
});

// angular:jit:style:src\app\features\course\edit-course\edit-course.scss
var edit_course_default2;
var init_edit_course2 = __esm({
  "angular:jit:style:src\\app\\features\\course\\edit-course\\edit-course.scss"() {
    edit_course_default2 = "/* src/app/features/course/edit-course/edit-course.scss */\n/*# sourceMappingURL=edit-course.css.map */\n";
  }
});

// src/app/features/course/edit-course/edit-course.ts
var EditCourse;
var init_edit_course3 = __esm({
  "src/app/features/course/edit-course/edit-course.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_course();
    init_edit_course2();
    init_core();
    init_forms();
    init_common();
    EditCourse = class EditCourse2 {
      fb;
      courseForm;
      courseEdited = new EventEmitter();
      noChanges = new EventEmitter();
      _courseEdit;
      course = { id: 0, title: "", description: "" };
      set courseEdit(value) {
        if (value) {
          this._courseEdit = value;
          this.course = __spreadValues({}, value);
          if (this.courseForm) {
            this.loadCourseData();
          }
        }
      }
      constructor(fb) {
        this.fb = fb;
      }
      loadCourseData() {
        this.courseForm.setValue({
          id: this.course.id,
          title: this.course.title,
          description: this.course.description
        });
      }
      ngOnInit() {
        this.courseForm = this.fb.group({
          id: [0, [Validators.required]],
          title: ["", Validators.required],
          description: ["", Validators.required]
        });
        if (this._courseEdit) {
          this.loadCourseData();
        }
      }
      onSubmit() {
        this.courseEdited.emit(this.courseForm.value);
      }
      onReset() {
        this.noChanges.emit(true);
      }
      static ctorParameters = () => [
        { type: FormBuilder }
      ];
      static propDecorators = {
        courseEdited: [{ type: Output }],
        noChanges: [{ type: Output }],
        courseEdit: [{ type: Input }]
      };
    };
    EditCourse = __decorate([
      Component({
        selector: "app-edit-course",
        imports: [ReactiveFormsModule, CommonModule],
        template: edit_course_default,
        styles: [edit_course_default2]
      })
    ], EditCourse);
  }
});

export {
  EditCourse,
  init_edit_course3 as init_edit_course
};
//# sourceMappingURL=chunk-4XVKQQWZ.js.map
