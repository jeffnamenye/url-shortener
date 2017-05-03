// my url generator module
exports.Url_Short = (link)=>{
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
  var URL_text_length = 7;
  var URL_text = 'http://hoitytoity.com';

  for(var i = 0; i < URL_text_length; i++){
    URL_text += abc.charAt((Math.random()) * abc.length);

  };
  return URL_text;
}
