import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  myForm: FormGroup;
  @Output() formSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.myForm = fb.group({
      inputValue: ['', Validators.required]  // Input field with validation
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const inputValue = this.myForm.get('inputValue')!.value;
      this.formSubmit.emit(inputValue); // Emit the value
      this.myForm.reset(); // Optionally, reset the form
      this.closeModal()
    }
  }
  closeModal() {
    this.modalService.hide();
  }
}
