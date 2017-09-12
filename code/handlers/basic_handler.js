export default function(matchRegex, contextPropertyName) {

	this.match = function(text) {
		return text.match(matchRegex);
	};

	this.apply = function(text, context) {
		context[contextPropertyName] = context[contextPropertyName] || [];
		context[contextPropertyName].push(this.englishToContextProperty(text));
	};

	this.javascript = function(context) {
		return context[contextPropertyName].reduce((property, js) => {
			return js + this.contextPropertyToJavascript(property, context);
		}, '');
	};

	this.englishToContextProperty = () => new Object();
	this.contextPropertyToJavascript = () => new Object();

}