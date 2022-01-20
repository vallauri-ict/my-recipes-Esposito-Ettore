import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  //private REST_API_SERVER = "http://localhost:3000/"; //json-server
  //private REST_API_SERVER = "http://localhost:1337/api/"; //crude server
  private REST_API_SERVER = "https://esposito-ettore-crudserver.herokuapp.com/api/"; //heroku srvere

  constructor(private httpClient :HttpClient) {

  }

  public SendGetRequest(endPoint :string) {
    return this.httpClient.get(this.REST_API_SERVER + endPoint);
  }

  public SendPostRequest(endPoint :string, data :any) {
    this.httpClient.post(this.REST_API_SERVER + endPoint, data)
        .subscribe(succ => console.log(succ), err => console.log(err));
  }

  public SendPatchRequest(endPoint :string, data :any) {
    this.httpClient.patch(this.REST_API_SERVER + endPoint, data)
        .subscribe(succ => console.log(succ), err => console.log(err));
  }

  public SendDeleteRequest(endPoint :string, data :any) {
    this.httpClient.delete(this.REST_API_SERVER + endPoint, data)
        .subscribe(succ => console.log(succ), err => console.log(err));
  }
}