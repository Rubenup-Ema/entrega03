import {
  HttpClient,
  init_http
} from "./chunk-J7MQ3CCW.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CYARENY7.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/features/course/courses-service/courses.service.ts
var CoursesService;
var init_courses_service = __esm({
  "src/app/features/course/courses-service/courses.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    CoursesService = class CoursesService2 {
      http;
      url = "https://68a25a8ec5a31eb7bb1cc6a1.mockapi.io";
      constructor(http) {
        this.http = http;
      }
      loadCourses() {
        return this.http.get(`${this.url}/course`);
      }
      addCourse(course) {
        return this.http.post(`${this.url}/course`, course);
      }
      editCourse(course) {
        return this.http.put(`${this.url}/course/${course.id}`, course);
      }
      deleteCourse(id) {
        return this.http.delete(`${this.url}/course/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    CoursesService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CoursesService);
  }
});

export {
  CoursesService,
  init_courses_service
};
//# sourceMappingURL=chunk-WGLFT2LQ.js.map
