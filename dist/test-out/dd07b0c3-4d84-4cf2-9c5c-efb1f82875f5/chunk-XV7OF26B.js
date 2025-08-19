import {
  MaskPipe,
  init_mask_pipe_pipe
} from "./chunk-LTLUG5VG.js";
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

// angular:jit:template:src\app\features\users\users-table\users-table.html
var users_table_default;
var init_users_table = __esm({
  "angular:jit:template:src\\app\\features\\users\\users-table\\users-table.html"() {
    users_table_default = `<table mat-table [dataSource]="users" class="mat-elevation-z8">\r
 <!-- Name Column -->\r
  <ng-container matColumnDef="id">\r
    <th mat-header-cell *matHeaderCellDef> ID </th>\r
    <td mat-cell *matCellDef="let element"> {{element.id  }} </td>\r
  </ng-container>\r
\r
   <!-- Name Column -->\r
  <ng-container matColumnDef="name">\r
    <th mat-header-cell *matHeaderCellDef> Name </th>\r
    <td mat-cell *matCellDef="let element"> {{element.name  }} </td>\r
  </ng-container>\r
\r
   <!-- Name Column -->\r
  <ng-container matColumnDef="email">\r
    <th mat-header-cell *matHeaderCellDef> Email </th>\r
    <td mat-cell *matCellDef="let element"> {{element.email }} </td>\r
  </ng-container>\r
\r
  <!-- Name Column -->\r
  <ng-container matColumnDef="password">\r
    <th mat-header-cell *matHeaderCellDef> Password </th>\r
    <td mat-cell *matCellDef="let element"> {{element.password | mask }} </td>\r
  </ng-container>\r
\r
   <!-- Name Column -->\r
  <ng-container matColumnDef="role">\r
    <th mat-header-cell *matHeaderCellDef> Role </th>\r
    <td mat-cell *matCellDef="let element"> {{element.role }} </td>\r
  </ng-container>\r
\r
 \r
   <!-- Acciones Column -->\r
  <ng-container matColumnDef="acciones">\r
    <th *matHeaderCellDef> Acciones </th>\r
    <tr class="text-center" *matCellDef="let element">\r
      <button mat-icon-button color="primary" class="btn btn-success" (click)="onEdit(element)">\r
        <mat-icon>edit</mat-icon>\r
      </button>\r
      <button mat-icon-button color="warn" class="btn btn-danger" (click)="onDelete(element)" [disabled]="role!=='admin'" >\r
        <mat-icon>delete</mat-icon>\r
      </button>\r
    </tr>\r
  </ng-container>\r
\r
   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
\r
\r
</table>`;
  }
});

// angular:jit:style:src\app\features\users\users-table\users-table.scss
var users_table_default2;
var init_users_table2 = __esm({
  "angular:jit:style:src\\app\\features\\users\\users-table\\users-table.scss"() {
    users_table_default2 = "/* src/app/features/users/users-table/users-table.scss */\n/*# sourceMappingURL=users-table.css.map */\n";
  }
});

// src/app/features/users/users-table/users-table.ts
var UsersTable;
var init_users_table3 = __esm({
  "src/app/features/users/users-table/users-table.ts"() {
    "use strict";
    init_tslib_es6();
    init_users_table();
    init_users_table2();
    init_core();
    init_table();
    init_icon();
    init_mask_pipe_pipe();
    UsersTable = class UsersTable2 {
      users = [];
      UserEdit = new EventEmitter();
      UserDelete = new EventEmitter();
      displayedColumns = ["id", "name", "email", "password", "role", "acciones"];
      role = "";
      constructor() {
      }
      ngOnInit() {
        this.role = sessionStorage.getItem("role") || "";
      }
      onDelete(User) {
        this.UserDelete.emit(User);
      }
      onEdit(User) {
        let editUser;
        editUser = User;
        this.UserEdit.emit(editUser);
      }
      static ctorParameters = () => [];
      static propDecorators = {
        users: [{ type: Input }],
        UserEdit: [{ type: Output }],
        UserDelete: [{ type: Output }]
      };
    };
    UsersTable = __decorate([
      Component({
        selector: "app-users-table",
        imports: [MatTableModule, MatIconModule, MaskPipe],
        template: users_table_default,
        styles: [users_table_default2]
      })
    ], UsersTable);
  }
});

export {
  UsersTable,
  init_users_table3 as init_users_table
};
//# sourceMappingURL=chunk-XV7OF26B.js.map
