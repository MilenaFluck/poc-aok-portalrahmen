import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@poc-aok-portalrahmen/ui';

@Component({
  standalone: true,
  imports: [CommonModule, UiComponent],
  selector: 'app-remote2-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {}
