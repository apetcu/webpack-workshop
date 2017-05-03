import $ from "jquery";

export default class ContentChanger {
	constructor(id, content){
		this.changeContentById(id, content);
	}

	changeContentById(id, content){
		$('#'+id).html(content);
	}

}

/**
 * REMOVE unused export
 */
const test = "Print this!!!";
export {test};

/**
 * REMOVE Always true
 */

if(1===1){
	console.log("this will always be here :)");
}