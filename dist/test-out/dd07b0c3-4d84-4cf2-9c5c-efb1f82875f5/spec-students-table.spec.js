import {
  StudentsTable,
  init_students_table
} from "./chunk-AJOJU6EC.js";
import "./chunk-GUMMJGYU.js";
import "./chunk-UUFGLTLE.js";
import "./chunk-OXHJM6CS.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import "./chunk-ZTMR27KN.js";
import "./chunk-NRHMCMVT.js";
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

// src/app/features/students/students-table/students-table.spec.ts
var require_students_table_spec = __commonJS({
  "src/app/features/students/students-table/students-table.spec.ts"(exports) {
    init_testing();
    init_students_table();
    describe("StudentsTable", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [StudentsTable]
        }).compileComponents();
        fixture = TestBed.createComponent(StudentsTable);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_students_table_spec();
//# sourceMappingURL=spec-students-table.spec.js.map
