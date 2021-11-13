import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';
// import { SpinnerService } from './spinner-service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = false;
  constructor(private spinnerService: SpinnerService) {
    spinnerService.spinnerSubject.subscribe(x => this.showSpinner = x)
   }

  ngOnInit(): void {
  }

}
