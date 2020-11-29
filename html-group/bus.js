/**
 * Author: Dejavu
 * description: 利用storage进行事件监听
 */
var eventBus = (function () {
	var functionStack = [];
	// 事件触发后的回掉函数
	function on(fn) {
		if(fn && typeof fn === 'function')
			functionStack.push(fn);
	}
	// 删除回掉函数
	function off(fn) {
		functionStack = functionStack.filter(f=>{
			return f !== fn;
		})
		// functionStack.push(fn);
	}
	function handleDeal(e){
		// 两个storage，具体分析
		functionStack.forEach(f=>{
			f(e.key,e.newValue);
		})
	}
	// 初始化
	function broadcast(messageType,data){
		let messageData = {
			date: +new Date(),
			data
		};
		localStorage.setItem(messageType,JSON.stringify(messageData));
	}
	// 监听storage事件
	window.addEventListener('storage',handleDeal);
	return {
		on: on,
		off: off,
		broadcast:broadcast
	}
})();

