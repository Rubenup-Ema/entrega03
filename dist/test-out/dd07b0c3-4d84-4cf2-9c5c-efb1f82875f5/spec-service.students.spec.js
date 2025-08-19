import {
  ServiceStudents,
  init_service_students
} from "./chunk-IXUWBZ3H.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/features/students/students-service/service.students.spec.ts
init_testing();
init_service_students();
describe("ServiceStudents", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStudents);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-service.students.spec.js.map
