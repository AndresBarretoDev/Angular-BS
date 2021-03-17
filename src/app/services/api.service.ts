import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://blackisp.herokuapp.com'
  constructor(private http:HttpClient) { 
    console.log('servicio inicializado');
    
  }
  getProducts(){
    return this.http.get(`${this.API_URL}/products`);
  }
  getPostalInfo(code:number){
    return this.http.get(`${this.API_URL}/postalCodes/${code}`);
  }

  sendData(dataForm:any){
    return this.http.post(`${this.API_URL}/contact`, dataForm)
  }

}
