import {Component, DOCUMENT, inject, OnInit, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'HWFWM';
  #document: Document = inject(DOCUMENT);
  currentTheme = signal<'light' | 'dark'>('light');

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      this.currentTheme.set(storedTheme);
    }
    this.#updateBodyClass();
  }

  toggleTheme(): void {
    this.currentTheme.update(current => (current === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', this.currentTheme());
    this.#updateBodyClass();
  }

  #updateBodyClass(): void {
    this.#document.body.classList.remove('dark', 'light'); // Remove both for clean slate
    if (this.currentTheme() === 'dark') {
      this.#document.body.classList.add('dark');
    }
    if (this.currentTheme() === 'light') {
      this.#document.body.classList.add('light');
    }
  }

  get buttonText() {
    return this.currentTheme() === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }

}
