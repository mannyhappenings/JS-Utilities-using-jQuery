window.createElement = function (tagname, attributes, children, returnString){
	var element = $("<" + tagname + ">");
	if(attributes instanceof Object)
	   for(var x in attributes)
			element.attr(x, attributes[x]);
	if(children){
		if(children instanceof Array)
			children.forEach(function(child){
				element.append(child);
			});
		else if(children instanceof Node || children instanceof jQuery|| typeof children == "string"){
			element.append(children);
		} else {
			console.log("Can't append children, children list doesn't contain valid Node or HTML string. \nNodes can also be jQuery object.");
		}
	}
	return (returnString)? element.get(0).outerHTML: element;
}
window.changeAttributes = function (object, toAdd, toRemove) {
	if(typeof object != 'object' || object instanceof jQuery)
		return;
	if(toAdd)
		for(var x in toAdd)
			object[x] = toAdd[x];
	if(toRemove)
		if(toRemove instanceof Array)
			toRemove.forEach(function(attrName){
				delete object[attrName];
			});
	return object;
}