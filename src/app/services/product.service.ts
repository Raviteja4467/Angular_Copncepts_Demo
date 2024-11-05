import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url="https://dummyjson.com/products/"
  private _saveUrl="http://localhost:8080/save"

  constructor(private _http:HttpClient) {
    
  }

  public getProduct():Observable<any>{
    return this._http.get(this.url);
  }
 
  public delProduct(pid):Observable<any>{
    return this._http.delete(this.url+pid);
  }

  public addUser(data): Observable<any>{
    return this._http.post(this._saveUrl,data, {responseType:"text"})
  }

  public getProductPromise():Promise<any>{
    //return this._http.get(this.url).toPromise();
    return firstValueFrom(this._http.get(this.url))
  }

  
}

