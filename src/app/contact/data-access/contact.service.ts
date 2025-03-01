import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Contact } from "./contact.model";


@Injectable({
    providedIn: "root"
}) export class ContactService {

    private readonly http = inject(HttpClient);
    private readonly path = "/api/contact";
    

    constructor(
      ) { }
    
   

    public create(contact: Contact): Observable<boolean> {
        return this.http.post<boolean>(this.path, contact).pipe(
            catchError(() => {
                return of(true);
            }),
            tap(() => {
                alert("Demande de contact envoyée avec succès");
                //this._products.update(products => [product, ...products])
            }),
        );
    }

}