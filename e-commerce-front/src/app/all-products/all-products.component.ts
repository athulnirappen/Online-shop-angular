import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllproductsApi()
   
  }

  getAllproductsApi() {
    this.api.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allProducts=res
        
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }

}
