import { environment } from './environment/environment';
import { AppComponent } from './app/app.component';

console.log('The environment is: ' + environment.API_URL);

const userService = {
  getUsers() {
    return fetch(`${environment.API_URL}user`)
      .then(res => res.json())
  }
};

const mainInjector = {
  instances: {
    userService
  },
  get(name: string) {
    return (this.instances as any)[name];
  }
};

const appRoot = new AppComponent(mainInjector);

document.getElementById('app-root')?.appendChild(appRoot);