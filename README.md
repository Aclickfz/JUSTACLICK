# Just A Click

Next.js rebuild of the Just A Click marketing site.

## App location

All source lives in [`web/`](web/).

```bash
cd web
npm install
cp .env.example .env.local
# add your MongoDB Atlas URI and secrets
npm run seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See [`web/README.md`](web/README.md) for env vars and setup details.
