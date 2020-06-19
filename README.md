# Interactive Slides @ 20200622, NUK, A108060202(Class)

```
此空間為2020.06.22相關互動報告之後端原始碼
```

## 使用平台

[Google Spreadsheets](https://docs.google.com/spreadsheets/) (作為資料庫)

[Google Slides](https://docs.google.com/presentation/)(簡報本體)

[Google Apps Script](https://script.google.com/)(後端控制)

[Google Sites](https://sites.google.com/)(主網頁平台)

[Webduino](http://bin.webduino.io/?js,output)(互動網頁製作)


## 包含以下檔案

```
data.xlsx (資料庫格式範例,實際使用需置於google試算表)
writeScript.gs (用於網頁程式讀取試算表資料)
readScript.gs (用於網頁程式寫入試算表資料)
userMain.html (使用者網頁)
presenterControl.html (簡報者後臺數據控制網頁)
myPresentation.pptx (簡報範例,實際使用需置於google簡報)(尚待上傳)
```

## 其他註記

```
*用來作為資料庫的google試算表需有以下頁籤(請參考data.xlsx)：
    1.資料回送
    2.題號
    3.指標
    4.統計
*互動網頁部分可使用google協作平台之"內嵌"功能,作為一子網頁
*writeScript.gs 及 readScript.gs 之內容需置於google apps script平台，並發布網路應用程式
*相關檔案可能需要開啟共用設定
*所提供之檔案內容之連結部分皆已模糊化，實際使用時須套用正確的連結
```

## 參考資料

[Google試算表前後端實作](https://tutorials.webduino.io/zh-tw/docs/socket/useful/google-sheet-2.html)


