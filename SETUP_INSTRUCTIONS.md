# Backend Integration Setup Guide

## Prerequisites
- Firebase project created at https://console.firebase.google.com
- Cloudinary account created at https://cloudinary.com

## Step 1: Install Dependencies

Run the following command to install all required packages:

```bash
npm install firebase cloudinary
```

## Step 2: Firebase Setup

1. Go to Firebase Console (https://console.firebase.google.com)
2. Create a new project or select existing
3. Enable **Email/Password** authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
4. Create Firestore database:
   - Go to Firestore Database
   - Create database in production or test mode
5. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll to "Your apps" and add a Web app
   - Copy the configuration values

## Step 3: Cloudinary Setup

1. Go to Cloudinary Console (https://cloudinary.com/console)
2. Get your credentials from the Dashboard:
   - Cloud Name
   - API Key
   - API Secret

## Step 4: Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# Firebase Configuration (Client-side - NEXT_PUBLIC prefix required)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration (Server-side only - NO NEXT_PUBLIC prefix)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Important**: Never commit `.env.local` to version control!

## Step 5: Create Admin User in Firebase

You need to create an admin user in Firebase Authentication:

### Option 1: Using Firebase Console
1. Go to Firebase Console > Authentication > Users
2. Click "Add user"
3. Enter email and password
4. Click "Add user"

### Option 2: Using Firebase CLI
```bash
# Install Firebase tools
npm install -g firebase-tools

# Login to Firebase
firebase login

# Use Firebase Auth REST API or create via console
```

## Step 6: Vercel Deployment

1. Add all environment variables in Vercel:
   - Go to Project Settings > Environment Variables
   - Add each variable from your `.env.local`
   - Make sure to add them for Production, Preview, and Development

2. Deploy:
```bash
vercel --prod
```

## Security Notes

✅ **Secure Practices:**
- All Cloudinary credentials are server-side only (no NEXT_PUBLIC prefix)
- Firebase client config can be public (it's safe with security rules)
- API routes handle sensitive operations server-side
- Firebase Authentication tokens are automatically managed

⚠️ **Important:**
- Set up Firebase Security Rules for Firestore
- Enable CORS on Cloudinary if needed
- Never expose API secrets in client code

## Firestore Security Rules (Recommended)

Update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read restaurants
    match /restaurants/{restaurant} {
      allow read: if true; // Public read for website
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

## Testing

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `/login`
3. Sign in with the admin user you created
4. Test adding a restaurant with image upload
5. Check Firestore and Cloudinary to verify data storage

## Troubleshooting

### Firebase Authentication Errors
- Verify environment variables are set correctly
- Check Firebase Authentication is enabled
- Ensure admin user exists in Firebase

### Cloudinary Upload Errors
- Verify API credentials are correct
- Check Cloudinary upload limits
- Ensure server-side API route is working

### CORS Issues
- Cloudinary credentials must be server-side only
- Check Vercel function logs for errors

## File Structure

```
/lib
  firebase.ts          - Firebase initialization
  cloudinary.ts        - Cloudinary upload helper

/src/app/api
  /upload/route.ts     - Image upload to Cloudinary
  /restaurants/route.ts - CRUD operations for restaurants

/src/app/(admin)
  /login/page.tsx      - Firebase Auth login
  /dashboard/page.tsx  - Admin dashboard with backend integration
```

## Support

For issues:
- Firebase: https://firebase.google.com/support
- Cloudinary: https://support.cloudinary.com
- Next.js: https://nextjs.org/docs
