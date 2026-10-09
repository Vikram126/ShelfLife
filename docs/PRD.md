# ShelfLife: Product Requirements

## Problem
I forget which books I've read and what I thought of them.
I want one simple place to log them and look back.

## Users
Anyone with a Google or GitHub account. Each user has a unique
username and a private library. Users never see each other's books.

## Must-have features
1. Sign in with Google or GitHub, and sign out
2. Choose a unique username on first sign-in
3. Add a book: title, author, date finished, format, rating (1-5),
   short note
4. View my books on a list page, newest finished first
5. Edit and delete my own books
6. Stats page showing my books finished per year

## Behavior details

### Authentication and accounts
- All pages except the sign-in page require being signed in.
  Signed-out visitors are redirected to the sign-in page.
- First sign-in creates the account, then sends the user to a
  "choose your username" page. No other page is reachable until
  a username is chosen.
- Usernames: 3-20 characters, letters, numbers, and underscores only.
- Usernames are unique, ignoring upper/lower case. If taken, show
  a clear message and let the user try again.
- Some usernames are reserved and cannot be chosen (admin, settings,
  login, api, and similar).
- Usernames cannot be changed in v1.
- Signing in with Google and with GitHub creates separate accounts
  in v1, even with the same email. Account linking is future work.
- If sign-in fails or is cancelled, show a clear message and a
  way to try again.

### Books
- A user can only read, edit, or delete their own books, enforced
  on the server, not just hidden in the interface.
- Title and author are required. Note is optional.
- Format is required and must be one of: Paper, Ebook, Audiobook.
  The server rejects any other value.
- Rating must be a whole number from 1 to 5.
- Date finished is a calendar date only (no time of day).
- If a user has no books yet, show a friendly empty state with a
  link to add one.
- Invalid form input shows a clear message next to the field.

## Security requirements
- No passwords are stored by the app.
- Secrets (provider keys, session secret) live in environment
  variables and are never committed to Git.
- Sessions expire and sign-out fully ends the session.

## Planned next (not v1, but don't design against it)
- Analytics page (personal data only): books per month and year,
  average rating, rating distribution, format breakdown, average
  rating by format, top authors, and reading streaks. Charts with
  too little data show a friendly "not enough data yet" message.
- Account linking between Google and GitHub sign-ins.
- Possible extra book fields to support analytics (start date, genre).

## Out of scope (v1)
Email/password login, password reset, other social providers,
changing usernames, sharing or public profiles, recommendations,
importing from other sites, a mobile app, cover images, page count,
admin tools.

## Definition of done for v1
- All six must-have features work.
- A signed-out visitor cannot reach any private page.
- A signed-in user with no username is always sent to username setup.
- A second test account cannot see or change the first account's books.
- Two users cannot hold the same username, including different casing.
- Data is still there after restarting the app.
- Every page is usable on a phone-sized screen.
- Core logic (validation, username rules, yearly stats, ownership
  checks) is covered by tests.
