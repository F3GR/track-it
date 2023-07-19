import { createElementWithAttributes } from '../utils.js';

export function createMainPage() {
    renderMainPage();
    renderFilterOptionsMenu();
    renderProjectMenuTemplate();
    renderTaskMenuTemplate();
};

function renderMainPage() {
    const content = document.querySelector('.content');

    const header = createElementWithAttributes('header', {}, content);

    const sideBarIcon = createElementWithAttributes('img', {
        src: '../src/originals/menu.svg',
        alt: `Sidebar menu icon`,
        class: 'sidebar-icon hidden'
    }, header);

    const heading = createElementWithAttributes('div', {class: `heading`}, header);

    const logoIcon = createElementWithAttributes('img', { 
        src: '../src/originals/fav-icon.svg',
        class: `logo`,
        alt: `ToDo List logo`}, heading);

    const headingText = createElementWithAttributes('h1', {}, heading);
    headingText.textContent = `ToDo List`;

    const emptyDiv = createElementWithAttributes('div', {class: 'empty'}, header);

    const viewOptionsIcon = createElementWithAttributes('img', { 
        src: '../src/originals/view-options.svg',
        alt: `View Options logo`,
        class: 'options'
    }, header);

    const sidebar = createElementWithAttributes('aside', {}, content);

    const barTypes = createElementWithAttributes('div', {class: `bar-types`}, sidebar);

    const tasksAll = createElementWithAttributes('div', {class: `tasks-all`}, barTypes);
    tasksAll.setAttribute('data-id', 'all');
    const tasksAllImage = createElementWithAttributes('img', { 
        src: '../src/originals/calendar-all.svg',
        alt: `All tasks icon`
    }, tasksAll);
    const tasksAllText = createElementWithAttributes('span', {}, tasksAll);
    tasksAllText.textContent = `All`;

    const tasksToday = createElementWithAttributes('div', {class: `tasks-today`}, barTypes);
    tasksAll.setAttribute('data-id', 'today');
    const tasksTodayImage = createElementWithAttributes('img', {
        src: '../src/originals/calendar-today.svg',
        alt: `Today tasks icon`
    }, tasksToday);
    const tasksTodayText = createElementWithAttributes('span', {}, tasksToday);
    tasksTodayText.textContent = `Today`;

    const tasksWeek = createElementWithAttributes('div', {class: `tasks-week`}, barTypes);
    tasksAll.setAttribute('data-id', 'week');
    const tasksWeekImage = createElementWithAttributes('img', {
        src: '../src/originals/calendar-week.svg',
        alt: `Week tasks icon`
    }, tasksWeek);
    const tasksWeekText = createElementWithAttributes('span', {}, tasksWeek);
    tasksWeekText.textContent = `Week`;

    const tasksCompleted = createElementWithAttributes('div', {class: `tasks-completed`}, barTypes);
    tasksAll.setAttribute('data-id', 'completed');
    const tasksCompletedImage = createElementWithAttributes('img', {
        src: '../src/originals/calendar-finished.svg',
        alt: `Completed tasks icon`
    }, tasksCompleted);
    const tasksCompletedText = createElementWithAttributes('span', {}, tasksCompleted);
    tasksCompletedText.textContent = `Completed`;

    const tasksOverdue = createElementWithAttributes('div', {class: `tasks-overdue`}, barTypes);
    tasksAll.setAttribute('data-id', 'overdue');
    const tasksOverdueImage = createElementWithAttributes('img', {
        src: '../src/originals/calendar-overdue.svg',
        alt: `Overdue tasks icon`
    }, tasksOverdue);
    const tasksOverdueText = createElementWithAttributes('span', {}, tasksOverdue);
    tasksOverdueText.textContent = `Overdue`;

    const barProjects = createElementWithAttributes('div', {class: `bar-projects`}, sidebar);

    const projectsBarHeader = createElementWithAttributes('div', {class: `header`}, barProjects);
    const projectsBarHeaderImage = createElementWithAttributes('img', {
        src: '../src/originals/projects.svg',
        alt: `Projects icon`
    }, projectsBarHeader);
    const projectsBarHeaderText = createElementWithAttributes('span', {}, projectsBarHeader);
    projectsBarHeaderText.textContent = `Projects (0)`;
    const projectsBarHeaderAddImage = createElementWithAttributes('img', {
        src: '../src/originals/add-new.svg',
        alt: `Add new project icon`,
        class: 'add-new',
    }, projectsBarHeader);

    const projectsList = createElementWithAttributes('ul', {class: `projects-list`}, barProjects);

    const barFooter = createElementWithAttributes('div', {class: `bar-footer`}, sidebar);

    const footerLink = createElementWithAttributes('a', {
        href: 'https://github.com/F3GR'
    }, barFooter);
    const footerText = createElementWithAttributes('span', {}, footerLink);
    footerText.textContent = `\u00A9 F3GR, 2023`;

    const main = createElementWithAttributes('main', {}, content);

    const sidebarCover = createElementWithAttributes('div', {
        class: 'sidebar-cover'
    }, main);

    const mainHeadBox = createElementWithAttributes('div', {class: `header`}, main);
    const mainHeadImage = createElementWithAttributes('img', { 
        src: '../src/originals/calendar-all.svg',
        alt: `All tasks icon`
    }, mainHeadBox);
    const mainHeadText = createElementWithAttributes('span', {}, mainHeadBox);
    mainHeadText.textContent = "All";

    const mainTaskBar = createElementWithAttributes('div', {class: `task-bar`}, main);

    const mainTaskNumber = createElementWithAttributes('div', {class: `task-number`}, mainTaskBar);
    const taskBarText = createElementWithAttributes('span', {}, mainTaskNumber);
    taskBarText.textContent = `Tasks (0)`;

    const addNewTaskIcon = createElementWithAttributes('img', { 
        src: '../src/originals/add-new.svg',
        alt: `Add new Task icon`,
        class: 'add-new'
    }, mainTaskBar);

    const taskList = createElementWithAttributes('ul', {class: `task-list`}, main);

    const pageMenuBox = createElementWithAttributes('div', {class: `page-menu`, }, main);

    const firstPageIcon = createElementWithAttributes('img', {
        src: `../src/originals/first-page.svg`, 
        alt: `First page icon`,
        class: 'first-page'
    }, pageMenuBox);
    const previousPageIcon = createElementWithAttributes('img', {
        src: `../src/originals/previous-page.svg`, 
        alt: `Previous page icon`,
        class: 'previous-page'
    }, pageMenuBox);
    const inputPage = createElementWithAttributes('input', {
        type: 'number',
        min: "1",
        max: "99", 
    }, pageMenuBox);
    const nextPageIcon = createElementWithAttributes('img', {
        src: `../src/originals/next-page.svg`, 
        alt: `Next page icon`,
        class: 'next-page'
    }, pageMenuBox);
    const lastPageIcon = createElementWithAttributes('img', {
        src: `../src/originals/last-page.svg`, 
        alt: `Last page icon`,
        class: 'last-page'
    }, pageMenuBox);
}

