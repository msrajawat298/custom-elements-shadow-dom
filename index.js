class MyElement extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element
        const shadow = this.attachShadow({ mode: 'open' });

        // Create some content for the shadow DOM
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        wrapper.textContent = 'Hello, Shadow DOM!';

        // Create some styles for the shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                color: white;
                background-color: black;
                padding: 10px;
                border-radius: 5px;
            }
        `;

        // Attach the created elements to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

// Define the new element
customElements.define('my-element', MyElement);