import {
  CoursesTable,
  init_courses_table
} from "./chunk-BMKQS7IL.js";
import {
  EditCourse,
  init_edit_course
} from "./chunk-XEVXC5B2.js";
import {
  CoursesService,
  init_courses_service
} from "./chunk-ON3P5WH6.js";
import {
  ConfirmDialog,
  MatDialog,
  init_confirm_dialog,
  init_dialog
} from "./chunk-6DRM22MQ.js";
import "./chunk-UUFGLTLE.js";
import {
  MatIcon,
  init_icon
} from "./chunk-OXHJM6CS.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-PFTOLH65.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import {
  Message,
  init_message
} from "./chunk-GRB46NGQ.js";
import "./chunk-EXAOP4IR.js";
import "./chunk-UU536HXB.js";
import "./chunk-ZTMR27KN.js";
import "./chunk-NRHMCMVT.js";
import "./chunk-6DWKSTVF.js";
import {
  CommonModule,
  init_common
} from "./chunk-TN4SF22G.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import {
  Component,
  EventEmitter,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-OSLE7AZX.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\course\course.html
var course_default;
var init_course = __esm({
  "angular:jit:template:src\\app\\features\\course\\course.html"() {
    course_default = '<div class="container-fluid">\n\n\n    <div class="row">\n\n    </div>\n\n    <div class="row mt-1">\n\n        <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\n        <h5 class="mb-0 d-flex"><mat-icon>library_books</mat-icon> Cursos</h5>\n        <button class="btn btn-primary" (click)="newCourse()">Nuevo</button>\n        </div>\n\n    </div>\n\n    <div class="row mt-1">\n\n         <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\n\n             <div  class="w-100">\n                 \n                <app-courses-table *ngIf="formVisible[0]"  [courses]="courses" (CourseDelete)="onDelete($event)" (CourseEdit)="onEdit($event)"></app-courses-table>\n                \n                <app-add-course *ngIf="formVisible[1]" (courseAdded)="addCourse($event)" (noChanges)="noChangeNewCourse($event)"></app-add-course>\n\n                <app-edit-course *ngIf="formVisible[2]" [courseEdit]="editCourse" (courseEdited)="editedCourse($event)"  (noChanges)="noChangeEditCourse($event)" ></app-edit-course>\n\n             </div>\n\n\n         </div>\n\n\n    </div>\n\n\n</div>';
  }
});

// angular:jit:style:src\app\features\course\course.scss
var course_default2;
var init_course2 = __esm({
  "angular:jit:style:src\\app\\features\\course\\course.scss"() {
    course_default2 = "/* src/app/features/course/course.scss */\n/*# sourceMappingURL=course.css.map */\n";
  }
});

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

// src/app/features/course/course.ts
var Courses;
var init_course3 = __esm({
  "src/app/features/course/course.ts"() {
    "use strict";
    init_tslib_es6();
    init_course();
    init_course2();
    init_core();
    init_courses_table();
    init_courses_service();
    init_dialog();
    init_message();
    init_confirm_dialog();
    init_common();
    init_add_course3();
    init_edit_course();
    init_icon();
    Courses = class Courses2 {
      _servicios;
      dialog;
      snackBar;
      editCourse;
      courses = [];
      formVisible = [false, false, false];
      // [list, add, edit]
      constructor(_servicios, dialog, snackBar) {
        this._servicios = _servicios;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }
      ngOnInit() {
        this.loadCourses();
        this.formVisible[0] = true;
      }
      loadCourses() {
        this._servicios.loadCourses().subscribe({
          next: (response) => {
            this.courses = response;
            this.noChangeNewCourse(true);
          },
          error: (err) => {
            console.log(err);
            this.snackBar.show(`UPS!! ha pasado algo ${err.message}`);
          },
          complete: () => {
            console.log("Proceso completado!!");
          }
        });
      }
      newCourse() {
        this.formVisible = [false, true, false];
      }
      noChangeNewCourse(value) {
        this.formVisible = [value, false, false];
      }
      addCourse(course) {
        this._servicios.addCourse(course).subscribe({
          next: (response) => {
            if (response) {
              this.snackBar.show("REGISTERED Course!!!");
              this.loadCourses();
            }
            this.noChangeNewCourse(true);
          },
          error: (err) => {
            this.snackBar.show(err.message);
          }
        });
      }
      editedCourse(courseEdit) {
        this._servicios.editCourse(courseEdit).subscribe({
          next: (response) => {
            if (response) {
              this.snackBar.show("UPDATED Course!!!");
              const index = this.courses.findIndex((course) => course.id === courseEdit.id);
              if (index !== -1) {
                this.courses[index] = __spreadValues({}, courseEdit);
                this.courses = [...this.courses];
              }
              this.noChangeEditCourse(true);
            }
          },
          error: (err) => {
            this.snackBar.show(err.message);
          }
        });
      }
      onEdit(courseEdit) {
        this.editCourse = courseEdit;
        this.formVisible = [false, false, true];
      }
      noChangeEditCourse(value) {
        this.formVisible = [value, false, false];
      }
      onDelete(courseDelete) {
        const dialogRef = this.dialog.open(ConfirmDialog, {
          width: "450px",
          height: "250px",
          data: { mensaje: "\xBFEst\xE1s seguro de eliminar el curso " + courseDelete.title + "?" }
        });
        dialogRef.afterClosed().subscribe((resultado) => {
          if (resultado) {
            this._servicios.deleteCourse(courseDelete.id).subscribe({
              next: (value) => {
                if (value) {
                  this.courses = this.courses.filter((course) => course.id !== courseDelete.id);
                  this.snackBar.show("DELETED Course!!!");
                }
              },
              error: (err) => {
                console.log(err);
                this.snackBar.show(`Ha sucedido lo siguiente ${err.message}`);
              }
            });
          } else {
            console.log("El usuario cancel\xF3");
          }
        });
      }
      static ctorParameters = () => [
        { type: CoursesService },
        { type: MatDialog },
        { type: Message }
      ];
    };
    Courses = __decorate([
      Component({
        selector: "app-course",
        imports: [CoursesTable, CommonModule, AddCourse, EditCourse, MatIcon],
        template: course_default,
        styles: [course_default2]
      })
    ], Courses);
  }
});

// src/app/features/course/course.spec.ts
var require_course_spec = __commonJS({
  "src/app/features/course/course.spec.ts"(exports) {
    init_testing();
    init_course3();
    describe("Course", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Courses]
        }).compileComponents();
        fixture = TestBed.createComponent(Courses);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_course_spec();
//# sourceMappingURL=spec-course.spec.js.map
