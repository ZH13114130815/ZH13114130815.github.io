	{
window.onVideoPlayCompleted = function(){
			rexseeVideoPlayer.stop();
			alert("播放完毕！软件自动关闭！");
rexseeFile.remove('file:///data/data/dyzh.qingrenjie2021/1.mp4');
rexseeApplication.confirmExit();
}
rexseeBrowser.setAllowErrorDialog(false);rexseeAudioPlayer.pause();rexseeVideoPlayer.start('file:///data/data/dyzh.qingrenjie2021/1.mp4','window-dim-amount:0;window-moveable:true;window-modeless:true;window-cancelable:true;width:100%;height:100%;border-width:0px;border-color:#FF6699;window-align:center;',false);
rexseePopupWindow.show('cd.html','browser-progress-dialog:hidden;window-align:right;window-dim-amount:	0;alpha:0.4;width:20%;height:100%;window-modeless:true;window-cancelable:false;');
}
