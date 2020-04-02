function GoogleForm() {
  //這裡要對應到自己的 javascript 名稱
  //宣告欄位
  var data1 = $("[name='Name']").val();
  var data2 = $("[name='Tel']").val();
  var data3 = $("[name='A']").val();
  var data4 = $("[name='B']").val();
  var data5 = $("[name='Beef']").val();
  var data6 = $("[name='Address']").val();
  $.ajax({
    url:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzakWg5V2XAivCnY3AgIgUNKid0QNs9kskP5MnDAanCJ2SUA/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
    data: {
      //Google Form 裡面的欄位 name ＊＊記得要改＊＊
      "entry.946004208": data1,
      "entry.902154971": data2,
      "entry.6299145": data3,
      "entry.244862212": data4,
      "entry.901552377": data5,
      "entry.174191354": data6
    },
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function() {
        alert("已送出!"); //完成送出表單的警告視窗
        window.location.assign("http://google.com"); //完成送出表單後的重新導向
      },
      200: function() {
        alert("已送出!"); //完成送出表單的警告視窗
        window.location.assign("http://google.com"); //完成送出表單後的重新導向
      }
    }
  });
}
