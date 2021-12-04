// XMLHttpRequest - old school

// fetch('/api/user')
//   .then(res => res.ok ? res.json() : null)
//   .then(users => {
//     users.forEach(u => {
//       const el = document.createElement('div');
//       el.innerHTML = `${u.firstName} ${u.lastName}`;
//       document.body.appendChild(el);
//     })
//   });

fetch('/api/user', {
  body: JSON.stringify({ firstName: 'TEST', lastName: 'TEST' }),
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST'
}).then(res => res.ok ? res.json() : null).then(console.log);
