import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-PFTOLH65.js";
import {
  RoutePaths,
  init_routes
} from "./chunk-T32SCKEF.js";
import {
  Router,
  init_router
} from "./chunk-RUOOTFZB.js";
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
import {
  ServicesLogin,
  init_services_login
} from "./chunk-LMPK6EOH.js";
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
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\home\\login\\login.html"() {
    login_default = `<div class="d-flex justify-content-center align-items-center vh-100">
  <div class="card p-4 shadow" style="min-width: 350px;">
    <h3 class="text-center mb-4">Iniciar Sesi\xF3n</h3>

<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <!-- Campo Usuario -->
  <div class="mb-3">
    <label for="username" class="form-label">Usuario</label>
    <input
      type="text"
      id="username"
      class="form-control"
      formControlName="username"
      placeholder="alice@gmail.com"
    />
    <div
      class="text-danger small"
      *ngIf="form.get('username')?.touched && form.get('username')?.invalid"
    >
      El usuario es obligatorio, verifique el formato del email
    </div>
  </div>

  <!-- Campo Contrase\xF1a -->
  <div class="mb-3">
    <label for="password" class="form-label">Contrase\xF1a</label>
    <input
      type="password"
      id="password"
      class="form-control"
      formControlName="password"
      placeholder="password123"
    />
    <div
      class="text-danger small"
      *ngIf="form.get('password')?.touched && form.get('password')?.invalid"
    >
      La contrase\xF1a es obligatoria al menos 5 caracteres
    </div>
  </div>

  <!-- Bot\xF3n Submit -->
  <button
    type="submit"
    class="btn btn-primary w-100"
    [disabled]="form.invalid"
  >
    Entrar
  </button>

  <span *ngIf="procesando">Espere procesando...</span>

</form>
 </div>
</div>`;
  }
});

// angular:jit:style:src\app\home\login\login.scss
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\home\\login\\login.scss"() {
    login_default2 = "/* src/app/home/login/login.scss */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/home/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/home/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_common();
    init_core();
    init_forms();
    init_router();
    init_services_login();
    init_message();
    init_routes();
    Login = class Login2 {
      router;
      fb;
      _services;
      snackBar;
      form;
      procesando = false;
      constructor(router, fb, _services, snackBar) {
        this.router = router;
        this.fb = fb;
        this._services = _services;
        this.snackBar = snackBar;
        this.form = this.fb.group({
          username: new FormControl("", [Validators.required, Validators.email]),
          password: new FormControl("", [Validators.required, Validators.minLength(5)])
        });
      }
      ngOnInit() {
        this.loadInfo();
      }
      loadInfo() {
        this._services.loadData().subscribe({
          next: () => {
            console.log("data cargada..");
          },
          error: (err) => {
            console.log(err);
            this.snackBar.show(`UPS!! ha sucedido lo siguiente: ${err.message}`);
          }
        });
        sessionStorage.setItem("user", "");
        sessionStorage.setItem("role", "");
        sessionStorage.setItem("email", "");
      }
      onSubmit() {
        this.procesando = true;
        this._services.validarLogin(this.form.get("username")?.value, this.form.get("password")?.value).subscribe({
          next: (data) => {
            sessionStorage.setItem("user", data.name);
            sessionStorage.setItem("role", data.role);
            sessionStorage.setItem("email", data.email);
            this.router.navigate(["/" + RoutePaths.HOME]);
          },
          error: (err) => {
            console.log(err);
            this.procesando = false;
            this.snackBar.show(`UPS!! ha sucedido lo siguiente: ${err.message}`);
          },
          complete: () => {
            console.log("Proceso completado");
          }
        });
      }
      static ctorParameters = () => [
        { type: Router },
        { type: FormBuilder },
        { type: ServicesLogin },
        { type: Message }
      ];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [FormsModule, CommonModule, ReactiveFormsModule],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/home/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/home/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
