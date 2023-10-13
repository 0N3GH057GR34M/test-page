const switchQuizCheckbox = (name) => {
    const checkbox = document.querySelector(`input[name='${name}']`);
    const cross = document.querySelector(`label[for='${name}']>img`);
    checkbox.checked ? cross.classList.remove("no-display") : cross.classList.add("no-display");
}

const switchModalCheckbox = (name) => {
    const checkbox = document.querySelector(`input[name='${name}']`);
    const cross = document.querySelector(`label[for='${name}']>img`);
    cross.src = checkbox.checked ? './assets/icons/circle-svgrepo-com-white.svg' : './assets/icons/circle-svgrepo-com-black.svg';
}

const switchModalWindow = () => {
    const modal = document.querySelector(`#modal`);
    modal.classList.contains('no-display') ? modal.classList.remove("no-display") : modal.classList.add("no-display");
}