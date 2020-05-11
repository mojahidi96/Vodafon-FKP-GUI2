import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterModule } from "./footer/footer.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
