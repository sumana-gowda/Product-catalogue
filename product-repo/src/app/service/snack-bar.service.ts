import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  // To display error message
  error(message: string) {
    return this._snackBar.open(message, undefined, {panelClass: ['snackbar-error'], horizontalPosition: 'right', duration: 1000});
  }

  // To display success message
  success(message: string) {
    return this._snackBar.open(message, undefined, {panelClass: ['snackbar-success'], horizontalPosition: 'right', duration: 1000});
  }

  // To display info message
  info(message: string) {
    return this._snackBar.open(message, undefined, {panelClass: ['snackbar-info'], horizontalPosition: 'right', duration: 1000});
  }
}
