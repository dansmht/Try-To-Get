const apiKey = 'AIzaSyA4hyHEpZ6aJ9OEEd3_MeaCWzKwHhdx5R4'

export async function loginWithEmailAndPassword(email, password) {
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return data.displayName
}

export async function registerWithEmailAndPassword(email, password, displayName) {
  const res1 = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const userData = await res1.json()
  const idToken = userData.idToken

  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      idToken, displayName, photoUrl: '', deleteAttribute: [],
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return data.displayName
}
