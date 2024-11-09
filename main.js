var toggleButton = document.querySelector('button');
var skillsContainer = document.querySelector('.resume');
if (toggleButton && skillsContainer) {
    toggleButton.addEventListener('click', function () {
        var skillsList = skillsContainer.querySelector('ul');
        if (skillsList.style.visibility === 'hidden') {
            skillsList.style.visibility = 'visible'; // Show skills
        }
        else {
            skillsList.style.visibility = 'hidden'; // Hide skills but keep the div color
        }
    });
}
