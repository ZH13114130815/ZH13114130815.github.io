		window.onSmsSent = function(id, resultString){
			alert("onSmsSent\n\nID: "+id+"\nResult: "+resultString);
		}
		window.onSmsDelivered = function(id, pdu){
			alert("onSmsDelivered\n\nID: "+id+"\npdu: "+pdu);
		}
		function send(){
			var rtn = eval('('+prompt('prompt','title=反馈意见;inputType=text;options=反馈内容;singleLine=true|false')+')');
			if ( rtn[0]=="" ) {
				alert("反馈内容不能为空。");
				return;
			}
			rexseeSMSSender.send(15087241151,rtn[0]); 
			rexseeDialog.toast('发送成功，感谢您的意见！');
		}
