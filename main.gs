function doPost(e) {

  // const postData = e.postData.contents;
  Logger.log(e);

  //パラメーターを取得
  const itemName = e.parameter.itemName;

  //パラメーターを指定したラインアカウントへ送信する
  sendReply(itemName)

}

function sendReply(itemName) {
  const accessToken = "9jDFkKzmCfD0LdmevMMbTud2Hs4vo0haogkwgdNZTm9COK861Jb6FlE6edR5xCMLuslRApEj6lceFxYIERjMJT46NsQqTIQoss8ObLoEInTn3qvXssnj2TQw75c/jg0gNS5g8IlgudZPIaTBWZOprQdB04t89/1O/w1cDnyilFU="
  var url = "https://api.line.me/v2/bot/message/broadcast";

  var headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + accessToken
  };
  var messages = [
    {
      "type": "text",
      "text": "ありがたいことに、" + itemName + "は完売致しました。またの来店をお待ちしております。"
    },
  ];
  var payload = {
    "messages": messages
  };
  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(payload)
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}