function renderFilterOptionsMenu() {
    
    const main = document.querySelector('.content main');

    const viewOptionsBox = createElementWithAttributes('div', {
        class: 'view-options-bar'
    }, main);

    const filterOptionsBox = createElementWithAttributes('div', {
        class: 'filter-options-box'
    }, viewOptionsBox);

    const viewOptionsText = createElementWithAttributes('span', {class: ``}, filterOptionsBox);
    viewOptionsText.textContent = `Filter options:`;

    const buttonHighPriority = createElementWithAttributes('button', {
        class: `high-priority enabled`}, filterOptionsBox);
    buttonHighPriority.textContent = `High`;

    const buttonMediumPriority = createElementWithAttributes('button', {
        class: `medium-priority enabled`}, filterOptionsBox);
    buttonMediumPriority.textContent = `Medium`;

    const buttonNormalPriority = createElementWithAttributes('button', {
        class: `normal-priority enabled`}, filterOptionsBox);
    buttonNormalPriority.textContent = `Normal`;

    const buttonCompleted = createElementWithAttributes('button', {
        class: `completed enabled`}, filterOptionsBox);
    buttonCompleted.textContent = `Completed`;

    const buttonOverdue = createElementWithAttributes('button', {
        class: `overdue enabled`}, filterOptionsBox);
    buttonOverdue.textContent = `Overdue`;

    const sortOptionsBox = createElementWithAttributes('div', {
        class: 'sort-options-box'
    }, viewOptionsBox);

    const sortOptionsText = createElementWithAttributes('span', {class: ``}, sortOptionsBox);
    sortOptionsText.textContent = 'Sort by:';

    const selectSortOption = createElementWithAttributes('select', {name: `sorting-option`}, sortOptionsBox);

    const sortByDate = createElementWithAttributes('option', {value: `date-from-oldest`},selectSortOption);
    sortByDate.textContent = `Date`;

    const sortByPriority = createElementWithAttributes('option', {value: `priority-from-highest`},selectSortOption);
    sortByPriority.textContent = `Priority`;

    const sortByStatus = createElementWithAttributes('option', {value: `priority-from-due`},selectSortOption);
    sortByStatus.textContent = `Status`;

    const sortOrderIcon = createElementWithAttributes('img', { 
        src: '../src/originals/arrow-upward.svg',
        alt: `Sort order icon`,
        class: 'is-upward'
    }, sortOptionsBox);
}

