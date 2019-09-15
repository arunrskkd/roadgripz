import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.get_products();
  }

  get_products(){
    this.httpClient.get(environment.baseUrl + '/wp-json/wp/v2/posts').subscribe((res)=>{
        console.log(res);
    });
  }
}
