var t = {
	tableId: 99
}

// Two values returned as object and destructuring them into proxy and revoke. 
let { proxy, revoke } = Proxy.revocable(t, {
	get : function(target, propertyKey, receiver) {
		// console.log('Property ' + propertyKey);
		return Reflect.get(target, propertyKey, receiver) + 100;
	}
});

console.log(proxy.tableId);		// 199
revoke();
console.log(proxy.tableId);		// TypeError: Cannot perform 'get' on a proxy that has been revoked
