import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-edit-item-popup',
  templateUrl: './edit-item-popup.component.html',
  styleUrls: ['./edit-item-popup.component.scss']
})
export class EditItemPopupComponent implements OnInit {
  editForm: FormGroup;
  rowData: any;
  isNewRow: boolean = false;
  saveData: any;
  updatedId: any;
  headerName: any;
  constructor(public dialogRef: MatDialogRef<EditItemPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private snackbar: SnackBarService) {
    this.editForm = new FormGroup({
      id: new FormControl({value:'', disabled: true}),
      item_name: new FormControl({value:'', disabled: this.isNewRow}, [Validators.required, Validators.maxLength(30)]),
      item_desc: new FormControl({value:'', disabled: this.isNewRow}, [Validators.maxLength(50)]),
      original_price: new FormControl({value:'', disabled: this.isNewRow}, [Validators.required]),
      discount: new FormControl({value:'', disabled: this.isNewRow}), 
      discounted_amount: new FormControl({value:'', disabled: true}),
      isAvailable: new FormControl({value:'', disabled: this.isNewRow}, [Validators.required]),
    });
   }

  ngOnInit(): void {
    if(!this.isNewRow) {
      this.getDefaultValue();
    } else {
      this.editForm.get('id')?.setValue(this.updatedId)
    }

  }

  /**
  * Default the form with the value and calculate the discounted amount 
  * based on original price and discount
  **/
  getDefaultValue() {
    this.editForm.get('id')?.setValue(this.rowData.id);
    this.editForm.get('item_name')?.setValue(this.rowData.item_name);
    this.editForm.get('item_desc')?.setValue(this.rowData.item_desc);
    this.editForm.get('original_price')?.setValue(this.rowData.original_price);
    this.editForm.get('discount')?.setValue(this.rowData.discount);
    let discountedAmt = 0;
    if(this.rowData.discount && this.rowData.discount > 0) {
      discountedAmt = (Number(this.rowData.original_price) * (100 - Number(this.rowData.discount)))/100
    } else {
      discountedAmt = this.rowData.original_price
    }
    this.editForm.get('discounted_amount')?.setValue(discountedAmt);
    this.editForm.get('isAvailable')?.setValue(this.rowData.isAvailable);
  }

  close() {
    this.dialogRef.close();
  }

  /**
  * Validate the form and if form is valid then save API is called
  **/
  save() {
    if(this.editForm.get('original_price')?.value <= 0) {
      this.snackbar.info('Please enter valid original price');
      return
    }
    if(this.editForm.get('discount')?.value && this.editForm.get('discount')?.value<0 || this.editForm.get('discount')?.value>100) {
      this.snackbar.info('Please enter valid discount percentage');
      return;
    }
    this.saveData = {
      id: this.editForm.get('id')?.value,
      item_name: this.editForm.get('item_name')?.value,
      item_desc: this.editForm.get('item_desc')?.value,
      original_price: this.editForm.get('original_price')?.value,
      discount: this.editForm.get('discount')?.value ? this.editForm.get('discount')?.value: 0,
      isAvailable: this.editForm.get('isAvailable')?.value == 'true' || this.editForm.get('isAvailable')?.value == true ? true: false
    }

    if(JSON.stringify(this.rowData) == JSON.stringify(this.saveData)) {
      this.snackbar.info('No data changed');
      this.close();
    } else {
      this.dialogRef.close(true)
    }
  }

  /** 
  * calculate the discounted amount based on original price and discount
  * and assign this value to discounted_amount field
  **/
  amountChanged() {
    let orginalAmt = this.editForm.get('original_price')?.value;
    let discount = this.editForm.get('discount')?.value;
    let discountedAmount = 0;
    if(discount && discount > 0) {
      discountedAmount = (Number(orginalAmt) * (100 - Number(discount)))/100
    } else {
      discountedAmount = orginalAmt
    }
    this.editForm.get('discounted_amount')?.setValue(discountedAmount);
  }
}
