import * as BasicHandler from 'basic_handler';

// Worker Instructions Format(WIF) handler
export default function() {

	const FORMAT_REGEXP = /a/;
	const CONTEXT_WORKERS_PROPERTY_NAME = 'workers';

	BasicHandler.call(this, FORMAT_REGEXP, CONTEXT_WORKERS_PROPERTY_NAME);

	this.englishToContextProperty = function(text) {

	};

	this.contextPropertyToJavascript = function(worker) {

	};

}