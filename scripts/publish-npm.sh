#!/bin/bash

# Build and publish Morphik SDK to npm

set -e  # Exit on error

echo "🔨 Building SDK..."
yarn build

if [ ! -d "dist" ]; then
  echo "❌ Build failed: dist directory not found"
  exit 1
fi

echo "📦 Publishing to npm..."
cd dist

# Check if logged in to npm
if ! npm whoami &> /dev/null; then
  echo "❌ Not logged in to npm. Please run 'npm login' first."
  exit 1
fi

# Publish with public access
npm publish --access public

echo "✅ Successfully published morphik to npm!"
echo "📝 Install with: npm install morphik"