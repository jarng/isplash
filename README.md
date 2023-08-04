# ISplash

A simple clone of [Unplash](https://unsplash.com/). The project is for the interview test at [DevSamurai](https://devsamurai.vn/). This is not a full-fledged app, but rather a demo of my coding style and skills, and of course, for educational purposes.

## Demo

You can view the demo [here](https://devsamurai-test.vercel.app/).

## Features

Basic features of UnSplash:

- List of photos, grouped by topics
- Search photos by keywords

## Limitations

The current UnSplash API limits the number of results to 30 per page.

## Tech-stack

- Nextjs
- SWR for data fetching (client side)

## Quick-start

For development purposes, you can run the app locally by following these steps:

1. Clone the repo
2. Install dependencies: `npm install`
3. Add your UnSplash API key to `.env.local` file, refer to `.env.example` for the format
4. Run `npm run dev` to start the server
