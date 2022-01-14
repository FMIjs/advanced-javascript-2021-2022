import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "./interfaces/user";

@customElement("user-details")
export class UserDetails extends LitElement {
  static styles = css`
    .user-detail__container ul {
      list-style-type: none;
      background: #fafade;
      padding: 1rem;
    }
    h4 {
      text-align: center;
    }
  `;

  @property()
  user!: IUser;

  render() {
    if (this.user) {
      return html`<div class="user-detail__container">
        <h4>Basic Info</h4>
        <ul class="user-detail__basic">
          <li>User id: ${this.user.id}</li>
          <li>First name: ${this.user.firstName}</li>
          <li>Last name: ${this.user.lastName}</li>
          <li>Username: ${this.user.username}</li>
          <li>Email: ${this.user.email}</li>
        </ul>
      </div>`;
    } else {
      return html`<h4>Not selected User information from some post</h4>`;
    }
  }
}
