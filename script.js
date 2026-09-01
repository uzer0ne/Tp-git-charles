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
   
    
});
