import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataResponse} from "./service.interface";

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {
  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/gadgets'

  getAllGadgets() {
    return this.http.get<DataResponse[]>(this.API_URL)
  }
}
