document.addEventListener('DOMContentLoaded', () => {
    // 1. Correction de l'erreur HTML du lien 'Liste'
    const listeLi = document.querySelector('li[a]');
    if (listeLi) {
        const trueLink = document.createElement('a');
        trueLink.href = 'liste.html';
        trueLink.textContent = listeLi.textContent;
        listeLi.textContent = '';
        listeLi.appendChild(trueLink);
        listeLi.removeAttribute('a');
    }

    // 2. Gestion dynamique du style de la navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.setAttribute('aria-current', 'page');
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });

   
    
});
