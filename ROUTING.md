# Cuplana - Routing Structure

## Overview
This project uses Next.js App Router with **Route Groups** to organize routes without affecting URLs.

## Route Groups Explained

### What are Route Groups?
- Folders wrapped in parentheses like `(users)` and `(admin)` are route groups
- They organize your code without adding segments to the URL path
- Perfect for separating different sections of your app

## URL Structure

### Public Routes (Users Section)
All public-facing pages are in the `(users)` folder:

- `/` → Homepage (from `(users)/page.tsx`)
- `/about` → About page (from `(users)/about/page.tsx`)
- `/services` → Services page (from `(users)/services/page.tsx`)
- `/contact` → Contact page (from `(users)/contact/page.tsx`)

**Features:**
- ✅ Navbar included
- ✅ Footer included
- ✅ ScrollReveal animations

### Admin Routes (Admin Section)
All administrative pages are in the `(admin)` folder:

- `/login` → Admin login (from `(admin)/login/page.tsx`)
- `/dashboard` → Admin dashboard (from `(admin)/dashboard/page.tsx`)

**Features:**
- ❌ No Navbar
- ❌ No Footer
- ✅ Protected routes (requires authentication)
- ✅ Restaurant management interface

## Layouts

### Root Layout (`app/layout.tsx`)
- Provides HTML structure
- Loads global styles and fonts
- No Navbar/Footer (delegated to route groups)

### Users Layout (`app/(users)/layout.tsx`)
- Wraps all user-facing pages
- Includes Navbar, Footer, and ScrollReveal

### Admin Layout (`app/(admin)/layout.tsx`)
- Wraps all admin pages
- Clean layout without navigation components

## Authentication

The admin section uses simple localStorage authentication:

⚠️ **Note:** This is for development only. For production, implement proper authentication (NextAuth.js, Auth0, etc.)

## File Structure

```
src/app/
├── layout.tsx                    # Root layout
├── globals.css                   # Global styles
├── (users)/                      # Public routes group
│   ├── layout.tsx               # Users layout (with Navbar/Footer)
│   ├── page.tsx                 # Homepage (/)
│   ├── about/
│   │   └── page.tsx            # About page (/about)
│   ├── services/
│   │   └── page.tsx            # Services page (/services)
│   └── contact/
│       └── page.tsx            # Contact page (/contact)
└── (admin)/                      # Admin routes group
    ├── layout.tsx               # Admin layout (clean, no nav)
    ├── page.tsx                 # Redirects to /login
    ├── login/
    │   └── page.tsx            # Login page (/login)
    └── dashboard/
        └── page.tsx            # Dashboard page (/dashboard)
```

## Benefits of This Structure

1. **Clean URLs**: No `/users` or `/admin` in the URL paths
2. **Organized Code**: Logical separation between public and admin sections
3. **Different Layouts**: Each section can have its own layout and navigation
4. **Easy Maintenance**: Clear structure makes it easy to add new pages
5. **Scalable**: Can easily add more route groups (e.g., `(blog)`, `(shop)`)

## Adding New Pages

### Add a Public Page:
Create the file in the `(users)` folder:
```typescript
// src/app/(users)/new-page/page.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```
Accessible at: `/new-page`

### Add an Admin Page:
Create the file in the `(admin)` folder:
```typescript
// src/app/(admin)/new-admin/page.tsx
export default function NewAdminPage() {
  return <div>New Admin Page</div>;
}
```
Accessible at: `/new-admin`

## Development

Run the development server:
```bash
npm run dev
```

Visit:
- Public site: http://localhost:3000
- Admin login: http://localhost:3000/login
- Admin dashboard: http://localhost:3000/dashboard
