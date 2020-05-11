import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { appMobileRoutes } from "./app-routing-mobile";

const routes: Routes = [...appMobileRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
