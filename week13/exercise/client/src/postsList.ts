import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./post";
// import { IUser } from "./interfaces/user";
import { IPost } from "./interfaces/post";

@customElement("post-list")
export class PostList extends LitElement {
  constructor() {
    super();

    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data;
      });
  }

  @property()
  posts: IPost[] = [];

  render() {
    return html`
      ${this.posts.map((post) => {
        return html`<post-component
         .post=${post}
        ></post-component>`;
      })}
    `;
  }
}
