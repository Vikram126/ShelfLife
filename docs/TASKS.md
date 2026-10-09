# ShelfLife: v1 Plan

Work one task at a time, top to bottom. Each task ends with something
that can be checked, and a commit.

## Foundation
- [x] 1. Scaffold the project. Done when: the dev server runs and shows
      a blank home page. Fill the real commands and layout into AGENTS.md.
- [x] 2. Set up testing, linting, and type checking. Done when: one
      trivial test passes, and all three commands run cleanly.
- [ ] 3. Add .gitignore rules and .env.example. Done when: a real .env
      file is ignored by Git and the example file lists variable names
      with fake values.

## Database and accounts
- [ ] 4. Database setup and the User table, with data layer functions
      and tests. Done when: tests can create and find users.
- [ ] 5. Username rules as pure logic: length, characters, reserved
      words, case-insensitive uniqueness. Done when: tests cover every
      rule in the PRD.
- [ ] 6. Google sign-in and sign-out. (Needs credentials from me first.)
      Done when: I can sign in with Google, a user record is created,
      and sign-out ends the session.
- [ ] 7. GitHub sign-in. (Needs credentials from me first.) Done when:
      GitHub works the same way, creating a separate account.
- [ ] 8. Choose-username page and the central access check. Done when:
      signed-out visitors go to sign-in, signed-in users without a
      username can only reach username setup, and a taken username shows
      a clear message.

## Books
- [ ] 9. Book table and data layer, always scoped to the owner, with
      tests. Done when: a test proves user B cannot read, edit, or delete
      user A's book.
- [ ] 10. Book validation as pure logic: required fields, format list,
      rating range, date. Done when: tests cover every rule.
- [ ] 11. Book list page with empty state. Done when: my books show
      newest finished first, and a new user sees the empty state.
- [ ] 12. Add-book form with field-level error messages. Done when: a
      valid book appears on the list and invalid input is rejected with
      clear messages.
- [ ] 13. Edit and delete. Done when: both work for my books and fail
      for anyone else's.

## Stats
- [ ] 14. Books-per-year logic with tests, including a book finished
      on Dec 31 counting for that year. Done when: tests pass.
- [ ] 15. Stats page with empty state. Done when: I see my own counts.

## Finish
- [ ] 16. Mobile layout pass on every page. Done when: all pages are
      usable at phone width.
- [ ] 17. Final check against the PRD's definition of done, including a
      two-account test. Done when: every checklist item is verified.
