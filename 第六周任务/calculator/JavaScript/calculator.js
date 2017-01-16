function calculator() {
	this.jisuan = function(num1,num2,oper){
		var res = 0;
		switch(oper){
		// 如果是加法
			case '+':
				return num1+num2;
		// 如果是减法
			case '-':
				return num1-num2;
		// 如果是乘法
			case '*':
				return num1*num2;
		// 如果是除法,判断除数是否为0
			case '÷':
				if (num2==0) {
					alert('除数不能为0');
					return '0';
				}else{
					return num1/num2;
				}
		//未输入
			default:
				return res;
		}
	}
}

var calculator = new calculator();
var Nval = 0;//保存转换number类型的值
var temp = 0;//保存第一个输入的值
var oper = "";//保存输入的操作符
var computed = false;
// 获取输入数字
function inputEvent(e) {
	// window.alert(e.value);
	var val = e.value;
	var Nsval = document.getElementById('Result');
	var maxNum = Nsval.value;
	if (computed) {
		maxNum = val;//连续输入数字
		Nsval.value = maxNum;
		Nval = parseFloat(maxNum);//转换成number类型的值并储存
		computed = false;
	}else{
		if(maxNum.indexOf(".") == -1  || val!= "."){
			if(maxNum.indexOf(".") == -1 &&  parseInt(maxNum) == 0 && val!="." ){
				maxNum = "";
			}
			maxNum += val;//连续输入数字
			Nsval.value = maxNum;
			Nval = parseFloat(maxNum);//转换成number类型的值并储存
		}
	}
}

// 第一行
function inputXx(e) {
	// window.alert(e.value);
	var Nsval = document.getElementById('Result');
	var a = "-";
	if (e.value == "C") {
		Nsval.value = "0";
	}else if(e.value == "+/-"){
		// alert(Nsval.value);
		if (Nsval.value>0) {
			// alert(parseFloat((a)+Nsval.value));
			Nsval.value = parseFloat((a)+Nsval.value);
		}else if(Nsval.value <= 0){
			// alert(parseFloat((-1)*Nsval.value));
			Nsval.value = parseFloat((-1)*Nsval.value);
		}
	}else if(e.value == "←"){
		Nsval.value = Nsval.value.replace(/.$/,'')
	}
}

function inputOper(e) {
	oper = e.value
	var Nsval = document.getElementById('Result');
		//保存上次计算结果，并对字符串进行转换Number类型
		if(Nsval.value!=""){
			temp = parseFloat(Nsval.value);
		}
		Nsval.value = "";//第一个输入的值设置为空
}

// 计算结果
function inputEquel(e) {
	var Nsval = document.getElementById('Result');
	// var maxNum = Nsval.value;
	if (e.value == "=") {
		Nsval.value = parseFloat(calculator.jisuan(temp,Nval,oper).toFixed(5));
		computed = true;
	}
}