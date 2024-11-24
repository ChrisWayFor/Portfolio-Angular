import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeEnabled = false;

  constructor() {
    this.initializeDarkMode();
  }

  /**
   * Initialise le mode sombre en fonction de localStorage ou du système.
   */
  initializeDarkMode(): void {
    if (this.isBrowserEnvironment()) {
      const savedDarkMode = localStorage.getItem('darkMode');
      this.darkModeEnabled =
        savedDarkMode === 'enabled' ||
        (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.updateDarkModeClass();
    } else {
      this.darkModeEnabled = false; // Par défaut en SSR
    }
  }

  /**
   * Bascule entre le mode clair et le mode sombre.
   */
  toggleDarkMode(): void {
    this.darkModeEnabled = !this.darkModeEnabled;

    if (this.isBrowserEnvironment()) {
      localStorage.setItem('darkMode', this.darkModeEnabled ? 'enabled' : 'disabled');
      this.updateDarkModeClass();
    }
  }

  /**
   * Vérifie si le mode sombre est activé.
   */
  isDarkModeEnabled(): boolean {
    return this.darkModeEnabled;
  }

  /**
   * Met à jour la classe CSS pour activer/désactiver le mode sombre.
   */
  private updateDarkModeClass(): void {
    if (this.isBrowserEnvironment()) {
      if (this.darkModeEnabled) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  /**
   * Vérifie si l'environnement actuel est un navigateur.
   */
  private isBrowserEnvironment(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
}
