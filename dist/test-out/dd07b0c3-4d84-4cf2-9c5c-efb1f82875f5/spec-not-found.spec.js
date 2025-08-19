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

// angular:jit:template:src\app\shared\not-found\not-found.html
var not_found_default;
var init_not_found = __esm({
  "angular:jit:template:src\\app\\shared\\not-found\\not-found.html"() {
    not_found_default = '<div class="bg-light d-flex align-items-center mt-1">\r\n\r\n  <div class="container text-center">\r\n    <div class="row justify-content-center">\r\n      <div class="col-md-6">\r\n        <h1 class="display-1 text-danger">404</h1>\r\n        <h2 class="mb-4">Oops! Page Not Found</h2>\r\n        <p class="mb-4">La p\xE1gina que buscas no existe o se ha movido.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n';
  }
});

// angular:jit:style:src\app\shared\not-found\not-found.scss
var not_found_default2;
var init_not_found2 = __esm({
  "angular:jit:style:src\\app\\shared\\not-found\\not-found.scss"() {
    not_found_default2 = "/* src/app/shared/not-found/not-found.scss */\n/*# sourceMappingURL=not-found.css.map */\n";
  }
});

// src/app/shared/not-found/not-found.ts
var NotFound;
var init_not_found3 = __esm({
  "src/app/shared/not-found/not-found.ts"() {
    "use strict";
    init_tslib_es6();
    init_not_found();
    init_not_found2();
    init_core();
    NotFound = class NotFound2 {
    };
    NotFound = __decorate([
      Component({
        selector: "app-not-found",
        imports: [],
        template: not_found_default,
        styles: [not_found_default2]
      })
    ], NotFound);
  }
});

// src/app/shared/not-found/not-found.spec.ts
var require_not_found_spec = __commonJS({
  "src/app/shared/not-found/not-found.spec.ts"(exports) {
    init_testing();
    init_not_found3();
    describe("NotFound", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [NotFound]
        }).compileComponents();
        fixture = TestBed.createComponent(NotFound);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_not_found_spec();
//# sourceMappingURL=spec-not-found.spec.js.map
