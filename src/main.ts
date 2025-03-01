import { enableProdMode, importProvidersFrom } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "app/app.routes";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";
import { ToastrModule } from "ngx-toastr";


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    provideAnimations(),
    provideRouter(APP_ROUTES),
    ConfirmationService,
    MessageService,
    DialogService
  ],
}).catch((err) => console.log(err));

registerLocaleData(localeFr, "fr-FR");
function provideToastr(arg0: { timeOut: number; positionClass: string; preventDuplicates: boolean; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error("Function not implemented.");
}

