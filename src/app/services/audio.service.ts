import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataResponse} from "./service.interface";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/audio'

  getAllAudioGadgets() {
    return this.http.get<DataResponse[]>(this.API_URL)
  }
}
