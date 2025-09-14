// Google Apps Script code to save form data to Google Sheets
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    // Get the active spreadsheet (create one first and get its ID)
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      new Date(data.timestamp),
      data.name,
      data.field,
      data.location,
      data.interests,
      data.bio,
      data.contact
    ];
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = ['Timestamp', 'Name', 'Field', 'Location', 'Interests', 'Bio', 'Contact'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Append the data
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Physics Community Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}