import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bento-card',
  templateUrl: './bento-card.component.html',
  styleUrls: ['./bento-card.component.css']
})
export class BentoCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly imageUrl = input.required<string>();
}
