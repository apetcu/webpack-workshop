export default class ContentChanger {
	constructor(id, content){
		this.changeContentById(id, content);
	}

	changeContentById(id, content){
		document.getElementById(id).innerHTML = content;
	}

}