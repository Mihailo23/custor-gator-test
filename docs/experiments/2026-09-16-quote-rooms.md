# Quote replica + Rooms

- **Pulled:** copy of `gator-frontend` `src/HomeQuoteForm.tsx` + `HomeQuoteForm.module.css` (Pitch letterhead, Address, Property, Year built, Floor area, Floor, Get quote).
- **Changed:** Rooms `TextField` (`id="rooms"`, label Rooms, default `"3"`, `type="number"`, min 1, max 20) visible for Apartment and House. Fake submit string unchanged. Floor still hidden for House.
- **Not on `gator-frontend`:** Rooms.
- **Run:** this UI is no longer on exploration `main`. To replay, pull `HomeQuoteForm` from `gator-frontend` onto an `experiment/` branch (Rooms will need to be re-applied).
- **Open questions:** whether Rooms belongs on the product quote card.
