# Number Sort Mini App

Number Sort, Vite + React ile geliştirilmiş bir bulmaca oyunudur ve Base Mini App olarak yayınlanacak şekilde hazırlandı.

## Lokal geliştirme

```bash
npm install
npm run dev
```

Uygulama: `http://localhost:5174`

## Base Mini App olarak yayınlama

Bu repo, [Base Mini App Quickstart](https://docs.base.org/mini-apps/quickstart/create-new-miniapp) ve [Migrate Existing App](https://docs.base.org/mini-apps/quickstart/migrate-existing-app) adımlarına göre hazırlandı.

1. Uygulamayı bir domain'e deploy et (Vercel/Netlify vb).
2. Bu dosyalardaki `https://YOUR_DOMAIN` placeholder'larını gerçek domain ile değiştir:
- `index.html`
- `public/.well-known/farcaster.json`
3. `public/.well-known/farcaster.json` içindeki alanları doldur:
- `accountAssociation.header`
- `accountAssociation.payload`
- `accountAssociation.signature`
- `baseBuilder.allowedAddresses[0]`
4. Gerekirse `miniapp.webhookUrl` alanını gerçek webhook endpoint'inle güncelle veya kullanmıyorsan kaldır.
5. Değişiklikleri deploy et.
6. URL'ni Base Builder üzerinde doğrula ve Mini App olarak yayınla.

## Bu repoda eklenen Mini App entegrasyonu

- `@farcaster/miniapp-sdk` bağımlılığı eklendi.
- `src/main.tsx` içinde `sdk.actions.ready()` çağrısı eklendi.
- `index.html` içine `fc:miniapp` embed metadata etiketi eklendi.
- `public/.well-known/farcaster.json` manifest dosyası eklendi.
- `public/miniapp-cover.svg` ve `public/miniapp-splash.svg` görselleri eklendi.

## Build

```bash
npm run build
```
