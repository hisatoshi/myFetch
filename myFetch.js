/*******************************
profile = {
  type : GET or POST,
  endpoint : url,
  callback : function


}
*******************************/

var myFetch = function() {
  function send(profile) {
    var xhr = new XMLHttpRequest();
    switch ( xhr.readyState ) {
      case 0:
        // 未初期化状態.
        console.log( 'uninitialized!' );
        break;
      case 1: // データ送信中.
        console.log( 'loading...' );
        break;
      case 2: // 応答待ち.
        console.log( 'loaded.' );
        break;
      case 3: // データ受信中.
        console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
          break;
      case 4: // データ受信完了.
        if( xhr.status == 200 || xhr.status == 304 ) {
            profile.callback(xhr.response);
        } else {
            console.log( 'Failed. HttpStatus: '+xhr.statusText );
        }
        break;
    }
    xhr.responseType = 'json';
    xhr.open(profile.type,profile.endpoint,true);
    xhr.send();
  }
  return {
    send : send
  };
};


/*****************
how to use

function callback(res) {
console.log(res);
}
var hoge = myFetch()
var profile = {
  type : 'GET',
  endpoint : 'http://sample.com/get',
  calback : calback
};

hoge.send(profle);
*****************/
