import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const userTheme = browser && localStorage.getItem('theme');

export const theme = writable(userTheme ?? 'dark');

export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    if (currentTheme) {
      document.documentElement.classList.replace(currentTheme, newTheme);
    }

    localStorage.setItem('theme', newTheme);
    return newTheme;
  });
}
