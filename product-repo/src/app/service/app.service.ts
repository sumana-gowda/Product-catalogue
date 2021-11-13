import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataTableItem } from '../components/data-table/data-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  serverLink: string = environment.serviceUrl;
  constructor(private http: HttpClient) {}

  /**
   * Get all the list of item from inventory db
   * @returns DataTableItem[]
   */
  getAllItemList():Observable<DataTableItem[]> {
    let apiLink = this.serverLink+'/inventory'
    return this.http.get<DataTableItem[]>(apiLink);
  }

  /**
   * update the item data based on id
   */
  updateItem(id: number, data: any):Observable<any> {
    let apiLink = `${this.serverLink}/inventory/${id}`
    return this.http.put<any>(apiLink, data);
  }

  /**
   * Delete the item detail from db based on id
   */
  deleteItem(id: number):Observable<any> {
    let apiLink = `${this.serverLink}/inventory/${id}`
    return this.http.delete<any>(apiLink);
  }

  /**
   * Add item details to the db
   * @param data 
   * @returns 
   */
  addItem(data: any):Observable<any> {
    let apiLink = `${this.serverLink}/inventory`
    return this.http.post<any>(apiLink, data);
  }

  //Fetch data based on keyword
  searchUserString(keyword: string) {
    let apiLink = this.serverLink+'/inventory?q='+keyword
    return this.http.get<DataTableItem[]>(apiLink);
  }
}
