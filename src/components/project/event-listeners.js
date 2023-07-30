import { application } from '../main-app.js';
import { renderProject } from './dom.js';
import { renderGroup } from '../group/dom.js';
import { getProjectNodes } from './static-selectors.js';
import { STANDARD_GROUPS } from '../utils.js';
import { menuActions } from './utils.js';

export function addListenersManageProjects() {
    const { projectsBar, form, exitButton, cancelButton } = getProjectNodes();
    if (!projectsBar) {
        alert('Error: project menu panel wasn\'t found');
    }
    if (!form) {
        alert('Error: form panel wasn\'t found');
    }
    if (!exitButton || !cancelButton) {
        alert('Error: exit and/or cancel buttons weren\'t found');
    }

    projectsBar.addEventListener('click', (e) => openMenuHandler(e));
    form.addEventListener('submit', (e) => submitHandler(e));
    exitButton.addEventListener('click', (e) => exitHandler(e));
    cancelButton.addEventListener('click', (e) =>  exitHandler(e));
};

const openMenuHandler = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const target = e.target;
    if (!target) {
        alert('Error: the add project icon wasn\'t found');
    } 

    const action = target.getAttribute('data-project-action');
    if (!action) {
        alert('Error: the project menu has no action');
    } 

    const open = openMenu(menuActions(action), target);
    if (!open) {
        alert(`Error: menu action ${actionValue} has no function`);
    } 
};

const openMenu = menuActions(action) => {
    addNew: (target) => {
        const { 
            menuCover,
            menu,
            menuTitle,
            submitButton 
        } = getProjectNodes();

        menu.setAttribute('data-project-action', action);
    
        menuCover.classList.add('shown');
        menu.classList.add('shown');
        menuTitle.textContent = 'Add a new project';
        submitButton.textContent = 'Add'; 
    },
    edit: (target) => {
        const { 
            menuCover,
            menu,
            menuTitle,
            submitButton 
        } = getProjectNodes();

        menu.setAttribute('data-project-action', action);

        const project = target.closest('.project');
        const id = project.getAttribute('data-group-id');
        menu.setAttribute('data-group-id', id);

        menuCover.classList.add('shown');
        menu.classList.add('shown');
        menuTitle.textContent = 'Edit the project';
        submitButton.textContent = 'Save';
    },
    remove: (target) => {
        const { 
            currentGroupIcon,
            currentGroupName 
        } = getProjectNodes();

        const removedProject = target.closest('.project');
        const id = removedProject.getAttribute('data-group-id');
        const removedProjectIndex = application.removeProject(id);
    
        if (!removedProjectIndex) {
            alert('Error: project wasn\'t found');
            return;
        }

        if (!removedProject.classList.contains('current')) {
            removedProject.remove();
            return;
        }

        currentGroupName.textContent = '';
        currentGroupIcon.src = '';
        currentGroupIcon.alt = '';

        const projectListNodes = document.querySelectorAll('aside .projects-list .project');
        if (projectListNodes.length > 0) {
            const lastProjectNode = projectListNodes[projectListNodes.length - 1];
            const lastProjectId = lastProjectNode.getAttribute('data-group-id');
            renderGroup(lastProjectId);
        } else {
            renderGroup(STANDARD_GROUPS.ALL);
        }
        removedProject.remove();
    }
};


const submitHandler = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const { menu } = getProjectNodes();

    const action = menu.getAttribute('data-project-action');
    submitForm(action);
};

const submitForm = menuActions({
    ADDNEW: () => {
        const inputName = document.getElementById('#project-name');
        const inputIcon = document.querySelector('.project-menu input[name="iconURL"]:checked');

        if (!inputName || !inputName.value) {
            alert('Please write a project name');
            return;
        }

        if (!inputIcon || !inputIcon.value || !inputIcon.dataset.altText) {
            alert('Please select an icon');
            return;
        }

        const inputNewProject = {   
            name: inputName.value,
            iconURL: inputIcon.value,
            altText: inputIcon.dataset.altText   
        };

        const newProject = application.createNewProject(inputNewProject);
        if (!newProject) {
            alert('The project with this title already exists!');
            return;  
        }
        renderProject(newProject);
    },
    EDIT: () => {
        const { menu } = getProjectNodes();
        if (!menu) {
            alert('The project menu wasn\'t found');
            return;
        }

        const inputName = document.getElementById('#project-name');
        const inputIcon = document.querySelector('.project-menu input[name="iconURL"]:checked');

        if (!inputName || !inputName.value) {
            alert('Please write a project name');
            return;
        }
        if (!inputIcon || !inputIcon.value || !inputIcon.dataset.altText) {
            alert('Please select an icon');
            return;
        }

        const id = menu.getAttribute('data-group-id');
        const inputEditProject = {  
            id: id,
            name: inputName.value,
            iconURL: inputIcon.value,
            altText: inputIcon.dataset.altText  
        };

        const editedProject = application.editProject(inputEditProject);

        if (!editedProject) {
            alert('The project with this title already exists!');
            return;
        }

        updateEditedProjectNode(project);
    }   
});

const updateEditedProjectNode = (project) => {
    const { currentGroupIcon, currentGroupName } = getProjectNodes();
    const { id, name, iconURL, altText } = project;

    const editedProjectNodeName = document.querySelector(`.project[data-group-id="${id}"] span`);
    const editedProjectNodeIcon = document.querySelector(`.project[data-group-id="${id}"] .icon`);
    
    editedProjectNodeName.textContent = name;
    editedProjectNodeIcon.src = iconURL;
    editedProjectNodeIcon.altText = altText;

    const editedProjectNode = document.querySelector(`.project[data-group-id="${id}"]`);
    if (editedProjectNode.classList.contains('current')) {
        currentGroupName.textContent = name;
        currentGroupIcon.src = iconURL;
        currentGroupIcon.alt = altText;
    }
}

const exitHandler = (e) => {
    e.preventDefault();
    const { menuCover, menu, menuTitle, submitButton } = getProjectNodes();
  
    menuTitle.textContent = '';
    submitButton.textContent = '';
  
    menuCover.classList.remove('shown');
    menu.classList.remove('shown');
    menu.removeAttribute('data-project-action');
    menu.removeAttribute('data-group-id');
    menu.removeAttribute('data-task-action');
    menu.removeAttribute('data-task-id');
};





