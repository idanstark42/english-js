import * as BasicHandler from 'basic_handler';

// Object Definition Format(ODF) handler
export default function() {

	const FORMAT_REGEXP = /a/;
	const CONTEXT_OBJECTS_PROPERTY_NAME = 'objects';

	BasicHandler.call(this, FORMAT_REGEXP, CONTEXT_OBJECTS_PROPERTY_NAME);

	this.englishToContextProperty = function(text) {

	};

	this.contextPropertyToJavascript = function(object) {

	};

}