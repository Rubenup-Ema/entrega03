import {
  MatIcon,
  init_icon
} from "./chunk-U6UFLA2W.js";
import {
  RoutePaths,
  init_routes
} from "./chunk-T32SCKEF.js";
import {
  Router,
  init_router
} from "./chunk-A53UFWRU.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CYARENY7.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\menu-ver\menu-ver.html
var menu_ver_default;
var init_menu_ver = __esm({
  "angular:jit:template:src\\app\\home\\menu-ver\\menu-ver.html"() {
    menu_ver_default = '  \r\n  <div class="d-flex vh-100">\r\n  <!-- Men\xFA lateral -->\r\n  <nav class="bg-light border-end p-3" style="width: 250px;">\r\n    <h5>Seleccione</h5>\r\n    <ul class="nav flex-column">\r\n      <li class="nav-item">\r\n\r\n        <a class="nav-link d-flex" (click)="menu(1)" routerLinkActive="active"><mat-icon>library_books</mat-icon> Cursos</a>\r\n      </li>\r\n      <li class="nav-item">\r\n        <a class="nav-link d-flex"(click)="menu(2)" routerLinkActive="active"><mat-icon>how_to_reg</mat-icon> Estudiantes</a>\r\n      </li>\r\n      <li class="nav-item ">\r\n       \r\n        <a class="nav-link d-flex"(click)="menu(3)" routerLinkActive="active"> <mat-icon>supervisor_account</mat-icon> Usuarios</a>\r\n      </li>\r\n      <li class="nav-item">\r\n        <a class="nav-link d-flex" (click)="menu(4)" routerLinkActive="active"><mat-icon>exit_to_app</mat-icon> Salir</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>';
  }
});

// angular:jit:style:src\app\home\menu-ver\menu-ver.scss
var menu_ver_default2;
var init_menu_ver2 = __esm({
  "angular:jit:style:src\\app\\home\\menu-ver\\menu-ver.scss"() {
    menu_ver_default2 = "/* src/app/home/menu-ver/menu-ver.scss */\na {\n  cursor: pointer;\n}\na:hover {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=menu-ver.css.map */\n";
  }
});

// src/app/home/menu-ver/menu-ver.ts
var MenuVer;
var init_menu_ver3 = __esm({
  "src/app/home/menu-ver/menu-ver.ts"() {
    "use strict";
    init_tslib_es6();
    init_menu_ver();
    init_menu_ver2();
    init_core();
    init_routes();
    init_router();
    init_icon();
    MenuVer = class MenuVer2 {
      router;
      constructor(router) {
        this.router = router;
      }
      menu(id) {
        switch (id) {
          case 1:
            this.router.navigate(["/" + RoutePaths.HOME + "/" + RoutePaths.COURSES]);
            break;
          case 2:
            this.router.navigate(["/" + RoutePaths.HOME + "/" + RoutePaths.STUDENTS]);
            break;
          case 3:
            this.router.navigate(["/" + RoutePaths.HOME + "/" + RoutePaths.USERS]);
            break;
          case 4:
            this.router.navigate(["/" + RoutePaths.LOGIN]);
            break;
        }
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    MenuVer = __decorate([
      Component({
        selector: "app-menu-ver",
        imports: [MatIcon],
        template: menu_ver_default,
        styles: [menu_ver_default2]
      })
    ], MenuVer);
  }
});

export {
  MenuVer,
  init_menu_ver3 as init_menu_ver
};
//# sourceMappingURL=chunk-UQ6JS62N.js.map
