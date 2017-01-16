var source;
function init(argument) {
    source = new EventSource("http://localhost/DataPush/data-2.php");
    source.onopen = function() {
        console.log('链接已建立', this.readyState);
    }
    source.onmessage = function(event) {
        console.log('从服务器试试获取的数据', event.data);
    }
    source.onerror = function() {

    }
}
init();
