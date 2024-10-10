import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { addNumbers } from '@poc-aok-portalrahmen/jsLib';
import { UiComponent } from '@poc-aok-portalrahmen/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  number = addNumbers(2, 1);
}
