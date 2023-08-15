export type Repo = {
  id: string
  name: string
  stargazers_count: number
  watchers_count: number
  updated_at: Date
}

export type Commit = {
  commit: {
    message: string
    author: {
      date: Date
    }
  }
  sha: string
}

export type Branch = {
  name: string
  commit: {
    sha: string
  }
}
