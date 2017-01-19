function classA() {
	this.lian="";
	this.zui="";
	this.yan="";
}
classA.prototype = {
	setLian:function(){
		this.lian="红扑扑";
		return this;
	},
	setZui:function(){
		this.zui="大嘴";
		return this;
	},
	setYan:function(){
		this.yan="小眼";
	}
};
var ren = new classA();
ren.setLian().setZui().setYan();//按顺序
console.log(ren);