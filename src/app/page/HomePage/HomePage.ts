import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../../components/home/home';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, Home, Navbar],
  templateUrl: './HomePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
