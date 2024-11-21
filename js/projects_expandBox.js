document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const fullDescription = this.querySelector('.full-description');
            fullDescription.style.display = (fullDescription.style.display === 'block') ? 'none' : 'block';
        });
    });
});
