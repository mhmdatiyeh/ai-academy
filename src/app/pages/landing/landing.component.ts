import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { LandingData, LandingService } from '../services/landing.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data$!: Observable<LandingData>;

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.data$ = this.landingService.getLandingData();
  }

  trackByIndex(index: number): number {
    return index;
  }
}
