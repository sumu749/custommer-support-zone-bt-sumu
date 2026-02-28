### Customer Support Zone

What is JSX, and why is it used?
JSX is an extension to javascript syntax. It allows writing code that look similar html, and that similarity makes it feel pretty natural in the context of a front end UI library. JSX is very commonly used with React, though technically you could do react without JSX (it would be combersome, so i don't recommend it), and the JSX syntax can be used with other libraries than react (this isn't common).

In the context of react, a JSX element is a shorthand for calling React.createElement. createElement is the code that React uses for describing what should be on the page. For example, the following JSX:

<div>Hello World</div>
Transpiles to this code:

React.createElement("div", null, "Hello World");
Which will return an object that looks roughly like this:

{
type: 'div',
props: {
children: 'Hello World'
}
}
