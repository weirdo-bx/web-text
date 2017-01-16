//if/else

function view(){
	var grade = parseInt(document.getElementById('grade').value);
	//小于等于100并且大于90  一等生
	if (grade >= 90 && grade <= 100) {
		alert('一等生!');
	//小于90并且大于80  二等生
	}else if (grade >= 80 && grade < 90) {
		alert('二等生');
	//小于80并且大于等于70  三等生
	}else if (grade >= 70 && grade < 80) {
		alert('三等生');
	//小于70并且大于等于60  四等生
	}else if (grade >= 60 && grade < 70) {
		alert('四等生');
	//小于60并且大于等于50  五等生
	}else if (grade >= 50 && grade < 60) {
		alert('五等生');
	//小于50并且大于等于40  六等生
	}else if (grade >= 40 && grade < 50) {
		alert('六等生');
	//小于40并且大于等于30  七等生
	}else if (grade >= 30 && grade < 40) {
		alert('七等生');
	//小于30并且大于等于20  八等生
	}else if (grade >= 20 && grade < 30) {
		alert('八等生');
	//小于20并且大于等于10  九等生
	}else if (grade >= 10 && grade < 20) {
		alert('九等生');
	//小于10并且大于等于0  十等生
	}else if (grade >= 0 && grade < 10) {
		alert('十等生');
	//无效数字
	}else {
		alert('您的输入有误，请重新输入!');
	}
}




//switch

// function view(){
// 	var grade = parseInt(document.getElementById('grade').value);
	
// 	switch (true){
// 		//小于等于100并且大于90  一等生
// 		case grade >= 90 && grade <= 100 :
// 			alert('一等生!');
// 			break;
// 		//小于90并且大于80  二等生
// 		case grade >= 80 && grade < 90 :
// 			alert('二等生!');
// 			break;
// 		//小于80并且大于等于70  三等生
// 		case grade >= 70 && grade < 80 :
// 			alert('三等生!');
// 			break;
// 		//小于70并且大于等于60  四等生
// 		case grade >= 60 && grade < 70 :
// 			alert('四等生!');
// 			break;
// 		//小于60并且大于等于50  五等生
// 		case grade >= 50 && grade < 60 :
// 			alert('五等生!');
// 			break;
// 		//小于50并且大于等于40  六等生
// 		case grade >= 40 && grade < 50 :
// 			alert('六等生!');
// 			break;
// 		//小于40并且大于等于30  七等生
// 		case grade >= 30 && grade < 40 :
// 			alert('七等生!');
// 			break;
// 		//小于30并且大于等于20  八等生
// 		case grade >= 20 && grade < 30 :
// 			alert('八等生!');
// 			break;
// 		//小于20并且大于等于10  九等生
// 		case grade >= 10 && grade < 20 :
// 			alert('九等生!');
// 			break;
// 		//小于10并且大于等于0  十等生
// 		case grade >= 0 && grade < 10 :
// 			alert('十等生!');
// 			break;
// 		//无效数字
// 		default:
// 			alert('您的输入有误，请重新输入!');
// 			break;
// 	} 
// }

