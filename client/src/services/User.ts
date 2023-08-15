import client from '@lib/client'

export const getUserData = async () => {
  // const that = this
  return await client
    .get(`/getUserData`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then((res) => res)
}
