import {
  HttpClient,
  init_http
} from "./chunk-HBM52F2K.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-54PHUPNT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/features/students/students-service/service.students.ts
var ServiceStudents;
var init_service_students = __esm({
  "src/app/features/students/students-service/service.students.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    ServiceStudents = class ServiceStudents2 {
      http;
      url = "https://68a3040bc5a31eb7bb1ea2d9.mockapi.io";
      constructor(http) {
        this.http = http;
      }
      loadStudents() {
        return this.http.get(`${this.url}/student`);
      }
      addStudent(student) {
        return this.http.post(`${this.url}/student`, student);
      }
      editStudent(student) {
        return this.http.put(`${this.url}/student/${student.id}`, student);
      }
      deleteStudent(id) {
        return this.http.delete(`${this.url}/student/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    ServiceStudents = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ServiceStudents);
  }
});

export {
  ServiceStudents,
  init_service_students
};
//# sourceMappingURL=chunk-2I2CIB7J.js.map
