# ShelfLife: Decisions

One line per lasting decision: what we chose and why. Newest at the bottom.

- Social sign-in only (Google, GitHub): avoids storing passwords.
- Providers create separate accounts in v1: safe linking is complex.
- Usernames are fixed once chosen: avoids link and impersonation issues.
- Format is a fixed list (Paper, Ebook, Audiobook): keeps analytics clean.
- Finished date is date-only: avoids timezone bugs in yearly stats.
- Authentication library: NextAuth.js (Auth.js) chosen for built-in Next.js integration.
- Database tooling: Prisma chosen for schema management and type-safe querying.
- Package manager: NPM chosen for dependency management.
- Reserved usernames list defined (admin, settings, login, etc.) to prevent route collisions and impersonation.
-Prisma pinned to stable 7.x; avoid release candidates
- Test runner: Jest with next/jest for native SWC TypeScript transpilation and path alias resolution.
- NEXTAUTH_* environment variable names are explicitly chosen for NextAuth v4 (names change in Auth.js v5).
