
# PDF.js Worker Setup Instructions

To ensure the PDF processing functionality works correctly, you need to set up the PDF.js worker file:

## Option 1: Manual Download (Recommended)

1. Download the PDF.js worker file from this URL: 
   https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js

2. Save the file as `pdf.worker.min.js` in the `public` folder of your project.

3. Restart the development server to apply changes.

## Option 2: Using the Helper Page

1. Start your development server
2. Navigate to `/download-pdf-worker.html` in your browser
3. Follow the instructions on the page to download and place the worker file

## Troubleshooting

If you encounter issues with PDF processing:
- Ensure the worker file is correctly placed in the public folder
- Check the browser console for any specific errors
- Make sure the filename matches exactly: `pdf.worker.min.js`
