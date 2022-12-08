import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataResponse} from "./service.interface";

@Injectable({
  providedIn: 'root'
})
export class GamingService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/gaming'

  getAllGamingDevices() {
    return this.http.get<DataResponse[]>(this.API_URL)
  }
}
