function doGet(e) {
  var params = e.parameter;
  var sheetUrl = params.sheetUrl;
  var sheetTag = params.sheetTag;
  var row = params.row;
  var col = params.col;
  var endRow = params.endRow;
  var endCol = params.endCol;
  var rowRange = endRow - row + 1; //因為自己也要包含所以 + 1
  var colRange = endCol - col + 1;

  var SpreadSheet = SpreadsheetApp.openByUrl(sheetUrl);
  var Sheet = SpreadSheet.getSheetByName(sheetTag);

  var lastRow = Sheet.getLastRow();
  var lastCol = Sheet.getLastColumn();

  if(rowRange>lastRow){
    rowRange = lastRow;
  }

  if(colRange>lastCol){
    colRange = lastCol;
  }

  var data = Sheet.getSheetValues(row, col, rowRange,colRange);

  return ContentService.createTextOutput(data);
}