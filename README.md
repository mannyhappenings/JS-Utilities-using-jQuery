JS-Utilies-using-jQuery
=======================

A set of utilities to do some common tasks using jQuery library

## createElement(...)
Ever faced problems reading your own JS code.

No? Really??

Then try debugging this simple code [JS Code with errors](https://github.com/mannyhappenings/JS-Utilities-using-jQuery/blob/master/error-trial.js)

If you really did not face any problem find errors in the above code then you are really a good debugger, but still this function can raelly help you finding the error real quick.


### Usage
The function `createElement` takes 4 parameters,

```javascript
  createElement(string tagname[, object attributes, Node Object Array children, boolean returnString])
```

-  **tagname**: A *string* specifying which type of element you want create, DIV, SPAN or H1.

-  **attributes**: A *object* specifying the attributes of the element

-  **children**: A *Node object*, a *jQuery Node object* or a *html string* provided will be the children of the element created.

-  **returnString**: A boolean parameter specifying whether to return a html string or a jQuery object.
When set to true returns a html string, else returns a jQuery object

### Examples
To create a *h1* element with class *heading*,

```javascript
	createElement('h1', {class: "heading"});
```

The above expression will return a jQuery object with *h1* element encapsulated.

Sometimes we need the html string rather than the object. In that case,

```javascript
	createElement('h1', {class: "heading"}, [], true);
```

Now, we will insert some text inside the *h1* element,

```javascript
	createElement('h1', {class: "heading"}, "Some text");
```

What if we need another element in that *h1*. You need it? Then just insert it,

```javascript
	createElement('h1', {class: "heading"}, 
		[
			"Some text",
			createElement('div', { class: "inner-div"}, []),
			$("<p>Another paragraph element but generated with jQuery directly.</p>")
		], true);
```

Now, try debugging the same code but with the createElement function used. [Above code with createElement](https://github.com/mannyhappenings/JS-Utilities-using-jQuery/blob/master/error-trial-with-createElement.js)

Both of the codes produce same result.

Both of them have same error when you run them through a interpreter(like scratchpad or browser console), just copy the code in browser console and run. You would know the difference between the ease of debugging the two codes.


### A comparison
Now comapare the codes below,

```javascript
var name = "ABC";
var className = "XYZ";
var heading = "Division heading";
var state = "Virginia";
var name1 = "Ulysses S. Grant";
var name2 = "Robert E. Lee";
var street = "Appomattox Court House";
var warType = "Civil War";
var facultyType = "English faculty";
$(document.body).append('<div clas="someclass"><h3 class="heading">'+heading+'</h3><span class="inner-span">When '+name1+' and '+name2+' met in the parlor of a modest house at '+street+', '+state+',...a great chapter in American life came to a close.</span><span class="paragraph">These men were bringing the '+warType+' to its virtual finish.</span><span class="paragraph">Refer to Capital\'s Guide for Writing Research Papers and, especially, the '+facultyType+'\'s Suggestions for Writing Papers for Literature Courses for further help in handling quotations.</span></div>');
```

```javascript
var name = "ABC";
var className = "XYZ";
var heading = "Division heading";
var state = "Virginia";
var name1 = "Ulysses S. Grant";
var name2 = "Robert E. Lee";
var street = "Appomattox Court House";
var warType = "Civil War";
var facultyType = "English faculty";

$(document.body).append(
	createElement('div', {class: "someclass"},
		[
			createElement('h3', {class: "heading"}, heading),
			createElement('span', {class: "inner-span"},
				[
					'When ', name1, ' and ', name2, ' met in the parlor of a modest house at ',
					street, ', ', state, ',...a great chapter in American life came to a close.'
				]
			),
			createElement('span', {class: "paragraph"},
				[
					'These men were bringing the ' + warType + ' to its virtual finish.'
				]
			),
			createElement('span', {class: "paragraph"},
				[
					'Refer to Capital\'s Guide for Writing Research Papers and, especially, the ',
					facultyType,
					'\'s Suggestions for Writing Papers for Literature Courses for further help in handling quotations.'
				]
			)
		]
	)
);
```

Don't you think that the latter one is more beatiful than the other?

Using craeateElement function, makes the creation of element dynamically moe structured.

Also, since the latter one can be indented, you use code folding too in editor which support it.


Some advantages of using this functions are:
* Better syntactic syntatic structure,
* Better error hunting through interpreter errors messages,
* Suppoorts code folding feature in editors since it uses parenthesis and braces as syntactic structure.

Didn't find the error? No problem, we'll tell you. Just [click here](https://github.com/mannyhappenings/JS-Utilities-using-jQuery/blob/master/error-solution.js)
