import * as ROLES from '../roles';
import * as Word from '../word';

var words = [];

function addBody(subject, object, possesive, be) {
	words.push(new Word(subject, ROLES.SUBJECT));
	words.push(new Word(object, ROLES.OBJECT));
	words.push(new Word(possesive, ROLES.ADJECTIVE));
	words.push(new Word(be, ROLES.VERB));
}

// First person
addBody('i', 'me', 'my', 'am');
addBody('we', 'us', 'our', 'are');

// Second person
addBody('you', 'you', 'your', 'are');

// Third person
addBody('he', 'him', 'his', 'is');
addBody('she', 'she', 'her', 'she');
addBody('they', 'them', 'their', 'are');

export function words() {
	return words;
}
