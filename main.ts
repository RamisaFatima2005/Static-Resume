const toggleButton = document.querySelector('button');
const skillsContainer = document.querySelector('.resume') as HTMLElement; 

if (toggleButton && skillsContainer) {
    toggleButton.addEventListener('click', () => {
        const skillsList = skillsContainer.querySelector('ul') as HTMLElement;
        
        if (skillsList.style.visibility === 'hidden') {
            skillsList.style.visibility = 'visible';  // Show skills
        } else {
            skillsList.style.visibility = 'hidden';   // Hide skills but keep the div color
        }
    });
}
