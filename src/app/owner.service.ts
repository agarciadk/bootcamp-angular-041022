import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  
  constructor(private httpClient: HttpClient) { }

  getOwners(): Observable<any> {
    return this.httpClient.get(`${API_URL}/api/owners`);
  }
  deletePet(petId: number) {
    return this.httpClient.delete(`${API_URL}/api/pets/${petId}`);
  }

}
