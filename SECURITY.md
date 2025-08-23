# Security Guidelines - API Keys and Environment Variables

## 🔒 Important Security Practices

### Files Containing Sensitive Data
The following files contain real API keys and should NEVER be committed to git:

- `vercel-env-vars.txt` - Contains actual Stripe keys and price IDs
- `supabase-env-vars.txt` - Contains actual Supabase credentials  
- `.env.local` - Contains local development keys

### Template Files (Safe to Commit)
These template files use placeholder values and are safe to commit:

- `vercel-env-vars.template` - Template for Vercel environment variables
- `.env.template` - Template for local environment variables

### What's in .gitignore
The following patterns are ignored by git for security:

```
# Environment files with real keys
.env*.local
.env.vercel  
.env.production
vercel-env-vars.txt
supabase-env-vars.txt
```

### Best Practices

1. **Never commit real API keys** - Always use template files with placeholders
2. **Use environment variables** - Never hardcode keys in source code
3. **Rotate keys if exposed** - If keys are accidentally committed, rotate them immediately
4. **Separate dev/prod keys** - Use test keys for development, live keys for production
5. **Secure key storage** - Store production keys only in secure deployment environments

### Key Types by Environment

| Environment | Stripe Keys | Supabase Keys | Notes |
|-------------|-------------|---------------|-------|
| Development | Test keys (sk_test_...) | Local project | Safe to use broadly |
| Production | Live keys (sk_live_...) | Production project | Restrict access strictly |

### If Keys Are Compromised

1. **Immediately rotate** the exposed keys in Stripe/Supabase dashboards
2. **Update environment variables** in all deployment environments
3. **Review git history** to ensure no other keys were exposed
4. **Monitor usage** for any unauthorized activity

### Environment Variable Management

- **Local**: Use `.env.local` (ignored by git)
- **Vercel**: Set via dashboard or Vercel CLI
- **CI/CD**: Use secure environment variable storage
- **Team sharing**: Use secure password managers, never email/slack

## Quick Security Check

Run this command to verify no real keys are committed:

```bash
git log --all -S "sk_live_" --source --all
git log --all -S "sk_test_" --source --all
```

If any results show up, those commits contain API keys and should be addressed immediately.
