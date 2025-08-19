import {
  MenuVer,
  init_menu_ver
} from "./chunk-X3U54HK2.js";
import "./chunk-OXHJM6CS.js";
import "./chunk-T32SCKEF.js";
import "./chunk-RUOOTFZB.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import "./chunk-6DWKSTVF.js";
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

// src/app/home/menu-ver/menu-ver.spec.ts
var require_menu_ver_spec = __commonJS({
  "src/app/home/menu-ver/menu-ver.spec.ts"(exports) {
    init_testing();
    init_menu_ver();
    describe("MenuVer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [MenuVer]
        }).compileComponents();
        fixture = TestBed.createComponent(MenuVer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_menu_ver_spec();
//# sourceMappingURL=spec-menu-ver.spec.js.map
