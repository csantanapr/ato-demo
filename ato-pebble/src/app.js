console.log('Simply.js demo!');

simply.title("ATO2014 Demo");
simply.subtitle("IBM Bluemix");
simply.body("Press a any button to chat app running socket.io");

simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Pressed ' + e.button + '!');
  ajax({ url: 'http://todo-cs.mybluemix.net/watch?b='+e.button }, function(data){
    var response = data.match(/<p>(.*?)<\/p>/)[1];
    var now = new Date().toLocaleTimeString();
    simply.setText({
      title: 'Bluemix: ' + response,
      subtitle: 'Pressed ' + e.button + '!',
      body: 'Javascript Rocks '+ now,
    }, true);
  });
});

