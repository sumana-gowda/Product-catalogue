import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  heading: any; //Header Label
  content: any; //popup display content 
  constructor() { }

  ngOnInit(): void {
  }

}
