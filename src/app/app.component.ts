import { Component, OnInit } from '@angular/core';
import { IElement } from './models/element.model';
import { ModalService } from './services/modal.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  title = 'angular-binded-components';

  list: IElement[] = [
    {name:"Popa", x:0, y:0}
  ]
  isModalVisible = false
  handleFormSubmit(value: string) {
    this.list.push({name:value, x:0, y:0});
  }



  showModal() {
    this.modalService.show();
  }
  ngOnInit() {
    this.modalService.getModalState().subscribe((modalState) => {
      this.isModalVisible = modalState;
    });
  }
}
