import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from '@poc-aok-portalrahmen/angularLib';
import { addNumbers } from '@poc-aok-portalrahmen/jsLib';
import { UiComponent } from '@poc-aok-portalrahmen/ui';

@Component({
  standalone: true,
  imports: [CommonModule, UiComponent],
  selector: 'app-remote1-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  number = addNumbers(Math.random(), 4);

  constructor(private communicationService: CommunicationService) {}

  generate(): void {
    this.number = addNumbers(Math.random(), 4);
  }

  sendMessage(number: number): void {
    this.communicationService.sendMessage('Hello from Remote 1. My numer is: ' + number);
  }
}
