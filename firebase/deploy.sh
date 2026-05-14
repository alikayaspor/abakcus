#!/usr/bin/env bash
# Firebase deploy script
# Orijinal dosyalara dokunmaz, geçici swap yapar, deploy eder, geri yükler.
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FIREBASE_DIR="$ROOT/firebase"

# Hata veya çıkışta her zaman orijinal dosyaları geri yükle
cleanup() {
  echo "→ Orijinal dosyalar geri yükleniyor..."
  [ -f "$ROOT/next.config.ts.bak" ] && mv "$ROOT/next.config.ts.bak" "$ROOT/next.config.ts"
  [ -f "$ROOT/src/app/sitemap.ts.bak" ] && mv "$ROOT/src/app/sitemap.ts.bak" "$ROOT/src/app/sitemap.ts"
  [ -f "$ROOT/src/app/robots.ts.bak" ] && mv "$ROOT/src/app/robots.ts.bak" "$ROOT/src/app/robots.ts"
  rm -f "$ROOT/firebase.json" "$ROOT/.firebaserc"
  echo "✓ Orijinal dosyalar geri yüklendi."
}
trap cleanup EXIT

echo "→ Yedekler alınıyor..."
cp "$ROOT/next.config.ts" "$ROOT/next.config.ts.bak"
cp "$ROOT/src/app/sitemap.ts" "$ROOT/src/app/sitemap.ts.bak"
cp "$ROOT/src/app/robots.ts" "$ROOT/src/app/robots.ts.bak"

echo "→ Firebase konfigürasyonu uygulanıyor..."
cp "$FIREBASE_DIR/next.config.ts" "$ROOT/next.config.ts"
cp "$FIREBASE_DIR/firebase.json" "$ROOT/firebase.json"
cp "$FIREBASE_DIR/.firebaserc" "$ROOT/.firebaserc"

# sitemap.ts ve robots.ts'e static export direktifi ekle
sed -i '' 's/^export default function sitemap/export const dynamic = "force-static";\nexport default function sitemap/' "$ROOT/src/app/sitemap.ts"
sed -i '' 's/^export default function robots/export const dynamic = "force-static";\nexport default function robots/' "$ROOT/src/app/robots.ts"

echo "→ Build alınıyor..."
cd "$ROOT" && npm run build

echo "→ Firebase'e deploy ediliyor..."
cd "$ROOT" && firebase deploy --only hosting

echo "✓ Deploy tamamlandı."
