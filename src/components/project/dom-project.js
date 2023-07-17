import { createElementWithAttributes } from '../utils.js';
import { application } from '../main-app.js';

export function renderNewProject(name, iconURL, id) {
    const projectsList = document.querySelector('.projects-list');
    const newProject = createElementWithAttributes('li', { class: `project`}, projectsList);
    newProject.setAttribute('data-project-id', `${id}`);

    const newProjectImage = createElementWithAttributes('img', {
        src: `${iconURL}`,
        alt: `Project icon`
    }, newProject);

    const newProjectText = createElementWithAttributes('span', {}, newProject);
    newProjectText.textContent = name;

    const newProjectEditImage = createElementWithAttributes('img', {
        src: '../src/originals/edit.svg',
        alt: `Edit project icon`,
        class: 'edit'
    }, newProject);
    const newProjectDeleteImage = createElementWithAttributes('img', {
        src: '../src/originals/delete.svg',
        alt: `Remove project icon`,
        class: 'remove'
    }, newProject);
}

export function addListenersToANewProject(id) {
    const projectSelector = `.project[data-project-id="${id}"]`;
    const selectedProject = document.querySelector(projectSelector);

    const selectedProjectMenu = document.querySelector('.project-menu');
    const selectedProjectMenuTitle = document.querySelector('.project-menu .title-box span');
    const selectedSaveProjectButton = document.querySelector('.project-menu button.submit');
    const selectedMenuCover = document.querySelector('.menu-cover');

    const selectedEditProjectButton = document.querySelector(`${projectSelector} img.edit`);
    selectedEditProjectButton.addEventListener('click', function() {
        selectedProjectMenuTitle.textContent = 'Edit the project';
        selectedSaveProjectButton.textContent = 'Save';
        selectedMenuCover.classList.add('shown');
        selectedProjectMenu.classList.add('shown');
        selectedProjectMenu.classList.add('edit');
    });

    const selectedExitButton = document.querySelector('.project-menu .exit');
    selectedExitButton.addEventListener('click', function() {
        selectedProjectMenu.classList.remove('edit');
    });
    const selectedCancelButton = document.querySelector('.project-menu .cancel');
    selectedCancelButton.addEventListener('click', function() {
        selectedProjectMenu.classList.remove('edit');
    });

    selectedProject.addEventListener('click', function() {
            if (!selectedProject.classList.contains('current')) {
                selectedProject.classList.add('current');
            } else {
                selectedProject.classList.remove('current');
            }
    });

    const selectedRemoveProjectButton = document.querySelector(`${projectSelector} img.remove`);
    selectedRemoveProjectButton.addEventListener('click', function() {
        const removedProjectNode = selectedRemoveProjectButton.closest(`${projectSelector}`);
        const projectId = removedProjectNode.getAttribute('data-project-id');
        
        const removedProject = application.removeProject(projectId);

        if (removedProject) {
            removedProjectNode.remove();
        } else {
            alert('Error: project wasn\'t found');
        }   
    });
}