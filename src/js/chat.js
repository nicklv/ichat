var client = new iChatClient({
	url : 'http://127.0.0.1:4567/faye',
	timeout : 120,
	retry		: 5
});

client.join('foo', function(message) {
  // handle message
	alert(message.text);
	console.log(message);
});

setTimeout(function(){
	client.send('foo',{
		text:'dssdjfkjkl'
	},function(){
		 // alert('Message received by server!');
	},function(error){
		alert('There was a problem: ' + error.message);
	});

	// client.leave('foo');
},2000);