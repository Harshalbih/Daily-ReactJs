## 1. Writing Scripts in package.json.
<hr>

### Q. What converts New Code to Older Code(For older version Browsers)? 

A: Babel , We do not need to write polyfill. Babel does it automatically.

<hr>

`npx` - executing commands without downloading packages
npm - will download required packages

> Note: Parcel will not remove console.log automatically. We need to configure for it. There is a package for it, named `babel-plugin-transform-remove-console` either from babel website or npmjs website: 

command : 
```
npm install babel-plugin-transform-remove-console --save-dev /-D
```

Usage: 

    1.via .babelrc (recommended) : 
    2. via CLI
    3. via NodeAPI

## 2. React-key Reconciliation :
When there are siblings in an array, we need to give keys for each sibling

>  **HW**: Read about React-key Reconciliation from React Docs.

## 3. Babel 

React.createElement gives us an Object, which is then converted to html and puts into DOM

Flow: 

```
React.createElement => Object => HTMl(DOM)
```
> **HW** : Difference between **HTML** and **JSX**

JSX uses React.createElement (behind the scenes), which gives Object, and then into HTML, and it is put into DOM
Babel does it. Babel converts JSX. JSX was developed by Facebook.

Flow: 
```
JSX => React.createElement => Object => HTMl(DOM)
```
Babel converts JSX into React.createElement

> NOTE: Babel is must to use JSX .


<hr>

### Q. Is JSX HTML inside JS?

A:  No,  JSX is a HTML like Syntax, and not HTML inside JS.

<hr>

Bable Compiler for JS.
Read Babel Docs at [babeljs.io](https://babeljs.io)
<br><br>
> **HW :** Play with Babel in it's website.
Also Go to it's GitHub Repo, and read about its algorithms.

Babel comes along with Parcel.


## 4. React Component types:

1. Functional Component- NEW
2. Class Based Component - OLD

### **Functional Component** is just a normal function that returns some piece of JSX, or a react element, or a function. 
Name of a Component starts with a Capital Letter (not mandatory, but good practice to use)
If we have to write multiple lines to be returned in a component, we need to use () and ; at the end.

> For Homework, use Normal Convention.


## 5. Diff b/n React Element & React Component:

React Element is returns an Object.
React Component is a function that returns JSX, or a react element, or a function.

Syntax When rendering:
- **For React Element:**

    We use `root.render(element_name);`


- **For React Component:**

     We use Angular brackets: `root.render(\<ComponentName />);`

 Any piece of Javascript code can be written within {} 

> XSS - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.

> JSX takes care of XSS.

<hr>

Q: Component Composition:

A: Writing/ Passing component inside component.

<hr>


## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```
