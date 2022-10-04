import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PetTypesService {

  constructor(private httpClient: HttpClient) { }

  getPetTypes(): Observable<any> {
    return this.httpClient.get(`${API_URL}/api/pettypes`);
  }

  addPetType(name: string): Observable<any> {
    return this.httpClient.post(
      `${API_URL}/api/pettypes`,
      {
        id: 0,
        name
      }
    );
  }

  deletePetType(id: number): Observable<any> {
    return this.httpClient.delete(`${API_URL}/api/pettypes/${id}`);
  }
}
