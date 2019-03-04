export const doScrollIntoView = (e) => {
    const view = e.currentTarget.dataset.view;
    document.querySelector(`${view}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}