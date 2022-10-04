import { Component, OnInit } from '@angular/core';
import { PetType } from '../../types';
import { PetTypesService } from '../pet-types.service';

@Component({
  selector: 'app-pet-type',
  templateUrl: './pet-type.component.html',
  styleUrls: ['./pet-type.component.css']
})
export class PetTypeComponent implements OnInit {
  petTypes: PetType[] = []
  name: string = '';
  constructor(private petTypesService: PetTypesService) { }

  ngOnInit(): void {
    this.petTypesService.getPetTypes().subscribe((data: PetType[]) => {
      this.petTypes = data;
    });
  }
  
  addPetType(): void {
    this.petTypesService.addPetType(this.name).subscribe((data: any) => {
      this.petTypes.push({ id: this.petTypes.length + 1, name: this.name });
    });
  }
  delete(id: number): void {
    this.petTypesService.deletePetType(id).subscribe((data: any) => {
      this.petTypes = this.petTypes.filter((petType) => petType.id !== id);
    });
  }

}
