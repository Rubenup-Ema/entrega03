import {
  EditCourse,
  init_edit_course
} from "./chunk-XEVXC5B2.js";
import "./chunk-PFTOLH65.js";
import "./chunk-TN4SF22G.js";
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

// src/app/features/course/edit-course/edit-course.spec.ts
var require_edit_course_spec = __commonJS({
  "src/app/features/course/edit-course/edit-course.spec.ts"(exports) {
    init_testing();
    init_edit_course();
    describe("EditCourse", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EditCourse]
        }).compileComponents();
        fixture = TestBed.createComponent(EditCourse);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_course_spec();
//# sourceMappingURL=spec-edit-course.spec.js.map
