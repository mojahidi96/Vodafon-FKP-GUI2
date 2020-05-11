import { Routes } from "@angular/router";
// import { AccessResolverService } from "./config/access-resolver.service";

const base = "mobile/";

export const appMobileRoutes: Routes = [
  {
    path: base + "vvlflow",
    loadChildren: "../vvl-flows/vvl-flows.module#VvlFlowsModule"
    // () =>
      // import("../vvl-flows/vvl-flows.module").then((m) => m.VvlFlowsModule),
  },
];
