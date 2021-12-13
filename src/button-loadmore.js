export default class ButtonLoadMore {
    constructor({ selector, hidden = false }) {
        this.refs = this.getElem(selector);
        hidden && this.hideButton();
    }
    getElem(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);

        return refs;
    }

    showButton() {
        this.refs.button.classList.remove('is-hidden');
    }
    
    hideButton() {
        this.refs.button.classList.add('is-hidden');
    }
}