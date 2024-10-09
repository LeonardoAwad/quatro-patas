import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockupData } from '../models/mockup';
import { PetModel } from '../models/pet.model';

@Injectable({ providedIn: 'root' })
export class AnimalsService {
  getAnimals(): Observable<PetModel[]> {
    return of<PetModel[]>(mockupData);
  }
}
