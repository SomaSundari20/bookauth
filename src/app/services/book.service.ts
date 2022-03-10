import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient : HttpClient, private _auth:AuthService) { }

  savebook(books : any[] ){
    const tk = this._auth.gettoken();
    return this._httpClient.post("https://httproject-319cb-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",books)
  }

  getbook(books : any[]){
    const tk = this._auth.gettoken();
    return this._httpClient.get("https://httproject-319cb-default-rtdb.asia-southeast1.firebasedatabase.app/data.json? auth="+tk)
  }
}