function renderProjectMenuTemplate() {
    const content = document.querySelector('.content');

    const menuCover = createElementWithAttributes('div', {
        class: 'menu-cover'
    }, content);

    const projectMenu = createElementWithAttributes('div', {
        class: 'project-menu'
    }, content);

    const projectMenuTitleBox = createElementWithAttributes('div', {
        class: 'title-box'
    }, projectMenu);

    const projectMenuTitle = createElementWithAttributes('span', {
        class: 'title'
    }, projectMenuTitleBox);
    projectMenuTitle.textContent = '';

    const projectMenuExitIcon = createElementWithAttributes('img', {
        class: 'exit',
        src: '../src/originals/close.svg',
        alt: 'Exit icon'
    }, projectMenuTitleBox);

    const projectMenuForm = createElementWithAttributes('form', {}, projectMenu);
    
    const formNameLabel = createElementWithAttributes('label', {
        for: 'name'
    }, projectMenuForm);
    formNameLabel.textContent = 'Name*:'
    const formName = createElementWithAttributes('input', {
        type: 'text',
        id: 'name',
        name: 'name',
        required: 'required'
    }, projectMenuForm);

    const formIconFieldset = createElementWithAttributes('fieldset', {
        required: 'required'
    }, projectMenuForm);
    const formIconLegend = createElementWithAttributes('legend', {}, formIconFieldset);
    formIconLegend.textContent = 'Icon*:'

    const inputCategoryJob = createElementWithAttributes('input', {
        id: 'job',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-job.svg'
    }, formIconFieldset);
    const iconCategoryJobLabel = createElementWithAttributes('label', {
        for: 'job'
    }, formIconFieldset);
    const iconCategoryJob = createElementWithAttributes('img', {
        src: '../src/originals/category-job.svg',
        alt: 'Category Job icon'
    }, iconCategoryJobLabel);

    const inputCategoryStudy = createElementWithAttributes('input', {
        id: 'study',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-study.svg'
    }, formIconFieldset);
    const iconCategoryStudyLabel = createElementWithAttributes('label', {
        for: 'study',
    }, formIconFieldset);
    const iconCategoryStudy = createElementWithAttributes('img', {
        src: '../src/originals/category-study.svg',
        alt: 'Category Study icon'
    }, iconCategoryStudyLabel);

    const inputCategoryGift = createElementWithAttributes('input', {
        id: 'gift',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-gift.svg'
    }, formIconFieldset);
    const iconCategoryGiftLabel = createElementWithAttributes('label', {
        for: 'gift',
    }, formIconFieldset);
    const iconCategoryGift = createElementWithAttributes('img', {
        src: '../src/originals/category-gift.svg',
        alt: 'Category Gift icon'
    }, iconCategoryGiftLabel);

    const inputCategoryInternational = createElementWithAttributes('input', {
        id: 'international',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-international-activity.svg'
    }, formIconFieldset);
    const iconCategoryInternationalLabel = createElementWithAttributes('label', {
        for: 'international',
    }, formIconFieldset);
    const iconCategoryInternational = createElementWithAttributes('img', {
        src: '../src/originals/category-international-activity.svg',
        alt: 'Category International activity icon'
    }, iconCategoryInternationalLabel);

    const inputCategoryPeople = createElementWithAttributes('input', {
        id: 'people',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-people.svg'
    }, formIconFieldset);
    const iconCategoryPeopleLabel = createElementWithAttributes('label', {
        for: 'people',
    }, formIconFieldset);
    const iconCategoryPeople = createElementWithAttributes('img', {
        src: '../src/originals/category-people.svg',
        alt: 'Category People icon'
    }, iconCategoryPeopleLabel);


    const inputCategoryScience = createElementWithAttributes('input', {
        id: 'science',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-science.svg'
    }, formIconFieldset);
    const iconCategoryScienceLabel = createElementWithAttributes('label', {
        for: 'science',
    }, formIconFieldset);
    const iconCategoryScience = createElementWithAttributes('img', {
        src: '../src/originals/category-science.svg',
        alt: 'Category Science icon'
    }, iconCategoryScienceLabel);

    const inputCategoryIT = createElementWithAttributes('input', {
        id: 'it',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-it.svg'
    }, formIconFieldset);
    const iconCategoryITLabel = createElementWithAttributes('label', {
        for: 'it',
    }, formIconFieldset);
    const iconCategoryIT = createElementWithAttributes('img', {
        src: '../src/originals/category-it.svg',
        alt: 'Category IT icon'
    }, iconCategoryITLabel);


    const inputCategoryOther = createElementWithAttributes('input', {
        id: 'other',
        type: 'radio',
        name: 'iconURL',
        value: '../src/originals/category-other.svg'
    }, formIconFieldset);
    const iconCategoryOtherLabel = createElementWithAttributes('label', {
        for: 'other',
    }, formIconFieldset);
    const iconCategoryOther = createElementWithAttributes('img', {
        src: '../src/originals/category-other.svg',
        alt: 'Category Other icon'
    }, iconCategoryOtherLabel);

    const buttonsGrid = createElementWithAttributes('div', {
        class: 'button-box',
    }, projectMenuForm);

    const buttonSubmit = createElementWithAttributes('button', {
        type: 'submit',
        class: 'submit'
    }, buttonsGrid);
    buttonSubmit.textContent = '';

    const buttonCancel = createElementWithAttributes('button', {
        class: 'cancel',
    }, buttonsGrid);
    buttonCancel.textContent = 'Cancel';
}

