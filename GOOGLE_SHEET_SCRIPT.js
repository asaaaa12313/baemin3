function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);

        // Columns: Date, Company Name, Address, Name, Phone, Content
        // Matching the user's screenshot
        const timestamp = new Date().toLocaleString();

        sheet.appendRow([
            timestamp,
            data.businessName,
            data.address,
            data.applicantName,
            data.contact,
            data.inquiry
        ]);

        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
