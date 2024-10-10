import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunicationService } from '@poc-aok-portalrahmen/angularLib';
import { addNumbers } from '@poc-aok-portalrahmen/jsLib';
import { UiComponent } from '@poc-aok-portalrahmen/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  number = addNumbers(2, 1);
  message: string = '';
  constructor(private communicationService: CommunicationService) {}
  ngOnInit() {
    this.communicationService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  functionWithoutReturnType() {
    return null;
  }
}
