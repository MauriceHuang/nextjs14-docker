This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## initiating drizzle DB
```zsh
npx drizzle-kit push:pg
```
it should return the following:
```zsh
drizzle-kit: v0.20.6
drizzle-orm: v0.29.1

No config path provided, using default path
Reading config file '/Users/{your directory}/drizzle.config.ts'
[i] No changes detected
```
```zsh
npx drizzle-kit studio                                                                                                                       ─╯
drizzle-kit: v0.20.6
drizzle-orm: v0.29.1

No config path provided, using default path
Reading config file '/Users/{your directory}/drizzle.config.ts'

[Warning] Drizzle Studio is currently in Beta. If you find anything that is not working as expected or should be improved, feel free to create an issue on GitHub: https://github.com/drizzle-team/drizzle-kit-mirror/issues/new or write to us on Discord: https://discord.gg/WcRKz2FFxN

Drizzle Studio is up and running on https://local.drizzle.studio
```

## initiating DB in terminal

```zsh
psql postgres
```

```psql
psql (14.10 (Homebrew))
Type "help" for help.

postgres=# \dt
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | todos | table | postgres
(1 row)
```
