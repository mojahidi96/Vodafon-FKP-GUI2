import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VvlFlowComponent } from "./vvl-flow.component";

const routes: Routes = [{ path: "", component: VvlFlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvlFlowsRoutingModule {}
