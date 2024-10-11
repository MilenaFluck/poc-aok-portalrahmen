import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-1.component.html',
  styleUrl: './component-1.component.scss',
})
export class Component1Component {}
