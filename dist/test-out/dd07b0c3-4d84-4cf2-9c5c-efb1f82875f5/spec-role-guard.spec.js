import {
  RoutePaths,
  init_routes
} from "./chunk-T32SCKEF.js";
import {
  Router,
  init_router
} from "./chunk-RUOOTFZB.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import "./chunk-TN4SF22G.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import {
  init_core,
  inject
} from "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/shared/guards/role-guard.spec.ts
init_testing();

// src/app/shared/guards/role-guard.ts
init_core();
init_router();
init_routes();
var roleGuard = (route, state) => {
  const role = sessionStorage.getItem("role");
  const router = inject(Router);
  if (role !== "admin") {
    router.navigate(["/" + RoutePaths.HOME + "/" + RoutePaths.NOTFOUND]);
    return false;
  }
  return true;
};

// src/app/shared/guards/role-guard.spec.ts
describe("roleGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => roleGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-role-guard.spec.js.map
