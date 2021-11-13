import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EditItemPopupComponent } from './components/edit-item-popup/edit-item-popup.component';
import { AppService } from './service/app.service';
import { SnackBarService } from './service/snack-bar.service';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { spinnerHttpInterceptor } from './service/spinnerHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DataTableComponent,
    EditItemPopupComponent,
    ConfirmationPopupComponent,
    CdkDetailRowDirective,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: spinnerHttpInterceptor,
    multi: true
  },
    AppService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
