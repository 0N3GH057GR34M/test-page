const switchCheckbox = (name) => {
    const checkbox = document.querySelector(`input[name='${name}']`);
    const cross = document.querySelector(`label[for='${name}']>img`);
    checkbox.checked ? cross.classList.remove("no-display") : cross.classList.add("no-display");
}