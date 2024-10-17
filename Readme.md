# Shadow DOM Example

The **Shadow DOM** is a web standard that allows developers to encapsulate a part of the DOM and CSS styles so that they do not interfere with the rest of the document. It is a key part of the Web Components standard, which enables the creation of reusable and encapsulated custom elements.

This repository contains a simple example demonstrating the use of Shadow DOM in web components. The example includes a custom element with encapsulated styles and content.

## Files

- `index.html`: The main HTML file that includes the custom element.
- `index.js`: The JavaScript file that defines the custom element and attaches a shadow DOM.

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/msrajawat298/custom-elements-shadow-dom
    ```

2. Navigate to the project directory:
    ```sh
    cd shadow-dom-example
    ```

3. Open `index.html` in your web browser to see the Shadow DOM example in action.

## Custom Element

The custom element `<my-element>` is defined in `index.js`. It attaches a shadow root and includes encapsulated styles and content.

## License

This project is licensed under the MIT License.


- **Key Features**
    - **Encapsulation:** Shadow DOM provides a way to keep the internal structure and styles of a component hidden from the rest of the document. This prevents styles and scripts from leaking in or out.
    - **Scoped Styles:** Styles defined within a shadow DOM are scoped to that shadow tree and do not affect the rest of the document.
    - **Custom Elements:** Shadow DOM is often used in conjunction with custom elements to create reusable web components.


## Applications of Shadow DOM
- **Encapsulation of Styles and Markup:**

    - **Isolation:** Shadow DOM allows you to encapsulate the internal structure and styles of a component, preventing them from interfering with the rest of the document.
    - **Scoped Styles:** Styles defined within a shadow DOM are scoped to that shadow tree and do not affect the rest of the document.
    
- **Reusable Components:**

    - **Custom Elements:** Shadow DOM is often used in conjunction with custom elements to create reusable web components. These components can be easily shared and reused across different projects.
    **Modularity:** By encapsulating the internal logic and styles, Shadow DOM helps in creating modular components that can be independently developed and maintained.

- **Avoiding Style Conflicts:**

    - **Style Isolation:** Shadow DOM ensures that the styles of a component do not leak out and affect other parts of the application. This is particularly useful in large applications where style conflicts can be a common issue.
    **Third-Party Integration:** When integrating third-party components or libraries, Shadow DOM can prevent their styles from conflicting with your application's styles.

- **Improved Maintainability:**

    - **Encapsulated Logic:** By keeping the component's logic and styles encapsulated, Shadow DOM makes it easier to maintain and update components without affecting the rest of the application.
    - **Clear Boundaries:** Shadow DOM provides clear boundaries between components, making the codebase more organized and easier to understand.

- **Enhanced Security:**

    - **Content Security:** Shadow DOM can help in securing sensitive content by encapsulating it within the component, making it less accessible to external scripts and styles.
    - **Controlled Access:** By using the mode: 'closed' option, you can create a shadow DOM that is not accessible from JavaScript outside the component, providing an additional layer of security.


## Reference Link
- [What is shadow dom?](https://youtu.be/7Tok22qxPzQ?si=gsCPyuUGqeYAcYy7)