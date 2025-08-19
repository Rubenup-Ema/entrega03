import {
  Main,
  init_main
} from "./chunk-EV5RVWVB.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/home/main/main.spec.ts
var require_main_spec = __commonJS({
  "src/app/home/main/main.spec.ts"(exports) {
    init_testing();
    init_main();
    describe("Main", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Main]
        }).compileComponents();
        fixture = TestBed.createComponent(Main);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_main_spec();
//# sourceMappingURL=spec-main.spec.js.map
