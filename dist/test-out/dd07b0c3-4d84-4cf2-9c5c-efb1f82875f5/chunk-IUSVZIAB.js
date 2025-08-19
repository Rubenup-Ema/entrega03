import {
  HttpClient,
  init_http
} from "./chunk-QOR4GCQQ.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6,
  of,
  tap,
  throwError
} from "./chunk-CYARENY7.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/shared/services/services.login.ts
var ServicesLogin;
var init_services_login = __esm({
  "src/app/shared/services/services.login.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    ServicesLogin = class ServicesLogin2 {
      http;
      //private url = "https://curso.sunsetmanager.com/api"
      url = "https://68a25a8ec5a31eb7bb1cc6a1.mockapi.io/";
      data = [];
      constructor(http) {
        this.http = http;
      }
      loadData() {
        return this.http.get(`${this.url}/user`).pipe(
          tap((response) => this.data = response)
          // guardamos en memoria
        );
      }
      validarLogin(email, password) {
        try {
          const user = this.data.find((user2) => user2.email === email && user2.password === password);
          if (user) {
            return of(user);
          } else {
            return throwError(() => ({
              statusCode: 401,
              message: "user NOT FOUND"
            }));
          }
        } catch (err) {
          return throwError(() => ({
            statusCode: 500,
            message: err
          }));
        }
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    ServicesLogin = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ServicesLogin);
  }
});

export {
  ServicesLogin,
  init_services_login
};
//# sourceMappingURL=chunk-IUSVZIAB.js.map
