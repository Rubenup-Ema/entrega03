import {
  Breadcrumb,
  init_breadcrumb
} from "./chunk-GZHVVFZ7.js";
import "./chunk-RUOOTFZB.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import "./chunk-TN4SF22G.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/home/breadcrumb/breadcrumb.spec.ts
var require_breadcrumb_spec = __commonJS({
  "src/app/home/breadcrumb/breadcrumb.spec.ts"(exports) {
    init_testing();
    init_breadcrumb();
    describe("Breadcrumb", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Breadcrumb]
        }).compileComponents();
        fixture = TestBed.createComponent(Breadcrumb);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_breadcrumb_spec();
//# sourceMappingURL=spec-breadcrumb.spec.js.map
