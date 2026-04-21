# Sala Bankietowa LuTa

Strona internetowa Sali Bankietowej LuTa w Lubinie.

## Deployment via GitHub Actions

This project is configured to be deployed to **GitHub Pages** automatically upon pushing to the `main` branch.

### Prerequisites

1.  Push this code to a GitHub repository.
2.  Go to **Settings > Pages** in your repository.
3.  Under **Build and deployment > Source**, select **GitHub Actions**.

### Configuration

If you are deploying to a sub-path (e.g., `https://username.github.io/sala-luta/`), you must update `vite.config.ts` to include the `base` property:

```typescript
export default defineConfig({
  base: '/sala-luta/', // Replace with your repository name
  // ... other config
})
```

### Local Development

```bash
npm install
npm run dev
```
