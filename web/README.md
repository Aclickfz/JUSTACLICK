# Just A Click (Next.js)

Modern rebuild of the Just A Click marketing site with Next.js, shadcn/ui, and MongoDB.

## Setup

```bash
cd web
npm install
cp .env.example .env.local
```

Update `.env.local`:

```env
MONGODB_URI=mongodb+srv://...
NEXTAUTH_SECRET=your-long-secret
NEXTAUTH_URL=http://localhost:3000
```

Seed catalog data:

```bash
npm run seed
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Product, portfolio, news, and career lists fall back to bundled seed data if MongoDB is not configured.
- Contact, newsletter, signup, and login require a real `MONGODB_URI`.
- Legacy HTML remains in the repo root as content reference.
