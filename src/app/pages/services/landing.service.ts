import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type ProgramLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ProgramCard {
  title: string;
  level: ProgramLevel;
  duration: string;
  outcomes: string[];
  tag?: string;
  link: string;
}

export interface LandingData {
  hero: {
    headline: string;
    subheadline: string;
    trustPoints: string[];
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string; // #about
  };
  about: {
    title: string;
    description: string;
    points: string[];
  };
  programs: {
    title: string;
    description: string;
    cards: ProgramCard[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    note: string;
  };
}

@Injectable({ providedIn: 'root' })
export class LandingService {
  getLandingData(): Observable<LandingData> {
    return of({
      hero: {
        headline: 'AI Academy — Learn AI with Clear Outcomes',
        subheadline:
          'Follow structured learning paths, build real skills, and track your progress from day one.',
        trustPoints: [
          'Outcome-focused programs (what you’ll be able to do)',
          'Structured paths to reduce confusion and overwhelm',
          'Progress tracking to keep you motivated'
        ],
        primaryCtaText: 'Explore Programs',
        primaryCtaLink: '/programs',
        secondaryCtaText: 'About the Academy',
        secondaryCtaLink: '#about'
      },
      about: {
        title: 'About AI Academy',
        description:
          'AI Academy is built for learners who want a clean, guided experience. Each program is designed around learning outcomes, a clear path, and practical progress checkpoints.',
        points: [
          'Clear learning outcomes + time estimates',
          'Instructor credibility & structured content flow',
          'Simple navigation with focused AI programs',
          'Progress tracking: completed vs remaining'
        ]
      },
      programs: {
        title: 'Programs Highlight',
        description: 'Choose a path based on your level. Each program includes clear outcomes and practical steps.',
        cards: [
          {
            title: 'AI Foundations',
            level: 'Beginner',
            duration: '4 weeks',
            outcomes: ['Understand core AI concepts', 'Work with datasets', 'Build simple ML models'],
            tag: 'Start Here',
            link: '/programs/ai-foundations'
          },
          {
            title: 'Machine Learning Track',
            level: 'Intermediate',
            duration: '6 weeks',
            outcomes: ['Train & evaluate models', 'Improve performance', 'Avoid common ML pitfalls'],
            link: '/programs/machine-learning'
          },
          {
            title: 'Deep Learning Essentials',
            level: 'Advanced',
            duration: '8 weeks',
            outcomes: ['Neural networks basics', 'CNN/RNN fundamentals', 'Deploy a DL model'],
            tag: 'Popular',
            link: '/programs/deep-learning'
          }
        ]
      },
      cta: {
        title: 'Ready to start?',
        description:
          'Pick your program, follow a clear path, and track your progress with milestones.',
        buttonText: 'Join Now',
        buttonLink: '/auth/register',
        note: 'You can always switch paths later based on your progress.'
      }
    });
  }
}
