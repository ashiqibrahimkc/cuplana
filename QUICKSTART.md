# Quick Start Guide

## 1️⃣ Install Dependencies

```bash
npm install
```

Dependencies already added:
- ✅ `firebase` - Authentication & Firestore
- ✅ `cloudinary` - Image storage

## 2️⃣ Create Environment File

Copy the example file:
```bash
cp .env.example .env.local
```

## 3️⃣ Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (or use existing)
3. **Enable Authentication:**
   - Authentication → Sign-in method
   - Enable "Email/Password"
   
4. **Create Firestore Database:**
   - Firestore Database → Create Database
   - Start in test mode (we'll add rules later)

5. **Get Configuration:**
   - Project Settings → General → Your apps
   - Add a Web app if needed
   - Copy the config values to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc123
```

6. **Create Admin User:**
   - Authentication → Users → Add user
   - Email: your email address
   - Password: Create a secure password
   - **Save these credentials - you'll need them to login!**

## 4️⃣ Configure Cloudinary

1. Go to [Cloudinary](https://cloudinary.com/users/register_free)
2. Sign up or log in
3. Go to Dashboard
4. Copy credentials to `.env.local`:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

⚠️ **Important:** These are server-side only - NO `NEXT_PUBLIC_` prefix!

## 5️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000/login](http://localhost:3000/login)

## 6️⃣ Test the Integration

1. **Login**
   - Email: The admin email you created in Firebase
   - Password: The password you set

2. **Add Restaurant**
   - Fill in name and location
   - Upload an image
   - Click "Add Restaurant"
   - Check: Image uploads to Cloudinary, data saves to Firestore

3. **Verify**
   - Check Cloudinary dashboard for uploaded images
   - Check Firestore console for restaurant documents

## 🚀 Deploy to Vercel

1. **Push to GitHub** (if not already)
   ```bash
   git add .
   git commit -m "Add backend integration"
   git push
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your repository

3. **Add Environment Variables**
   - In Vercel: Settings → Environment Variables
   - Add ALL 9 variables from your `.env.local`
   - Make sure to select all environments (Production, Preview, Development)

4. **Deploy**
   - Vercel will auto-deploy
   - Or manually: `vercel --prod`

## ✅ Verification Checklist

Before going live:

- [ ] Firebase project created
- [ ] Email/Password auth enabled in Firebase
- [ ] Firestore database created
- [ ] Admin user created in Firebase Auth
- [ ] Cloudinary account created
- [ ] All 9 environment variables in `.env.local`
- [ ] `npm run dev` starts without errors
- [ ] Can login at `/login`
- [ ] Can add restaurant with image
- [ ] Can see restaurants in dashboard
- [ ] Can delete restaurants
- [ ] All env vars added to Vercel
- [ ] Production deployment successful

## 🔐 Security Notes

✅ **What's Safe:**
- Firebase client config with `NEXT_PUBLIC_` prefix
- Committing `.env.example`
- Sharing Firebase project ID

❌ **Never Commit:**
- `.env.local` file
- Cloudinary API secret
- Firebase service account keys
- Any actual credentials

## 📚 Next Steps

After setup:

1. **Set Firestore Security Rules:**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /restaurants/{restaurant} {
         allow read: if true;  // Public read
         allow write: if request.auth != null;  // Auth required
       }
     }
   }
   ```

2. **Update Stats in Dashboard:**
   - Currently shows static numbers (12, 24)
   - Can be replaced with actual counts from Firestore

3. **Add More Features:**
   - Edit restaurant functionality
   - Multiple admins
   - Restaurant categories
   - Image optimization

## 🆘 Common Issues

**Can't login:**
- Check admin user exists in Firebase Console
- Verify Firebase credentials in `.env.local`
- Check browser console for errors

**Image upload fails:**
- Verify Cloudinary credentials
- Check `.env.local` has NO spaces around `=`
- Ensure credentials are server-side (no NEXT_PUBLIC)

**Module not found errors:**
- Run `npm install`
- Check `/src/lib/` folder exists
- Restart dev server

**Vercel build fails:**
- Ensure all env vars are added in Vercel
- Check they're enabled for Production
- Rebuild deployment

## 📞 Support

- Firebase: [firebase.google.com/support](https://firebase.google.com/support)
- Cloudinary: [support.cloudinary.com](https://support.cloudinary.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Ready to start?** Run `npm run dev` and visit [http://localhost:3000/login](http://localhost:3000/login)
