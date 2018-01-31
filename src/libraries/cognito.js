export const signin = async (form) => {
  console.log('Signin started ...')
  if(form.email.value.includes('vlad')) {
    return { error: 'Wrong email or password!'}
  }

  return { 'data': 'OK' }
}

export const signup = async () => {
  console.log('Signup started ...')
  if(form.email.value.includes('vlad')) {
    return { error: 'Wrong email or password!'}
  }

  return { 'data': 'OK' }
}
