import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private REST_API_SERVER = "http://localhost:1337/api/";

  constructor(private httpClient :HttpClient) {

  }

  public SendGetRequest(endPoint :string) {
    return this.httpClient.get(this.REST_API_SERVER + endPoint);
  }
}
