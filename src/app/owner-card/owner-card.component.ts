import { Component, Input } from '@angular/core';
import { Owner } from '../../types';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'owner-card',
  templateUrl: './owner-card.component.html',
  styleUrls: ['./owner-card.component.css'],
  providers: [OwnerService]
})
export class OwnerCardComponent {
  @Input() owner!: Owner;

  constructor(private ownerService: OwnerService) { }

  borrarPet(id: number) {
    this.ownerService.deletePet(id).subscribe(() => {
      this.owner.pets = this.owner.pets.filter((pet) => pet.id !== id)
    });
  }
}
