import { Component, signal } from '@angular/core';
import { BentoCardComponent } from '../../features/bento-card/bento-card.component';
import { HeroComponent } from '../../features/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BentoCardComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly cards = signal([
    {
      id: 1,
      title: 'Projet 1',
      description: 'Un projet Angular utilisant des composants autonomes.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Un portfolio interactif réalisé avec Nuxt.js et TailwindCSS.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Une application de gestion développée avec Firebase et Angular.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ]);
}
