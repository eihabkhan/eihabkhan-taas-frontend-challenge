# Commitly

An app to browse your repos and see their commits

## Getting Started 🚀

### Setting up the proxy server

We need to setup the proxy server that will be communicating with GitHub, to do that:

1- In the root folder that you just cloned, run **`npm install`** or **`yarn`**. This will install the dependencies for the proxy server.

2- In the root folder, add a **`.env`** file for proxy server. and add the following content:

```env
PORT=3333
CLIENT_ID=<fill these with your code>
CLIENT_SECRET=<fill these with your code>
```

### Setting up the client app

1- If you are still in the root directory, make sure to **`cd`** into the client folder

2- Add a **`.env`** file, and add the following content:

```env
VITE_API_URL=http://localhost:3333
VITE_GITHUB_BASE_URL=https://github.com
VITE_CLIENT_ID=<same client id used in the server>
VITE_CLIENT_SECRET=<you obtain this from GitHub>
```

### Running the app

From the root folder run the command **`yarn start`** or **`npm run start`** this will run both the server and the client for you.

---

## The Process 🔄

### Design

The design was very quick, I spend probably 2-3 hours designing the three interfaces

You can view the Figma design file [HERE](https://www.figma.com/file/09WnHXqHYGwwudNWfa2QZh/Commitly?type=design&node-id=1%3A5&mode=design&t=ESqPptU2sXbH91jv-1)

### Code

I had 6 days to work on this challenge. Since my knowledge on Vue was very limited (It still is!) I wanted to spend as much time as possible reading the docs, so I spent the first 3 days just reading the docs and watching course videos.

## Tools Used

- **Design:** Figma

- **Front End:** Vue (Options API) + Vite + TypeScript + Tailwind

- **Back End** GitHub REST API + Express

### Why Options API?

I didn't want to jump directly to using the Composition API, I wanted to understand the Options API first, and given the tight timeframe I thought it would be best to not risk having an unfinished app so I moved on with the Options API.

## Areas of Improvement 🍄

There are a lot of opportunities to improve the current app, here are what I think I can improve on:

- Use Composition API for better Type Safety 🛟
- Use cookies instead of localStorage 😱
- Utilize SSR to reduce the client JS size and have pages pre-rendered on the server, which makes for faster page loads 🚄

## Have an issue running the app?

If you have an issue with running the app then feel free to reach out: [eihabkhan1@gmail.com](https://mailto:eihabkhan1@gmail.com)