function renderTaskMenuTemplate() {
    const content = document.querySelector('.content');

    const taskMenu = createElementWithAttributes('div', {
        class: 'task-menu'
    }, content);

    const taskMenuTitleBox = createElementWithAttributes('div', {
        class: 'title-box'
    }, taskMenu);

    const taskMenuTitle = createElementWithAttributes('span', {
        class: 'title'
    }, taskMenuTitleBox);

    const taskMenuExitIcon = createElementWithAttributes('img', {
        class: 'exit',
        src: '../src/originals/close.svg',
        alt: 'Exit icon'
    }, taskMenuTitleBox);

    const taskMenuForm = createElementWithAttributes('form', {
    }, taskMenu);

    const formTitleLabel = createElementWithAttributes('label', {
        for: 'title'
    }, taskMenuForm);
    formTitleLabel.textContent = 'Title*:'

    const formTitle = createElementWithAttributes('input', {
        type: 'text',
        id: 'title',
        name: 'title',
        required: 'required'
    }, taskMenuForm);

    const formDueDateLabel = createElementWithAttributes('label', {
        for: 'dueDate'
    }, taskMenuForm);
    formDueDateLabel.textContent = 'Due Date:'

    const formDueDate = createElementWithAttributes('input', {
        type: 'date',
        id: 'dueDate',
        name: 'dueDate',
    }, taskMenuForm);

    const formPriorityFieldset = createElementWithAttributes('fieldset', {
        class: 'priority'
    }, taskMenuForm);

    const formPriorityLegend = createElementWithAttributes('legend', {}, formPriorityFieldset);
    formPriorityLegend.textContent = 'What is the task\'s priority?'

    const radioPriorityHigh = createElementWithAttributes('input', {
        id: 'priority',
        type: 'radio',
        name: 'priority',
        value: 'high'
    }, formPriorityFieldset);

    const labelPriorityHigh = createElementWithAttributes('label', {
        for: 'priority'
    }, formPriorityFieldset);
    labelPriorityHigh.textContent = 'High';

    const radioPriorityMedium = createElementWithAttributes('input', {
        id: 'priority',
        type: 'radio',
        name: 'priority',
        value: 'medium'
    }, formPriorityFieldset);

    const labelPriorityMedium = createElementWithAttributes('label', {
        for: 'priority'
    }, formPriorityFieldset);
    labelPriorityMedium.textContent = 'Medium';
    
    const radioPriorityNormal = createElementWithAttributes('input', {
        id: 'priority',
        type: 'radio',
        name: 'priority',
        value: 'normal'
    }, formPriorityFieldset);

    const labelPriorityNormal = createElementWithAttributes('label', {
        for: 'priority'
    }, formPriorityFieldset);
    labelPriorityNormal.textContent = 'Normal';

    const descriptionBox = createElementWithAttributes('div', {
        class: 'description-box',
    }, taskMenuForm);
    const descriptionLabel = createElementWithAttributes('label', {
        for: 'description',
    }, descriptionBox);
    descriptionLabel.textContent = 'Description:'
    const descriptionTextarea = createElementWithAttributes('textarea', {
        id: 'description',
        name: 'description',
        maxlength: '200'
    }, descriptionBox);

    const notesBox = createElementWithAttributes('div', {
        class: 'notes-box',
    }, taskMenuForm);
    const notesLabel = createElementWithAttributes('label', {
        for: 'notes',
    }, notesBox);
    notesLabel.textContent = 'Notes:'
    const notesTextarea = createElementWithAttributes('textarea', {
        id: 'notes',
        name: 'notes',
        maxlength: '100'
    }, notesBox);

    const buttonsGrid = createElementWithAttributes('div', {
        class: 'button-box',
    }, taskMenuForm);

    const buttonAdd = createElementWithAttributes('button', {
        type: 'submit',
        class: 'submit',
    }, buttonsGrid);

    const buttonCancel = createElementWithAttributes('button', {
        class: 'cancel',
    }, buttonsGrid);
    buttonCancel.textContent = 'Cancel';
}

