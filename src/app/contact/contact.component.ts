import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    SenderName: new FormControl('', Validators.required),
    SenderEmail: new FormControl('', [Validators.required, Validators.email]),
    SenderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  submitform(event: any){
    event.preventDefault();
    console.log("form submitted:", this.contactForm.value)
  }
}
