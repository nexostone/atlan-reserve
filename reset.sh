#!/bin/bash

echo "🛑 Deteniendo procesos de Next.js..."
pkill -f "next dev" 2>/dev/null || true
sleep 2

echo ""
echo "🧹 Limpiando caché de Next.js..."
rm -rf .next
echo "✅ .next eliminado"

echo ""
echo "🧹 Limpiando caché de node_modules..."
rm -rf node_modules/.cache
echo "✅ node_modules/.cache eliminado"

echo ""
echo "📦 Instalando dependencias..."
npm install

echo ""
echo "✅ ¡Listo!"
echo ""
echo "▶️  Ahora ejecuta:"
echo "   npm run dev"
echo ""
echo "🌐 Luego visita:"
echo "   http://localhost:3000"
echo ""
