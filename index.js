import * as Context from 'code/context';
/**
 * Turns an english text into javascript code.
 * Currently only supports:
 * * Worker Instructions format (WIF)
 * * Object Definition format (ODF)
 * For more info on formats supported see readme.
 * @param english - a string in proper english, or an array of strings in proper english.
 * @return javascript code representation of the english text/texts.
 * @throws exception if english grammer is faulty, or doesn't match one of the supported formats.
 */
export function javascript(english) {
	let context = new Context();
	
	if(english instanceof Array) {
		english.forEach(text => context.inject(text))
	}

	context.inject(english);

	return context.javascript();
}

