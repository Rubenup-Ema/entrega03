import {
  MatTableModule,
  init_table
} from "./chunk-UUFGLTLE.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-OXHJM6CS.js";
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

// angular:jit:template:src\app\features\course\courses-table\courses-table.html
var courses_table_default;
var init_courses_table = __esm({
  "angular:jit:template:src\\app\\features\\course\\courses-table\\courses-table.html"() {
    courses_table_default = `<table mat-table [dataSource]="courses" class="mat-elevation-z8">
 <!-- Name Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef> ID </th>
    <td mat-cell *matCellDef="let element"> {{element.id  }} </td>
  </ng-container>

   <!-- Name Column -->
  <ng-container matColumnDef="title">
    <th mat-header-cell *matHeaderCellDef> Curso </th>
    <td mat-cell *matCellDef="let element"> {{element.title  }} </td>
  </ng-container>

   <!-- Name Column -->
  <ng-container matColumnDef="description">
    <th mat-header-cell *matHeaderCellDef> Descripci\xF3n </th>
    <td mat-cell *matCellDef="let element"> {{element.description }} </td>
  </ng-container>

 
   <!-- Acciones Column -->
  <ng-container matColumnDef="acciones">
    <th *matHeaderCellDef> Acciones </th>
    <tr class="text-center" *matCellDef="let element">
      <button mat-icon-button color="primary" class="btn btn-success" (click)="onEdit(element)">
        <mat-icon>edit</mat-icon>
      </button>
      <button mat-icon-button color="warn" class="btn btn-danger" (click)="onDelete(element)" [disabled]="role!=='admin'">
        <mat-icon>delete</mat-icon>
      </button>
    </tr>
  </ng-container>

   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>


</table>`;
  }
});

// angular:jit:style:src\app\features\course\courses-table\courses-table.scss
var courses_table_default2;
var init_courses_table2 = __esm({
  "angular:jit:style:src\\app\\features\\course\\courses-table\\courses-table.scss"() {
    courses_table_default2 = "/* src/app/features/course/courses-table/courses-table.scss */\n/*# sourceMappingURL=courses-table.css.map */\n";
  }
});

// src/app/features/course/courses-table/courses-table.ts
var CoursesTable;
var init_courses_table3 = __esm({
  "src/app/features/course/courses-table/courses-table.ts"() {
    "use strict";
    init_tslib_es6();
    init_courses_table();
    init_courses_table2();
    init_core();
    init_table();
    init_icon();
    CoursesTable = class CoursesTable2 {
      courses = [];
      CourseEdit = new EventEmitter();
      CourseDelete = new EventEmitter();
      displayedColumns = ["id", "title", "description", "acciones"];
      role = "";
      constructor() {
      }
      ngOnInit() {
        this.role = sessionStorage.getItem("role") || "";
      }
      onDelete(Course) {
        this.CourseDelete.emit(Course);
      }
      onEdit(Course) {
        let editCourse;
        editCourse = Course;
        this.CourseEdit.emit(editCourse);
      }
      static ctorParameters = () => [];
      static propDecorators = {
        courses: [{ type: Input }],
        CourseEdit: [{ type: Output }],
        CourseDelete: [{ type: Output }]
      };
    };
    CoursesTable = __decorate([
      Component({
        selector: "app-courses-table",
        imports: [MatTableModule, MatIconModule],
        template: courses_table_default,
        styles: [courses_table_default2]
      })
    ], CoursesTable);
  }
});

export {
  CoursesTable,
  init_courses_table3 as init_courses_table
};
//# sourceMappingURL=chunk-BMKQS7IL.js.map
