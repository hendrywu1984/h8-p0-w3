var testData = [
    ["column1","test1","test1","tea","party", "water bottle"],
    ["column2","test2","test2","test2 test2"],
    ["column3","test2","test2","test2 test2 "],
    ["column4","test2","test2 test2f asdfsdf"],
    ["column5","test2","test2 test2f asdfsdfasdfasdfasa asda asdfsas"]
];
for(var i=0;i < testData.length;i++){
    console.log('baris ke-'+ i +': '+ testData[i].length);
  for(var j=0;j<testData[i].length;j++){
    //console.log(testData[i][j]);
  }
}