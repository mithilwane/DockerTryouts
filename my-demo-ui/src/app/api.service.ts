import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  public getDemoMethod(){  
		return this.httpClient.get("/api/demoMethod");  
	}  
}