import {
  AddStudent,
  init_add_student
} from "./chunk-VNA5OOOM.js";
import {
  EditStudent,
  init_edit_student
} from "./chunk-DFMHYYBT.js";
import {
  ServiceStudents,
  init_service_students
} from "./chunk-IXUWBZ3H.js";
import {
  StudentsTable,
  init_students_table
} from "./chunk-AJOJU6EC.js";
import "./chunk-GUMMJGYU.js";
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
  FormsModule,
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

// angular:jit:template:src\app\features\students\students.html
var students_default;
var init_students = __esm({
  "angular:jit:template:src\\app\\features\\students\\students.html"() {
    students_default = '<div class="container-fluid">\n\n\n   <div class="row mt-1">\n\n        <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\n        <h5 class="mb-0 d-flex"><mat-icon>how_to_reg</mat-icon> Estudiantes</h5>\n        <button class="btn btn-primary" (click)="newStudent()">Nuevo</button>\n        </div>\n\n    </div>\n\n    <div class="row mt-2">\n\n         <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\n\n             <div  class="w-100" >\n                 \n                 <app-students-table *ngIf="formVisible[0]===true"  [students]="students" (studentDelete)="onDelete($event)" (studentEdit)="onEdit($event)"></app-students-table>\n                 <app-add-student *ngIf="formVisible[1]" [courses]="courses" (noChanges)="noChangeNewSudent($event)" (studentAdded)="addStudent($event)"></app-add-student>\n                 <app-edit-student *ngIf="formVisible[2]" [courses]="courses" [studentEdit]="editStudent" (noChanges)="noChangeNewSudent($event)" (studentEdited)="editedStudent($event)"></app-edit-student>\n             </div>\n\n        \n\n         </div>\n\n    </div>\n\n\n</div>';
  }
});

// angular:jit:style:src\app\features\students\students.scss
var students_default2;
var init_students2 = __esm({
  "angular:jit:style:src\\app\\features\\students\\students.scss"() {
    students_default2 = "/* src/app/features/students/students.scss */\n/*# sourceMappingURL=students.css.map */\n";
  }
});

// src/app/features/students/students.ts
var Students;
var init_students3 = __esm({
  "src/app/features/students/students.ts"() {
    "use strict";
    init_tslib_es6();
    init_students();
    init_students2();
    init_core();
    init_students_table();
    init_service_students();
    init_dialog();
    init_confirm_dialog();
    init_message();
    init_forms();
    init_common();
    init_add_student();
    init_courses_service();
    init_edit_student();
    init_icon();
    Students = class Students2 {
      _servicios;
      _serviciosC;
      dialog;
      snackBar;
      courses = [];
      students = [];
      editStudent;
      formVisible = [true, false, false];
      // [list, add, edit]
      constructor(_servicios, _serviciosC, dialog, snackBar) {
        this._servicios = _servicios;
        this._serviciosC = _serviciosC;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }
      ngOnInit() {
        return __async(this, null, function* () {
          yield this.loadCourses();
          this.formVisible[0] = true;
        });
      }
      loadStudents() {
        return __async(this, null, function* () {
          yield this._servicios.loadStudents().subscribe({
            next: (data) => {
              this.students = data;
              this.students.forEach((element) => {
                element.title = this.titleCourse(element.courseId);
              });
              this.students = [...this.students];
              this.noChangeNewSudent(true);
            },
            error: (err) => {
              this.snackBar.show(err.message);
            },
            complete: () => {
              this.students = [...this.students];
            }
          });
        });
      }
      titleCourse(id) {
        const curso = this.courses.find((item) => item.id.toString() === id.toString());
        if (curso) {
          return curso.title;
        } else {
          return "NOT COURSING";
        }
      }
      loadCourses() {
        return __async(this, null, function* () {
          yield this._serviciosC.loadCourses().subscribe({
            next: (response) => {
              this.courses = response;
            },
            error: (err) => {
              this.snackBar.show(`UPS!! ha pasado algo ${err.message}`);
            },
            complete: () => {
              this.loadStudents();
            }
          });
        });
      }
      newStudent() {
        this.formVisible = [false, true, false];
      }
      noChangeNewSudent(value) {
        this.formVisible = [value, false, false];
      }
      addStudent(student) {
        this._servicios.addStudent(student).subscribe({
          next: (data) => {
            if (data) {
              this.snackBar.show("ADDED Student!!!");
            }
          },
          error: (err) => {
            this.snackBar.show(err.message);
          },
          complete: () => {
            this.loadStudents();
          }
        });
      }
      editedStudent(studentEdit) {
        this._servicios.editStudent(studentEdit).subscribe({
          next: (data) => {
            if (data) {
              this.snackBar.show("UPDATE Student!!!");
              const index = this.students.findIndex((student) => student.id === studentEdit.id);
              if (index !== -1) {
                var course = this.courses.find((course2) => course2.id == studentEdit.courseId);
                studentEdit.title = "" + course?.title;
                this.students[index] = __spreadValues({}, studentEdit);
                this.students = [...this.students];
              }
              this.noChangeNewSudent(true);
            }
          },
          error: (err) => {
            this.snackBar.show(err.message);
          }
        });
      }
      onEdit(studentEdit) {
        this.editStudent = studentEdit;
        this.formVisible = [false, false, true];
      }
      onDelete(studentDelete) {
        const dialogRef = this.dialog.open(ConfirmDialog, {
          width: "450px",
          height: "200px",
          data: { mensaje: "\xBFEst\xE1s seguro de eliminar al estudiante " + studentDelete.name + "?" }
        });
        dialogRef.afterClosed().subscribe((resultado) => {
          if (resultado) {
            this._servicios.deleteStudent(studentDelete.id).subscribe({
              next: (response) => {
                if (response) {
                  this.students = this.students.filter((student) => student.id !== studentDelete.id);
                  this.snackBar.show("DELETED Student!!!");
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
        { type: ServiceStudents },
        { type: CoursesService },
        { type: MatDialog },
        { type: Message }
      ];
    };
    Students = __decorate([
      Component({
        selector: "app-students",
        imports: [StudentsTable, FormsModule, CommonModule, AddStudent, EditStudent, MatIcon],
        template: students_default,
        styles: [students_default2]
      })
    ], Students);
  }
});

// src/app/features/students/students.spec.ts
var require_students_spec = __commonJS({
  "src/app/features/students/students.spec.ts"(exports) {
    init_testing();
    init_students3();
    describe("Students", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Students]
        }).compileComponents();
        fixture = TestBed.createComponent(Students);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_students_spec();
//# sourceMappingURL=spec-students.spec.js.map
