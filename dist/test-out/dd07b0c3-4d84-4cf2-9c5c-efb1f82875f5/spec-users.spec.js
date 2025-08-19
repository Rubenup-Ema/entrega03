import {
  AddUser,
  init_add_user
} from "./chunk-DPEWCIGQ.js";
import {
  EditUser,
  init_edit_user
} from "./chunk-4TKORTNX.js";
import {
  UsersTable,
  init_users_table
} from "./chunk-XV7OF26B.js";
import "./chunk-LTLUG5VG.js";
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
import "./chunk-PFTOLH65.js";
import {
  UsersService,
  init_users_service
} from "./chunk-BRWHSKAL.js";
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

// angular:jit:template:src\app\features\users\users.html
var users_default;
var init_users = __esm({
  "angular:jit:template:src\\app\\features\\users\\users.html"() {
    users_default = '<div class="container-fluid">\r\n\r\n\r\n    <div class="row">\r\n\r\n    </div>\r\n\r\n    <div class="row mt-1">\r\n\r\n        <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\r\n        <h5 class="mb-0 d-flex"><mat-icon>supervisor_account</mat-icon> Usuarios</h5>\r\n        <button class="btn btn-primary" (click)="newUser()">Nuevo</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class="row mt-1">\r\n\r\n         <div class="d-flex justify-content-between align-items-center p-3 bg-light rounded border">\r\n\r\n             <div  class="w-100">\r\n                 \r\n                <app-users-table *ngIf="formVisible[0]"  [users]="users" (UserDelete)="onDelete($event)" (UserEdit)="onEdit($event)"></app-users-table>\r\n                \r\n                 <app-add-user *ngIf="formVisible[1]" (userAdded)="addUser($event)" (noChanges)="noChangeNewUser($event)"></app-add-user>\r\n\r\n                <app-edit-user *ngIf="formVisible[2]" [userEdit]="editUser" (userEdited)="editedUser($event)"  (noChanges)="noChangeEditUser($event)" ></app-edit-user>\r\n\r\n             </div>\r\n\r\n\r\n         </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>';
  }
});

// angular:jit:style:src\app\features\users\users.scss
var users_default2;
var init_users2 = __esm({
  "angular:jit:style:src\\app\\features\\users\\users.scss"() {
    users_default2 = "/* src/app/features/users/users.scss */\n/*# sourceMappingURL=users.css.map */\n";
  }
});

// src/app/features/users/users.ts
var Users;
var init_users3 = __esm({
  "src/app/features/users/users.ts"() {
    "use strict";
    init_tslib_es6();
    init_users();
    init_users2();
    init_core();
    init_users_service();
    init_dialog();
    init_message();
    init_confirm_dialog();
    init_users_table();
    init_edit_user();
    init_add_user();
    init_common();
    init_icon();
    Users = class Users2 {
      _servicios;
      dialog;
      snackBar;
      editUser;
      users = [];
      formVisible = [false, false, false];
      // [list, add, edit]
      constructor(_servicios, dialog, snackBar) {
        this._servicios = _servicios;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }
      ngOnInit() {
        this.loadUsers();
        this.formVisible[0] = true;
      }
      loadUsers() {
        this._servicios.loadUsers().subscribe({
          next: (response) => {
            this.users = response;
            this.noChangeNewUser(true);
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
      newUser() {
        this.formVisible = [false, true, false];
      }
      noChangeNewUser(value) {
        this.formVisible = [value, false, false];
      }
      addUser(user) {
        this._servicios.addUser(user).subscribe({
          next: (response) => {
            if (response) {
              this.snackBar.show("REGISTERED User!!!");
              this.loadUsers();
            }
            this.noChangeNewUser(true);
          },
          error: (err) => {
            this.snackBar.show(err.message);
          }
        });
      }
      editedUser(userEdit) {
        this._servicios.editUser(userEdit).subscribe({
          next: (response) => {
            if (response) {
              this.snackBar.show("UPDATED User!!!");
              const index = this.users.findIndex((user) => user.id === userEdit.id);
              if (index !== -1) {
                this.users[index] = __spreadValues({}, userEdit);
                this.users = [...this.users];
              }
              this.noChangeEditUser(true);
            }
          },
          error: (err) => {
            this.snackBar.show(err.message);
          }
        });
      }
      onEdit(userEdit) {
        this.editUser = userEdit;
        this.formVisible = [false, false, true];
      }
      noChangeEditUser(value) {
        this.formVisible = [value, false, false];
      }
      onDelete(userDelete) {
        const dialogRef = this.dialog.open(ConfirmDialog, {
          width: "450px",
          height: "250px",
          data: { mensaje: "\xBFEst\xE1s seguro de eliminar el usuario " + userDelete.name + "?" }
        });
        dialogRef.afterClosed().subscribe((resultado) => {
          if (resultado) {
            this._servicios.deleteUser(userDelete.id).subscribe({
              next: (value) => {
                if (value) {
                  this.users = this.users.filter((user) => user.id !== userDelete.id);
                  this.snackBar.show("DELETED User!!!");
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
        { type: UsersService },
        { type: MatDialog },
        { type: Message }
      ];
    };
    Users = __decorate([
      Component({
        selector: "app-users",
        imports: [UsersTable, EditUser, AddUser, CommonModule, MatIcon],
        template: users_default,
        styles: [users_default2]
      })
    ], Users);
  }
});

// src/app/features/users/users.spec.ts
var require_users_spec = __commonJS({
  "src/app/features/users/users.spec.ts"(exports) {
    init_testing();
    init_users3();
    describe("Users", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Users]
        }).compileComponents();
        fixture = TestBed.createComponent(Users);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_users_spec();
//# sourceMappingURL=spec-users.spec.js.map
