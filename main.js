function UnfollowAll(){
	var btn = GetUnfollowBtn();
	console.log('Procurando botão...');
	for(var i = 1; i <= btn.length; i++)
	{
		let k = i;	
		setTimeout(function()
		{
			btn[k].click();
			console.log('+Clique em unfollow...');
			var cbtn = GetConfirmBtn();
			cbtn[0].click();
			console.log('+Clique em confirmar...');
		}, 30000 * (k + 1));
	}
}

function GetUnfollowBtn()
{
	let btn = document.querySelectorAll('._0mzm-.sqdOP.L3NKy._8A5w5');
	return btn;
}

function GetConfirmBtn()
{
	let cbtn = document.querySelectorAll('.aOOlW.-Cab_');
	return cbtn;
}
