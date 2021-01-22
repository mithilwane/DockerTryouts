import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hellostr = "";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDemoMethod().subscribe((data: any)=>{  
			console.log(data);  
			this.hellostr = data;  
		})
  }

}
