import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: `
  .shadow-purple {
    box-shadow: 8px 8px 20px 0px #7918D980;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
