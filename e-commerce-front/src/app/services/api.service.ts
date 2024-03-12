import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  //get all products

  getAllProducts() {
    return this.http.get(`${this.SERVER_URL}/products/all`);
  }

  //get a single product

  viewSingleProduct(id: any) {
    return this.http.get(`${this.SERVER_URL}/product/view/${id}`);
  }

  //register

  registerApi(user: any) {
    return this.http.post(`${this.SERVER_URL}/user/register`, user);
  }

  LoginApi(user: any) {
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
    
  }
}
