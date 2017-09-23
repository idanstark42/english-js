import * as utils from '../utils'
import * as ROLES from './roles';

function loadWords(modules) {
	var words = {};

	words.all = [];
	for(var role in ROLES) {
		words[ROLES[role]] = [];
	}

	modules.forEach(module => {
		if(module && module.words && module.words.constructor === Function) {
			module.words().forEach(word => {
				words[word.role].push(word);
				words.all.push(word);
			});
		}
	});

	return words;
}

export function(modules) {
	
	var words = loadWords(modules);

	this.find(str, role) {
		var searchScope = role ? words[role] : words.all;
		return searchScope.find(word => word.str === str);
	}

}