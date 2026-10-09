# ShelfLife

A multi-user reading tracker website. Users sign in with Google or GitHub,
pick a unique username, and log the books they've read. Each user's library
is private. Full requirements: docs/PRD.md. Read it before starting any task.

## Stack
- Next.js with TypeScript
- SQLite for the database (single local file)
- Tailwind CSS for styling, no UI component library
- Social sign-in only (Google, GitHub). No passwords are stored.
- (Exact versions and the auth library: to be filled in after scaffolding)

## Commands
- Start dev server: TODO (fill in after task 1)
- Run tests: TODO
- Lint/format: TODO
- Type check: TODO
Always run tests, lint, and type check before saying a task is done.

## Project layout
- Pages and routes: the app folder
- Business logic (validation, stats, username rules): a logic folder,
  with no database or UI code inside it
- Database access: a data-layer folder only
- Tests: next to the logic they cover, or in a tests folder
(Update this section after scaffolding so it matches reality.)

## Hard rules: security and privacy
- Every database query for books MUST be scoped to the signed-in user.
  Never fetch a book by id alone.
- Ownership and permission checks happen on the server. Hiding a button
  is not security.
- Never commit secrets. Provider keys and the session secret live in
  environment variables. Keep .env files in .gitignore, and provide a
  .env.example with fake placeholder values only.
- Never store passwords. Never log tokens, secrets, or session data.
- All input is validated on the server, even if the form validates too.
- Use the established auth library's session handling. Never write
  custom cryptography or hand-rolled sessions.

## Hard rules: accounts
- A signed-in user without a username can reach nothing except the
  username setup page.
- Usernames: 3-20 characters, letters, numbers, underscores. Unique
  case-insensitively. Reserved words are blocked. Fixed once chosen.
- Google and GitHub sign-ins are separate accounts in v1. Do not build
  account linking.

## Hard rules: data
- Book format is one of Paper, Ebook, Audiobook. Enforce on the server.
- Date finished is a calendar date only, with no time of day and no
  timezone conversion.
- Rating is a whole number from 1 to 5.

## Conventions
- One component per file, PascalCase names.
- Keep functions short. Prefer clear names over comments.
- Every screen handles four states: normal, empty, error, loading.
- Mobile first. Every page must work at phone width.
- Use plain, minimal styling: generous whitespace, one accent color.

## Working rules
- Work on one task from docs/TASKS.md at a time. Do not start the next.
- In Planning mode, propose your approach and wait for approval before
  editing files.
- Ask before adding any new dependency, and say why it's needed.
- Do not build anything listed as out of scope or "planned next" in the
  PRD. Do not design against it either.
- Do not refactor unrelated code.
- Every bug fix gets a test that fails before the fix and passes after.
- When finished, report: what changed file by file, anything you're
  unsure about, any shortcut you took, and how I can verify it myself.
- When a task is done, mark it complete in docs/TASKS.md and add any
  lasting decision as one line in docs/DECISIONS.md.

## Where to look
- Product scope and behavior: docs/PRD.md
- Structure and data model: docs/ARCHITECTURE.md
- Current plan: docs/TASKS.md
- Past decisions: docs/DECISIONS.md
