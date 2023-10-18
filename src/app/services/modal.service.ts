import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSubject = new Subject<boolean>();
  showModal$ = this.showModalSubject.asObservable();

  constructor() {}

  // Method to show the modal
  show() {
    this.showModalSubject.next(true);
  }

  // Method to hide the modal
  hide() {
    this.showModalSubject.next(false);
  }
  getModalState() {
    return this.showModal$;
  }
}
