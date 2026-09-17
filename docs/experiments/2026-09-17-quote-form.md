# Quote form + Rooms

- **Pulled:** `Mihailo23/gator-frontend` `main` @ `098097d` (`src/HomeQuoteForm.tsx`, `HomeQuoteForm.module.css`, `HomeQuoteForm.test.tsx`) into `src/playground/` — Pitch letterhead, Address, Property, Year built, Floor area, Floor, Get quote.
- **Changed:** Rooms `TextField` (`id="rooms"`, label Rooms, default `"3"`, `type="number"`, min 1, max 20). Full-width between Floor area and Floor so it does not jump when switching property type. Visible for Apartment and House. Fake submit string unchanged (address + year only). Floor still hidden for House.
- **Why:** try Rooms as a quote input on the product card without touching `gator-frontend`.
- **Not on `gator-frontend`:** Rooms.
- **Run:** `experiment/quote-form` — `vp dev`. Do not merge the playground UI to `main`.
- **Open questions:**
  - Does Rooms belong on the product quote card?
  - Should the fake submit note include room count?
  - Pair Rooms with Floor instead of full-width?
