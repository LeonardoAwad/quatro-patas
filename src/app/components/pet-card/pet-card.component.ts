import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PetModel } from '../../../models/pet.model';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
  styles: `
    .card-shadow{
      box-shadow:rgb(191 128 255 / 50%) 3px 8px 20px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetCardComponent {
  @Input({ required: true }) pet!: PetModel;
  @Output() isFavoriteModalOpen = new EventEmitter();
  @Output() isAdoptModalOpen = new EventEmitter();

  favorite(favorite: boolean): void {
    if (favorite) this.isFavoriteModalOpen.emit();
  }
}
