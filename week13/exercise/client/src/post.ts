import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IPost } from "./interfaces/post";

@customElement("post-component")
export class Post extends LitElement {
  static styles = css`
    .post-list {
      list-style-type: none;
      border: 1px solid #000;
      padding: 1rem;
    }
    .post-list:hover {
      background-color: #fdfdea;
      cursor: pointer;
    }
  `;

  @property()
  post!: IPost;

  handleClick = () => {
    const event = new CustomEvent("selectUser", { bubbles: true, composed: true ,detail: this.post.user});
    this.dispatchEvent(event);
  };
  render() {
    return html`<ul class="post-list" @click=${this.handleClick}>
      <li>Post id: ${this.post.id}</li>
      <li>Created At: ${this.post.createdAt}</li>
      <li>Title: ${this.post.title}</li>
      <li>Content: ${this.post.content}</li>
      <li>User: ${this.post.user.username}</li>
    </ul>

    
    `;
  }
}
