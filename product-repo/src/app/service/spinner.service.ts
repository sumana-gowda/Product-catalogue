import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService implements OnDestroy{
  spinnerSubject: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnDestroy() {
    this.spinnerSubject.unsubscribe();
  }
}
