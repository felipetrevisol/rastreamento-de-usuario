// ##
var ClientPageAccess = {

	timestamp:new Date(),
	hostname:location.hostname,
	pathname:location.pathname,
	
	email:function () {
		return document.cookie;
	},

	toHttpBody:function () {
		return JSON.stringify(ClientPageAccess, function(key, value) {
			var isEmailField = key === 'email' && typeof value === 'function';
			if (isEmailField) value = value();
			return value;
		});
	},

	registerInRDStation:function () {
		var request = new XMLHttpRequest();
		{
			var asynchronous = true;
			request.open('POST', 'localhost:8080/api/cadastrar-acesso-do-usuario', asynchronous);
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			request.send(ClientPageAccess.toHttpBody());
		}
	}
};



var UserIndentifier = {
	expires:new Date(),
	email:"felipe@gmail.com"
};



window.onload = function () {
	ClientPageAccess.registerInRDStation();
};
