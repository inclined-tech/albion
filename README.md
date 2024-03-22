# Inclined Coding Session

Weclome to the Inclined Coding Session VSLAD (Very Simple Loan Admin Dashboard). The first step is to get VSLAD running locally and familiarize yourself with the code before your session. The demo app (and our regular codebase) runs on a pretty vanilla Typescript, NextJS, Tailwind, Node, GraphQL, Prisma, Postgres stack - but every stack has its choices and idiosyncrasies. If something isn't clear or if you have trouble setting up your environment, please reach out!

The current dashboard just displays a list of loans along with a few simple details for each loan. At the start of your coding session you'll be given a prompt to make modications to the code base, adding bits of functionality to the front and back end. During the session you'll be using your IDE of choice, working on your local environment, while screen sharing over Zoom. An engineer will guide you through that process and be available for any clarifications or to answer any questions during your session.

*Why Albion?*
Albion is the Roman Empire's name for Great Britain. Our main code repository is called Caledonia, which is the Roman Empire's name for Scotland. Why Caledonia? It's the main street in Sausalito where we have our small home office (just across the Golden Gate Bridge from SF).

### Getting started

You'll need some basics if you don't have them already. We use these versions of `node` and `postgres`, but the latest
versions will likely work as well:
- Install Brew: https://brew.sh
- Install Node: `brew install node@18`
- Install Postgres: `brew install postgres@14`
  - Start Postgres (there is more information on how to start it at the end of the output from install): `brew services start postgresql`
  - If you start Postgres this way, you can stop it when you are done with `brew services stop postgresql`. This will ensure it isn't always running on your machine.

### Install dependencies

- Install npm dependencies: `npm install` (this will also run code generation)

### Initialize your database

- Create your schema: `npm run migrate` (this will create an `albion` database and a single `loan` table)
- Populate your `loan` table with data: `npm run seed`

### Start the server

Run: `npm run dev`

### Go to the home page 

View your Very Simple Loan Admin Dashoard [home page](http://localhost:3000). You should see this:

![Very_Simple_Loan_Dashboard](https://user-images.githubusercontent.com/33855/133516456-84bc282e-8206-4848-9fce-497a941df4c7.png)

(NOTE: it's not yet reading from your database, these values are hard-coded)

### Navigating the code

Below is an overview of parts of the directory structure to help you navigate the code. There is some generated GraphQL code in `client/shared/types.ts` and the `/graphql/__generated__/` directory.

```
+-- /client
|     /shared
|       types.ts       Client-side generated GraphQL types 
|     /api             React hooks to call GraphQL      
|       get-loans.ts             
|       update-loan.ts
|
+-- /components        Shared UI components
||
+-- /graphql           Server-side GraphQL code
|     /__generated__     Genereted server types
|     resovlers.ts       Resolver implementations
|     typedefs.ts
|
+-- /pages             Standard NextJS structure
|     /api
|       graphql.ts
|     ...
|    
+-- /prisma            Standard Prisma structure
|     ...
|
+-- /scripts           Build helpers
|
+-- /styles
```
