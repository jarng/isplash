# ISplash

A very basic clone of [UnSplash](https://unsplash.com/). The project is built for the interview test at [DevSamurai](https://devsamurai.vn/). This is not a full-fledged app, but rather for educational purposes.

![image](https://github.com/nhthieu/isplash/assets/74890715/96ac0fe6-db2d-4b7f-aceb-5a4f754d94e8)

## Demo

No demo at the moment since my Vercel account is at 80% of the 1000 image optimization limit...

## Features

I only implemented very basic features of UnSplash:

- List of photos, grouped by topics
- Search photos by keywords

## Limitations

- The current UnSplash API limits the number of results to 30 per page.
- No responsive due to time limitation (school work) on my end
- Topics could have been broader

## Tech-stack

- Next
- SWR for data fetching (client side)

## Quick Start

You can run the app locally by following these steps:

1. Clone the repo
2. Install dependencies: `npm install`
3. Add your UnSplash API key to `.env.local` file, refer to `.env.example` for the format
4. Run `npm run dev` to start the server for development
5. Run `npm run build` then `npm start` to start the server for production

## License

The source code of the project is licensed under the MIT License, refer to the [LICENSE](/LICENSE) for more details. All credits belong to the [DevSamurai team](https://devsamurai.vn/).
