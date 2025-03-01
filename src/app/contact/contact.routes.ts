import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ContactFormComponent } from "./features/contact-form/contact-form.component";

export const CONTACT_ROUTES: Routes = [
	{
		path: "add",
		component: ContactFormComponent,
	},
	{ path: "**", redirectTo: "add" },
];
