const formLogin = document.querySelector('form')

formLogin.addEventListener('submit', async e => {
  e.preventDefault()

  const response = await fetch('http://localhost:8080/api/sessions/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // @ts-ignore
    body: new URLSearchParams(new FormData(formLogin))
  })

  if (response.status === 201) {
    console.log(await response.json())
    //window.location.href = '/profile.html'
  } else {
    const error = await response.json()
    alert(error.message)
  }
})