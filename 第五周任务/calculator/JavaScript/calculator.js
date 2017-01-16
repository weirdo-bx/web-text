// function calc(){
// 	var num1 = parseFloat(document.getElementById('num1').value);
// 	var num2 = parseFloat(document.getElementById('num2').value);
// 	var symbol = document.getElementById('symbol').value;
// 	// if (!document.getElementById('num1').value.trim() || !document.getElementById('num2').value.trim()) {
// 	// 	alert('您输入的数字为空，请重新输入!');
// 	// 	return;
// 	// }
// 	// if (isNaN(document.getElementById('num1').value.trim()) || isNaN(document.getElementById('num2').value.trim())) {
// 	// 	alert('您输入的是非数字，请重新输入!');
// 	// 	return;
// 	// }
// 	var sum = calculate (num1,num2,symbol);
// 	document.getElementById('results').innerText = sum;
// }
// function calculate(num1,num2,symbol) {
// 	switch(symbol){
// 		case '+':
// 		return num1+num2;
// 		case '-':
// 		return num1-num2;
// 		case '*':
// 		return num1*num2;
// 		case '/':
// 		if (num2==0) {
// 			alert('除数不能为0');
// 			return 'NaN';
// 		}else{
// 			return num1/num2;
// 		}
// 		default:
// 		return '未知操作符';
// 	}
// }

function calc(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var symbol = document.getElementById('symbol').value;
	if (!num1.trim() || !num2.trim()) {   
		alert('您输入的数字为空，请重新输入!');
		return;
	}
	if (isNaN(num1.trim()) || isNaN(num2.trim())) {
		alert('您输入的是非数字，请重新输入!');
		return;
	}
	var num3 = parseFloat(num1);
	var num4 = parseFloat(num2);
	var sum = calculate(num3,num4,symbol);
	document.getElementById('results').innerText = sum;
}
function calculate(num3,num4,symbol) {
	switch(symbol){
		case '+':
		return num3+num4;
		case '-':
		return num3-num4;
		case '*':
		return num3*num4;
		case '/':
		if (num2==0) {
			alert('除数不能为0');
			return 'NaN';
		}else{
			return num3/num4;
		}
		default:
		return '未知操作符';
	}
}