# Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account with the repository pushed
- Vercel account (sign up at https://vercel.com)

### Steps:

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New Project"

2. **Import Repository**
   - Select "Import Git Repository"
   - Choose `game-in-my-style-updated` from your GitHub repos
   - Click "Import"

3. **Configure Project**
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables**
   Add the following environment variable:
   - `VITE_API_URL` = Your Render backend URL (e.g., https://your-app.onrender.com)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your frontend will be live at `https://your-app.vercel.app`

### After First Deployment
- Update the backend's `FRONTEND_URL` environment variable on Render with your Vercel URL

---

## Backend Deployment (Render)

### Prerequisites
- GitHub account with the repository pushed
- Render account (sign up at https://render.com)
- MongoDB Atlas account for database (https://www.mongodb.com/cloud/atlas)

### Steps:

1. **Setup MongoDB Atlas** (if not already done)
   - Create a free cluster at https://www.mongodb.com/cloud/atlas
   - Create a database user
   - Whitelist all IPs (0.0.0.0/0) for Render access
   - Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)

2. **Go to Render Dashboard**
   - Visit https://dashboard.render.com
   - Click "New +" → "Web Service"

3. **Connect Repository**
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account
   - Select `game-in-my-style-updated` repository

4. **Configure Service**
   - Name: `game-in-my-style-backend`
   - Region: Choose closest to your users
   - Branch: `main`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free (or paid for better performance)

5. **Environment Variables**
   Add these environment variables in Render dashboard:
   
   ```
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_random_string_here
   GROQ_API_KEY=your_groq_api_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   FRONTEND_URL=https://your-app.vercel.app
   ```

   **Important Notes:**
   - Generate a strong JWT_SECRET (use: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
   - For EMAIL_PASS, use Gmail App Password (not your regular password)
   - FRONTEND_URL will be your Vercel URL (update after frontend deployment)

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your backend will be live at `https://your-app.onrender.com`

7. **Update Frontend**
   - Go back to Vercel
   - Add/Update environment variable: `VITE_API_URL` = Your Render backend URL
   - Redeploy frontend

---

## Post-Deployment Checklist

- [ ] Backend is running on Render
- [ ] Frontend is running on Vercel
- [ ] MongoDB connection is working
- [ ] CORS is configured correctly (backend allows frontend URL)
- [ ] Environment variables are set on both platforms
- [ ] Test user registration and login
- [ ] Test level progression and code validation
- [ ] Test profile updates

---

## Troubleshooting

### Frontend Issues
- Check Vercel deployment logs
- Verify `VITE_API_URL` is set correctly
- Ensure API calls use the environment variable

### Backend Issues
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Ensure all environment variables are set
- Check CORS configuration allows your Vercel domain

### CORS Errors
- Update backend CORS configuration to include your Vercel URL
- Restart backend service on Render

---

## Updating Your App

### Frontend Updates
- Push changes to GitHub
- Vercel will auto-deploy from main branch

### Backend Updates
- Push changes to GitHub
- Render will auto-deploy from main branch

---

## Free Tier Limitations

### Vercel Free Tier
- 100 GB bandwidth per month
- Unlimited deployments
- Automatic HTTPS

### Render Free Tier
- Service spins down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- 750 hours per month
- Consider upgrading for production use

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
