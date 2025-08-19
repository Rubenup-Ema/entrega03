import {
  Breadcrumb,
  init_breadcrumb
} from "./chunk-GZHVVFZ7.js";
import {
  Main,
  init_main
} from "./chunk-EV5RVWVB.js";
import {
  MenuVer,
  init_menu_ver
} from "./chunk-X3U54HK2.js";
import {
  MatIcon,
  init_icon
} from "./chunk-OXHJM6CS.js";
import {
  RoutePaths,
  init_routes
} from "./chunk-T32SCKEF.js";
import {
  Router,
  RouterOutlet,
  init_router
} from "./chunk-RUOOTFZB.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
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
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\dashboard\dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src\\app\\home\\dashboard\\dashboard.html"() {
    dashboard_default = '\n<div class="d-flex vh-100">\n  <app-menu-ver></app-menu-ver>\n  <!-- Contenido din\xE1mico (derecha) -->\n  <main class="flex-grow-1 p-4">\n    <app-main></app-main>\n    <app-breadcrumb></app-breadcrumb>\n    <router-outlet></router-outlet>\n  </main>\n</div>';
  }
});

// angular:jit:style:src\app\home\dashboard\dashboard.scss
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src\\app\\home\\dashboard\\dashboard.scss"() {
    dashboard_default2 = "/* src/app/home/dashboard/dashboard.scss */\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/home/dashboard/dashboard.ts
var Dashboard;
var init_dashboard3 = __esm({
  "src/app/home/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    init_router();
    init_common();
    init_main();
    init_breadcrumb();
    init_icon();
    init_menu_ver();
    init_routes();
    Dashboard = class Dashboard2 {
      router;
      constructor(router) {
        this.router = router;
      }
      ngOnInit() {
        const user = "" + sessionStorage.getItem("user");
        if (user.trim() === "") {
          this.router.navigate(["/" + RoutePaths.LOGIN]);
        }
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    Dashboard = __decorate([
      Component({
        selector: "app-dashboard",
        imports: [RouterOutlet, CommonModule, Main, Breadcrumb, MatIcon, MenuVer],
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], Dashboard);
  }
});

// src/app/home/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/home/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard3();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Dashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-dashboard.spec.js.map
