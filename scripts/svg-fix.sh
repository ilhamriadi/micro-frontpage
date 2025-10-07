#!/bin/sh
echo "🧼 Membersihkan semua file SVG..."

find public/images -type f -name "*.png" | while read -r file; do
  sed -i '1s/^[^<]*//' "$file"
  iconv -f UTF-8 -t UTF-8 "$file" -o "$file.tmp" && mv "$file.tmp" "$file"
done

echo "✅ Semua file SVG sudah dibersihkan!"
