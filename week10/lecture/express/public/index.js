(() => {


  // fetch('/api/user', { credentials: 'include' }).then(res => res.json()).then(console.log);

  const root = document.getElementById('root');
  // const authToken = localStorage.getItem('access_token');

  const loginFormTemplate = document.getElementById('login-form-template');
  const loggedContentTemplate = document.getElementById('logged-content-template');

  const parseResponse = res =>
    res.headers.get('content-type').includes('application/json') ?
      res.json() :
      res.text();

  function renderLoggedContent() {
    root.firstElementChild?.remove();
    const { content } = loggedContentTemplate.cloneNode(true);
    root.appendChild(content);

    root.querySelector('#logout-btn').addEventListener('click', () => {
      fetch('/logout', {
        method: 'POST',
        credentials: 'include',
        // headers: {
        //   'access-token': authToken
        // }
      }).then(() => {
        localStorage.removeItem('access_token');
        renderLoginForm();
      })
    });
  }

  function renderLoginForm() {
    root.firstElementChild?.remove();
    const { content } = loginFormTemplate.cloneNode(true);
    root.appendChild(content);

    const loginForm = root.querySelector('#login-form');
    loginForm.addEventListener('submit', loginFormSubmit);
  }

  function parseLoginForm(acc, currElement) {
    if (currElement instanceof HTMLInputElement) {
      acc[currElement.name] = currElement.value;
    }
    return acc;
  }

  function loginFormSubmit(event) {
    event.preventDefault();
    const { target } = event;

    const wrongCredentialsMessage = target.querySelector('#wrong-credentials');
    const data = Array.from(target.querySelectorAll('*[name]'))
      .reduce(parseLoginForm, {});

    const body = JSON.stringify(data);

    fetch('/login', {
      method: 'POST',
      body,
      headers: {
        'content-type': 'application/json',
        'content-length': body.length
      }
    })
      .then(parseResponse)
      .then(({ user, token }) => {
        if (!user) {
          return void wrongCredentialsMessage.classList.remove('hidden');
        }
        renderLoggedContent();
        localStorage.setItem('access_token', token);
      });
  }

  function app(user) {
    if (!user) { return void renderLoginForm(); }
    renderLoggedContent();
  }

  fetch('/authenticate', {
    // headers: { 'access-token': authToken },
    credentials: 'include'
  })
    .then(parseResponse)
    .then(data =>
      typeof data !== 'string' && 'user' in data ?
        data.user :
        Promise.reject('Invalid response')
    )
    .then(app)
    .catch(console.error);
})();
