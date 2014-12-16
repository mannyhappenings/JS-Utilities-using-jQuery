window.createElement = function (tagname, attributes, children, returnString){
	var element = document.createElement(tagname);
	var z;
	if(attributes instanceof Object)
	   for(var x in attributes) {
			 z = document.createAttribute(x);
			 z.value = attributes[x];
			 element.setAttributeNode(z)
		 }
	if(children){
		if(children instanceof Array){
			var tmpContainer = document.createElement('div');
			children.forEach(function(child){
				if(child instanceof Node){
					element.appendChild(child);
				} else if(typeof jQuery!="undefined" && child instanceof jQuery){
					jQuery(element).append(child)
				} else if(typeof child == "string"){
					tmpContainer.innerHTML = child;
					console.log(tmpContainer.outerHTML);
					for(var i=0; i<tmpContainer.children.length; i++){
						element.appendChild(tmpContainer.children[i]);
					}
				} else {
					console.log("Can't append children, children list doesn't contain valid Node or HTML string. \nNodes can also be jQuery object.");
				}
			});
		} else if(children instanceof Node){
			element.appendChild(children);
		} else if(typeof jQuery!="undefined" && children instanceof jQuery){
			jQuery(element).append(children)
		} else if(typeof children == "string"){
			element.innerHTML = children;
		} else {
			console.log("Can't append children, children list doesn't contain valid Node or HTML string. \nNodes can also be jQuery object.");
		}
	}
	return (returnString)? element.outerHTML: element;
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