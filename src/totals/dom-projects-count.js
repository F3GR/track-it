import { isHTMLElement, showErrorModal } from '../utils.js';
import { getProjectsBarHeaderNodes } from './static-selectors.js';
import { ERR_RENDERING, ERR_HEADINGS } from './errors-text.js';

export function renderProjectsCount(projectsCount) {
    if (typeof projectsCount !== 'number' || projectsCount === NaN) {
        showErrorModal([ERR_HEADINGS.PROJECTS, ERR_RENDERING.PROJECTS_VALUES]);
        return;
    }

    const { addNewIcon, projectsBarHeader } = getProjectsBarHeaderNodes();
    if (!isHTMLElement(addNewIcon) || !isHTMLElement(projectsBarHeader)) {
        showErrorModal([ERR_HEADINGS.PROJECTS, ERR_RENDERING.PROJECTS_BAR]);
        return;
    }

    const oldProjectsNumber = document.querySelector('.projects-total');
    if (isHTMLElement(oldProjectsNumber)) {
        oldProjectsNumber.remove();
    }
    
    const projectsNumber = document.createElement('span');
    projectsNumber.textContent = `(${projectsCount})`;
    projectsNumber.classList.add('projects-total');
    projectsBarHeader.insertBefore(projectsNumber, addNewIcon);
}