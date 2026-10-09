# ShelfLife: Architecture

This describes the shape of the app. Update it when the structure changes.
Product behavior lives in docs/PRD.md, not here.

## Layers
1. Pages (what the user sees): routes, components, forms. Pages never
   talk to the database directly.
2. Logic (the rules): validation, username rules, yearly stats, ownership
   checks. Plain functions with no database or UI code, so they can be
   tested on their own.
3. Data layer (the only code that touches the database): reads and writes
   for users and books. Every book query takes the signed-in user's id.

Flow: page -> logic (validate, check permission) -> data layer -> database.

## Data model

### User
- id (unique, internal)
- provider (google or github) and the provider's own user id
  (the pair must be unique: one account per provider identity)
- username (unique ignoring case; empty until the user picks one)
- created date
- Display name and avatar from the provider are optional extras.

### Book
- id (unique, internal)
- owner (the User it belongs to, required)
- title (required)
- author (required)
- date finished (calendar date only, no time of day)
- format (Paper, Ebook, or Audiobook)
- rating (whole number 1 to 5)
- note (optional text)
- created and updated timestamps

A user owns many books. A book has exactly one owner.

## Routes (pages)
- Sign-in page (public)
- Choose-username page (signed in, no username yet)
- Book list (home)
- Add book
- Edit book
- Stats page
All routes except sign-in require a signed-in user with a username.

## Access control
- One central check decides "is there a signed-in user, and do they have a
  username?" and redirects accordingly. Pages do not each reinvent it.
- Ownership is enforced in the data layer: book lookups always include the
  owner, so another user's book simply is not found.

## Key decisions
- Social sign-in only, through an established auth library. No passwords.
- Sessions are managed by the auth library, never hand-rolled.
- SQLite file database for simplicity; swapping later should only touch
  the data layer.
- Finished date is stored as a date only, to avoid timezone bugs in
  yearly and monthly stats.
- Username uniqueness is enforced by the database as well as by logic,
  so two simultaneous sign-ups cannot both win.
- Secrets come from environment variables. A .env.example documents the
  names with fake values.

## Planned next (do not build, do not block)
- Analytics page reading from the same Book data.
- Account linking between providers.
- Optional start date and genre fields on Book.

## Testing and Database Isolation (Task 4 setup requirements)
- Throwaway test database: must use an isolated SQLite test database file (never the development or production database).
- URL safety check: database setup scripts must abort with an error unless the database URL clearly points at a test file.
- Migration safety: must not use `--accept-data-loss`.
- Prisma 7 configuration: Prisma 7 specifies datasource URLs in `prisma.config.ts` rather than `schema.prisma`; test setup must account for how Prisma 7 and Prisma Client resolve this URL.
- Serial execution: tests accessing the database must run serially (`--runInBand`) to prevent SQLite file lock conflicts and state collisions.

