import * as WIFHandler from 'handlers/wif'
import * as ODFHandler from 'handlers/odf'

export default function() {

	this.handlers = [];
	this.handlers.push(new WIFHandler());
	this.handlers.push(new ODFHandler());

	this.inject = function(englishText) {
		let handler = handlers.find(h => h.match(englishText));
		handler.apply(englishText, this);
	};

	this.javascript = function() {
		return this.handlers.reduce((handler, js) => {
			return js + handler.javascript(this);
		}, '');
	};

}