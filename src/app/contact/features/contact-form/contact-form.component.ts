import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Contact } from "app/contact/data-access/contact.model";
import { ContactService } from "app/contact/data-access/contact.service";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from 'primeng/toast';




@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  standalone: true,
  imports: [DataViewModule, CardModule, DialogModule, FormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ToastModule,CommonModule
]
})
export class ContactFormComponent implements OnInit {
  private readonly contactService = inject(ContactService);
  private readonly messageService = inject(MessageService) ;

  emptyContact: Contact = {
    id: 0,
    email: "",
    message: "",
    createdAt: 0,
    updatedAt: 0,
  };

  ngOnInit() {
  }


  public onSave(contact: Contact) {
      this.contactService.create(contact).subscribe(bool => {
        this.showToast();
        //
      });
  }

  public onCancel() {
    this.resetContact();
  }

  private resetContact() {
    this.emptyContact = {
      id: 0,
      email: "",
      message: "",
      createdAt: 0,
      updatedAt: 0,
    };
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Information',
      detail: 'Demande de contact envoyée avec succès',
      life: 3000
    });
  }

}
