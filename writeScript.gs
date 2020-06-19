function doGet(e) {
  var params = e.parameter;
  var data = params.data;
  var sheetUrl = params.sheetUrl;
  var sheetTag = params.sheetTag;
  var SpreadSheet = SpreadsheetApp.openByUrl(sheetUrl);
  var Sheet = SpreadSheet.getSheetByName(sheetTag);

  //var LastRow = Sheet.getLastRow();  //資料上舊下新

  Sheet.insertRowBefore(1);        //資料上新下舊


  //寫入資料
  data = data.split(',');
  data.forEach(function(e,i){
    //Sheet.getRange(LastRow+1, i+1).setValue(e);  //(開啟資料上舊下新模式)
    Sheet.getRange(1, i+1).setValue(e);        //(開啟資料上新下舊模式)
  });
  return ContentService.createTextOutput(1);  //接收成功以後回傳"1"(類似Tingspeak)
}