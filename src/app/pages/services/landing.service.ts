import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Program {
  id: number;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  outcomes: string[];
  tag?: string;
}

export interface LandingData {
  hero: {
    title: string;
    subtitle: string;
    trustBullets: string[];
    progressPreview: { completed: number; total: number; label: string; };
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  programs: Program[];
  cta: { title: string; description: string; };
}

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private data: LandingData = {
    hero: {
      title: 'Master the Future with AI Academy',
      subtitle: 'Unlock world-class learning paths designed to take you from fundamentals to advanced AI architecture with ease.',
      trustBullets: ['Personalized Learning Paths', 'Expert-Led Curriculum', 'Real-Time Progress Tracking'],
      progressPreview: { completed: 12, total: 15, label: 'Current Progress' }
    },
    about: {
      title: 'Designed for Clarity',
      description: 'The AI Academy offers a distraction-free environment focused on high-impact learning and practical implementation.',
      features: ['Hands-on Projects', 'Industry Mentorship', 'Modern Learning Tools', 'Performance Insights']
    },
    programs: [
      { id: 1, title: 'AI Foundations', level: 'Beginner', duration: '4 Weeks', outcomes: ['Python for AI', 'Basic Neural Networks'], tag: 'Start Here' },
      { id: 2, title: 'Advanced Deep Learning', level: 'Intermediate', duration: '8 Weeks', outcomes: ['CNNs & RNNs', 'Model Optimization'], tag: 'Popular' },
      { id: 3, title: 'Applied Generative AI', level: 'Advanced', duration: '10 Weeks', outcomes: ['LLM Orchestration', 'Fine-tuning Techniques'] }
    ],
    cta: { 
      title: 'Ready to Transform Your Career?', 
      description: 'Join over 10,000 students building the future of intelligence today.' 
    }
  };

  getLandingData(): Observable<LandingData> {
    return of(this.data);
  }
}
