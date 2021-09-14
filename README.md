# Inclined Coding Challenge

### Getting started

### Install Brew

- https://brew.sh

### Set up your environment

- Create `.env.local` file and add the `DATABASE_URL` value (should be provided separately)

### Install dependencies

- Install node: `brew install node`
- Install global packages: `npm run install-global-packages`
- Install npm dependencies: `npm install`

### Initialize your database

- Create your schema: `npm run migrate` 
- Seed your table: `npm run seed`

### Start the server

Run: `npm run dev`

### Go to the home page

[Home page](http://localhost:3000)

### Directory structure 

This simple Loan Dashboard app uses a vanilla NextJS, GQL, and Prisma set-up. Here's an overview of the directory structure to help you navigate the code. There is some generated code (in `__generated__` directories) for both the client and server. The page and API structure is standard [NextJS](https://nextjs.org/docs/getting-started).


```
+-- /__generated__    Client-side generated GQL types 
|
+-- /components       Shared UI components
|
+-- /gql-api          Client-side generated resolver and mutator signatures
|     /__generated__
|       GetLoans.ts
|       UpdateLoanMutation.ts
|     get-loans.ts
|     update-loans.ts
|
+-- /graphql          Server-side generated GQL code
|     /__generated__
|       resolver-types.ts
|     resovlers.ts
|     typedefs.ts
|
+-- /lib
|     prisma.ts
|     url.ts
|
+-- /pages            Standard NextJS structure
|     /api
|       graphql.ts
|     ...
|    
+-- /prisma           Standard Prisma structure
|     ...
|  
+-- /scripts
|
+-- /styles
|
+-- /tailwind
```
