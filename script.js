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

    // 3. Ajout d'un bouton de Mode Sombre (Dark Mode)
    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = '🌙 Mode Sombre';
    darkModeBtn.style.margin = '20px';
    darkModeBtn.style.padding = '8px 16px';
    darkModeBtn.style.cursor = 'pointer';
    
    // Insère le bouton juste avant le titre h1
    const h1 = document.querySelector('h1');
    h1.parentNode.insertBefore(darkModeBtn, h1);

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            document.body.style.backgroundColor = '#1e1e1e';
            document.body.style.color = '#ffffff';
            darkModeBtn.textContent = '☀️ Mode Clair';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            darkModeBtn.textContent = '🌙 Mode Sombre';
        }
    });
   
    
});
