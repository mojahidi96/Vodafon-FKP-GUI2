import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VvlFlowsRoutingModule } from "./vvl-flows-routing.module";
import { VvlFlowComponent } from "./vvl-flow.component";

@NgModule({
  declarations: [VvlFlowComponent],
  imports: [CommonModule, VvlFlowsRoutingModule],
})
export class VvlFlowsModule {
  constructor() {}
}
