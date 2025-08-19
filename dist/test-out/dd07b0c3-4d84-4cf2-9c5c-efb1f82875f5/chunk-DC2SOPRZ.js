import {
  FullnamePipe,
  init_fullname_pipe
} from "./chunk-4I3RLDQ2.js";
import {
  MatTableModule,
  init_table
} from "./chunk-FET4QGLO.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-YXINU2IW.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-54PHUPNT.js";
import {
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\students\students-table\students-table.html
var students_table_default;
var init_students_table = __esm({
  "angular:jit:template:src\\app\\features\\students\\students-table\\students-table.html"() {
    students_table_default = `<table mat-table [dataSource]="students" class="mat-elevation-z8">
 <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Nombre </th>
    <td mat-cell *matCellDef="let element"> {{element.name  }} </td>
  </ng-container>

   <!-- Name Column -->
  <ng-container matColumnDef="surname">
    <th mat-header-cell *matHeaderCellDef> Apellido </th>
    <td mat-cell *matCellDef="let element"> {{element.surname  }} </td>
  </ng-container>

   <!-- Name Column -->
  <ng-container matColumnDef="fullname">
    <th mat-header-cell *matHeaderCellDef> Nombre Completo </th>
    <td mat-cell *matCellDef="let element"> {{element.name | fullname: element.surname }} </td>
  </ng-container>
   <!-- Name Column -->
  <ng-container matColumnDef="age">
    <th mat-header-cell *matHeaderCellDef> Edad </th>
    <td mat-cell *matCellDef="let element"> {{element.age  }} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="dni">
    <th mat-header-cell *matHeaderCellDef> DNI </th>
    <td mat-cell *matCellDef="let element"> {{element.codigo}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="title">
    <th mat-header-cell *matHeaderCellDef> Curso </th>
    <td mat-cell *matCellDef="let element"> {{element.title}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="average">
    <th mat-header-cell *matHeaderCellDef> Average </th>
    <td mat-cell *matCellDef="let element"> {{element.avg}} </td>
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

// angular:jit:style:src\app\features\students\students-table\students-table.scss
var students_table_default2;
var init_students_table2 = __esm({
  "angular:jit:style:src\\app\\features\\students\\students-table\\students-table.scss"() {
    students_table_default2 = "/* src/app/features/students/students-table/students-table.scss */\n/*# sourceMappingURL=students-table.css.map */\n";
  }
});

// src/app/features/students/students-table/students-table.ts
var StudentsTable;
var init_students_table3 = __esm({
  "src/app/features/students/students-table/students-table.ts"() {
    "use strict";
    init_tslib_es6();
    init_students_table();
    init_students_table2();
    init_core();
    init_table();
    init_icon();
    init_fullname_pipe();
    StudentsTable = class StudentsTable2 {
      students = [];
      studentEdit = new EventEmitter();
      studentDelete = new EventEmitter();
      displayedColumns = ["name", "surname", "fullname", "age", "dni", "average", "title", "acciones"];
      role = "";
      constructor() {
      }
      ngOnInit() {
        this.role = sessionStorage.getItem("role") || "";
      }
      onDelete(student) {
        this.studentDelete.emit(student);
      }
      onEdit(student) {
        let editStudent;
        editStudent = __spreadValues({}, student);
        this.studentEdit.emit(editStudent);
      }
      static ctorParameters = () => [];
      static propDecorators = {
        students: [{ type: Input }],
        studentEdit: [{ type: Output }],
        studentDelete: [{ type: Output }]
      };
    };
    StudentsTable = __decorate([
      Component({
        selector: "app-students-table",
        imports: [MatTableModule, FullnamePipe, MatIconModule],
        template: students_table_default,
        styles: [students_table_default2]
      })
    ], StudentsTable);
  }
});

export {
  StudentsTable,
  init_students_table3 as init_students_table
};
//# sourceMappingURL=chunk-DC2SOPRZ.js.map
