import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  thankYouNote = 'Dziękujemy za znalezienie grzybów i pomoc w ich dokumentacji!';
  emojis = '🍄❤️🐈‍⬛ 🍄❤️🐈‍⬛ 🍄❤️🐈‍⬛'
}
