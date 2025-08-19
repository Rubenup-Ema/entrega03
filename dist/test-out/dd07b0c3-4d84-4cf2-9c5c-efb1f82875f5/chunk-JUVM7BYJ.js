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

// src/app/features/users/users-service.ts
var UsersService;
var init_users_service = __esm({
  "src/app/features/users/users-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    UsersService = class UsersService2 {
      http;
      url = "https://68a25a8ec5a31eb7bb1cc6a1.mockapi.io";
      constructor(http) {
        this.http = http;
      }
      loadUsers() {
        return this.http.get(`${this.url}/user`);
      }
      addUser(user) {
        return this.http.post(`${this.url}/user`, user);
      }
      editUser(user) {
        return this.http.put(`${this.url}/user/${user.id}`, user);
      }
      deleteUser(id) {
        return this.http.delete(`${this.url}/user/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    UsersService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], UsersService);
  }
});

export {
  UsersService,
  init_users_service
};
//# sourceMappingURL=chunk-JUVM7BYJ.js.map
