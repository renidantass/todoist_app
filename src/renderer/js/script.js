// webview
const webview = document.querySelector('#todoist-webapp');

// vars
let inbox = document.querySelector('#inbox');
let day = document.querySelector('#day');
let week = document.querySelector('#week');

window.onload = function () {
    hideLoading();
}

// show loading
function showLoading() {
    let loadingComponent = document.querySelector('.lds-ripple');
    loadingComponent.style.display = 'block';
}

function hideLoading() {
    let loadingComponent = document.querySelector('.lds-ripple');
    loadingComponent.style.display = 'none';
}

// event listeners
inbox.addEventListener('click', () => {
    webview.src = "https://ptbr.todoist.com/app?lang=pt_BR#project%2F2183149153";
    webview.addEventListener('did-start-loading', () => {
        showLoading();
    });
    webview.addEventListener('did-finish-load', () => {
        hideLoading();
    });
});

day.addEventListener('click', () => {
    webview.src = "https://ptbr.todoist.com/app?lang=pt_BR#agenda%2Foverdue%20%26%20!assigned%20to%3A%20other%2C%20today%20%26%20!assigned%20to%3A%20other";
    webview.addEventListener('did-start-loading', () => {
        showLoading();
    });
    webview.addEventListener('did-finish-load', () => {
        hideLoading();
    });
});

week.addEventListener('click', () => {
    webview.src = "https://ptbr.todoist.com/app?lang=pt_BR#agenda%2Foverdue%20%26%20!assigned%20to%3A%20other%2C%207%20days%20%26%20!assigned%20to%3A%20other";
    webview.addEventListener('did-start-loading', () => {
        showLoading();
    });
    webview.addEventListener('did-finish-load', () => {
        hideLoading();
    });
});