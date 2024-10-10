import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-angular-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angularLib.component.html',
  styleUrl: './angularLib.component.css',
})
export class AngularLibComponent {}
