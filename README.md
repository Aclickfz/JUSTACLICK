# Just A Click

Next.js rebuild of the Just A Click marketing site. The app lives at the repository root.

```bash
npm install
cp .env.example .env.local
# add MySQL, auth, and SMTP values from .env.example
npm run seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Product, portfolio, news, and career lists fall back to bundled seed data if MySQL is not configured.
- Contact, newsletter, signup, and login require the `MYSQL_*` values in `.env.local`.
- SQL schema and queries are in [`sql/`](sql/).
