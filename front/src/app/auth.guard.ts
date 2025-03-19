import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const userStorage = localStorage.getItem('user');
  const router = inject(Router); // Injecter le Router

  if (userStorage) {
    try {
      const user = JSON.parse(userStorage);
      if (user && user.roles && user.roles.name === 'SUPER_ADMIN') {
        return true; // Utilisateur autorisé
      }
    } catch (error) {
      console.error('Erreur lors de l\'analyse de l\'utilisateur depuis localStorage', error);
    }
  }

  // Utilisateur non autorisé, rediriger vers la page de connexion
  router.navigate(['/']).then();
  return false;
};
