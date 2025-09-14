# Google Sheets Integration Setup

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Physics Community Members"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Setup Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project (name it "Physics Community Handler")

## Step 3: Deploy as Web App
1. In Apps Script, click "Deploy" → "New Deployment"
2. Choose "Web app" as the type
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 4: Update React Code
1. In `Community.js`, replace `YOUR_SCRIPT_ID` with your Web App URL
2. The URL should look like: `https://script.google.com/macros/s/SCRIPT_ID/exec`

## Step 5: Test
1. Submit the form on your website
2. Check your Google Sheet - data should appear automatically!

## Sheet Structure
The Google Sheet will have these columns:
- Timestamp
- Name  
- Field
- Location
- Interests
- Bio
- Contact

## Troubleshooting
- Make sure the Google Sheet is accessible
- Verify the Apps Script has proper permissions
- Check browser console for any errors
- Test the Apps Script URL directly in browser