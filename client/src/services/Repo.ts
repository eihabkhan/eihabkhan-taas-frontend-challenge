import client from '@lib/client'
import { getToken } from '@lib/token'

export const getRepos = async (page = 1) => {
  // const that = this
  return await client
    .get(`/getUserRepos?page=${page}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => res)
}

export const searchRepos = async (q = '', page = 1) => {
  // const that = this
  return await client
    .get(`/searchRepos?q=${q}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then((res) => res)
}

export const getRepoBranches = async (page = 1, owner = '', repo = '') => {
  // const that = this
  return await client
    .get(`/getBranches?owner=${owner}&repo=${repo}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then((res) => res)
}

export const getRepoCommits = async (
  page = 1,
  owner = '',
  repo = '',
  sha = ''
) => {
  return await client
    .get(`/getCommits?owner=${owner}&repo=${repo}&page=${page}&branch=${sha}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    .then((res) => res)
}
