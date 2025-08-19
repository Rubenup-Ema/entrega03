import {
  MatIcon,
  init_icon
} from "./chunk-YXINU2IW.js";
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

// angular:jit:template:src\app\features\users\edit-user\edit-user.html
var edit_user_default;
var init_edit_user = __esm({
  "angular:jit:template:src\\app\\features\\users\\edit-user\\edit-user.html"() {
    edit_user_default = `<div class="container bg-light">\r
  <h2>Editar Usuario</h2>\r
\r
  <form class="mb-3" [formGroup]="userForm" (ngSubmit)="onSubmit()">\r
    \r
    <!-- Campo ID -->\r
    <div class="form-group">\r
      <label for="dni">ID:</label>\r
      <input \r
        type="text" \r
        class="form-control"\r
        id="id" \r
        formControlName="id" \r
        placeholder="Ingrese ID"\r
        readonly>\r
      <div *ngIf="userForm.get('id')?.invalid && userForm.get('id')?.touched" class="text-danger mt-1">\r
        ID es requerido\r
      </div>\r
    </div>\r
\r
    <!-- Campo Nombre -->\r
    <div class="form-group">\r
      <label for="name">Nombre</label>\r
      <input \r
        type="text" \r
        class="form-control"\r
        id="name" \r
        formControlName="name" \r
        placeholder="Ingrese nombre del usuario">\r
      <div *ngIf="userForm.get('name')?.invalid && userForm.get('name')?.touched" class="text-danger mt-1">\r
        Nombre del usuario es requerido\r
      </div>\r
    </div>\r
\r
    <!-- Campo Email -->\r
    <div class="form-group">\r
      <label for="email">Email</label>\r
      <input \r
        type="text" \r
        class="form-control"\r
        id="email" \r
        formControlName="email" \r
        placeholder="Ingrese email tunombre@tudominio.com">\r
      <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" class="text-danger mt-1">\r
        Descripci\xF3n es requerido\r
      </div>\r
    </div>\r
\r
     <!-- Campo Password -->\r
    <div class="form-group">\r
        <label for="password">Password*</label>\r
        <div class="input-group">\r
            <input \r
            [type]="showPassword ? 'text' : 'password'" \r
            class="form-control"\r
            id="password" \r
            formControlName="password" \r
            placeholder="******">\r
            <button \r
            class="btn btn-outline-secondary" \r
            type="button" \r
            (click)="togglePassword()">\r
            <mat-icon>{{showPassword ? 'visibility_off': 'visibility'}}</mat-icon> \r
            </button>\r
        </div>\r
        <div *ngIf="userForm.get('password')?.invalid && userForm.get('password')?.touched" class="text-danger mt-1">\r
            El password es requerido m\xEDnimo 6 caracteres\r
        </div>\r
    </div>\r
\r
    <!-- Campo Role -->\r
    <div class="form-group">\r
        <label for="role">Seleccione un Role:</label>\r
        <select class="form-select" formControlName="role" id="role">\r
            <option value="">-- Seleccionar Role--</option>\r
            <option value="admin">Administrador</option>\r
            <option value="user">Usuario</option>\r
            <option value="standard">Standard</option>\r
        </select>\r
          <div *ngIf="userForm.get('role')?.invalid && userForm.get('role')?.touched" class="text-danger mt-1">\r
            Role es requerido\r
        </div>\r
    </div>\r
   \r
  </form>\r
\r
   <div class="row text-center mb-3">\r
\r
        <div class="col text-center">\r
            <button type="submit" (click)="onSubmit()" class="btn btn-success" [disabled]="userForm.invalid" >Editar Usuario</button>\r
            \r
        </div>\r
\r
        <div class="col text-center">\r
            \r
            <button type="button" (click)="onReset()" class="btn btn-danger" >Salir</button>\r
\r
        </div>\r
    \r
\r
    </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\features\users\edit-user\edit-user.scss
var edit_user_default2;
var init_edit_user2 = __esm({
  "angular:jit:style:src\\app\\features\\users\\edit-user\\edit-user.scss"() {
    edit_user_default2 = "/* src/app/features/users/edit-user/edit-user.scss */\n/*# sourceMappingURL=edit-user.css.map */\n";
  }
});

// src/app/features/users/edit-user/edit-user.ts
var EditUser;
var init_edit_user3 = __esm({
  "src/app/features/users/edit-user/edit-user.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_user();
    init_edit_user2();
    init_core();
    init_forms();
    init_common();
    init_icon();
    EditUser = class EditUser2 {
      fb;
      userForm;
      userEdited = new EventEmitter();
      noChanges = new EventEmitter();
      showPassword = false;
      _userEdit;
      user = { id: 0, name: "", email: "", password: "", role: "", createdAt: "" };
      set userEdit(value) {
        if (value) {
          this._userEdit = value;
          this.user = __spreadValues({}, value);
          if (this.userForm) {
            this.loadUserData();
          }
        }
      }
      constructor(fb) {
        this.fb = fb;
      }
      loadUserData() {
        this.userForm.setValue({
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          role: this.user.role
        });
      }
      ngOnInit() {
        this.userForm = this.fb.group({
          id: [0, [Validators.required]],
          name: ["", [Validators.required, Validators.minLength(5)]],
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength(6)]],
          role: ["", [Validators.required]]
        });
        if (this._userEdit) {
          this.loadUserData();
        }
      }
      onSubmit() {
        this.userEdited.emit(this.userForm.value);
      }
      onReset() {
        this.noChanges.emit(true);
      }
      togglePassword() {
        this.showPassword = !this.showPassword;
      }
      static ctorParameters = () => [
        { type: FormBuilder }
      ];
      static propDecorators = {
        userEdited: [{ type: Output }],
        noChanges: [{ type: Output }],
        userEdit: [{ type: Input }]
      };
    };
    EditUser = __decorate([
      Component({
        selector: "app-edit-user",
        imports: [ReactiveFormsModule, CommonModule, MatIcon],
        template: edit_user_default,
        styles: [edit_user_default2]
      })
    ], EditUser);
  }
});

export {
  EditUser,
  init_edit_user3 as init_edit_user
};
//# sourceMappingURL=chunk-PGFNMCIM.js.map
