// JavaScript Document
$(function() {
	// 给相关要素绑定事件
	$('#roomnum').val(orderinfo.roomnum);
	$('#assistcode').val(orderinfo.assistcode);
	$('#roomnum').change(function() {// 重新计算单房差
		var roomnum=$(this).val();
		var dfcz=(roomnum*2-orderinfo.pnumber)*orderinfo.dfc;
		$('#dfcz').val(dfcz);
		$('#dfczhtml').html((roomnum*2-orderinfo.pnumber)+'x'+orderinfo.dfc+'='+dfcz);
	});
});