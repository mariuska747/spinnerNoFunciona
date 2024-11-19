export function buildSpinner(classType){
    const spinner = document.querySelector('#spinner-container');
    spinner.innerHTML = `
    <section id="spinner" class="spinner ${classType}">
    <div class="spinner lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </section>
    `
    return spinner;
}