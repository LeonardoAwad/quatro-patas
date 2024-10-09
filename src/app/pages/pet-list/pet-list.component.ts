import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { AnimalsService } from '../../../services/animals.service';
import { PetModel } from '../../../models/pet.model';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './pet-list.component.html',
  styles: `.grid-template{
        grid-template-columns: repeat(auto-fill, 360px);
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetListComponent implements OnInit {
  private animalsService = inject(AnimalsService);
  pets: PetModel[] = [];
  isFavoriteModalOpen = false;
  isAdoptModalOpen = false;

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe((pets) => {
      this.pets = pets;
    });
  }
}
