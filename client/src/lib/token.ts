// TODO: Use cookies instead of localstorage

export const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const setToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const removeToken = () => {
  localStorage.removeItem('accessToken')
}
