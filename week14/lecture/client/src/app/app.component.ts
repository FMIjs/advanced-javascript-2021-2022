import { createTemplate } from "./create-template";

const appComponentTemplate = createTemplate(`
  <div id="text">HELLO WORLD!></div>
  <test-cmp></test-cmp>
  <ul id="user-list">
  </ul>
`);

export class AppComponent extends HTMLElement {
  constructor(injector: any) {
    super();
    const userService = injector.get('userService');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(appComponentTemplate.content.cloneNode(true));
    const ul = shadowRoot.querySelector('#user-list');

    userService.getUsers().then((users: any) => {
      users.forEach((user: any) => {
        const listItem = document.createElement('li');
        listItem.textContent = user.email;
        ul?.appendChild(listItem);
      })
    });
  }
}

customElements.define('app-root', AppComponent);
