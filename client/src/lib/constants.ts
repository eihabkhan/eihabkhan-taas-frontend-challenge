export const GITHUB_BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL

export const API_BASE_URL = import.meta.env.VITE_API_URL

const GITHUB_AUTHORIZATION_URL = `${GITHUB_BASE_URL}/login/oauth/authorize`
export const GITHUB_CLIENT_ID = `client_id=${import.meta.env.VITE_CLIENT_ID}`
export const GITHUB_AUTH_URL = `${GITHUB_AUTHORIZATION_URL}?${GITHUB_CLIENT_ID}`
