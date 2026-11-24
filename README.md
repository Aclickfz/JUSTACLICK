# Just A Click

Next.js rebuild of the Just A Click marketing site. The app lives at the repository root.

```bash
npm install
cp .env.example .env.local
# add MySQL, auth, and SMTP values from .env.example

# Create / update database schema
mysql -u root -p < sql/01_schema.sql
# If DB already existed before verification support:
# mysql -u root -p justaclick < sql/03_auth_verify_migration.sql

npm run seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Auth + contact (MySQL)

1. **Register** (`/signup`) → stores user in `users` (unverified) + `auth_tokens`
2. **Verify email** → link opens `/verify-email?token=…` → sets `email_verified = 1`
3. **Login** (`/login`) → NextAuth credentials; blocked until verified
4. **Contact** (`/api/contact`) → always inserts into `contact_leads` when MySQL is configured; also emails via SMTP when set

## Notes

- Product, portfolio, news, and career lists fall back to bundled seed data if MySQL is not configured.
- Contact, newsletter, signup, and login require the `MYSQL_*` values in `.env.local`.
- SQL schema and queries are in [`sql/`](sql/).
