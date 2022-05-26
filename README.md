# React Documentation for WeatherApi Application

# 1. React Basics
 ### 1. What is React.js?

React is a JavaScript Library which is being used widely to make a larger application. The aim of using React is to make the Visual Interfaces simple. React allows its developers to perform CRUD tasks without realoding the page. React is being used by the companies like facebook, Netflix, Instagram etc.

 ### 2. Setup tools for React App
 
 #### The following tools required to use React Journey
 - VS Code (Code Editor to write the code)
 ##### VS Code Extensions:
  - ThunderClient to use as testing API like Postman.
  - ES7 React / Redux Snippets to write the code quickly as this extension provides code snippets.
  - Bracket Pair Colorizer, this extension provides the help to check the brackets by using the same color scheme of starting and ending the bracket.
  - Auto Rename Tag, This extension provides the help to change the name of the tag by changing the name of only the starting tag but ending tag changes automatically
 ##### Chrome Extensions:
 - React Dev tools (Chrome Extension to visualize the React result better) as shown in the fig.
  ![alt devTools](https://assets.digitalocean.com/articles/67372/chrome_success_message.png)
 ###### For Backend:
 - Node Js (To execute JS without using browser)

### 3. What is React JSX?

JXS is actually a syntax extension in JS which allows developers to write HTML inside React. JSX is the abbreviation of JavaScript XML. The example of JSX is as follows:

```javascript
const languages= (
<ul>
 <li> Java </li>
 <li> PHP </li>
 <li> Scala </li>
 </ul>
 )
```
In JavaScript, class is reserved keyword, so that developers must use className to execute the JSX like as follows:

```javascript
const greet = <h1 className = "greetings"> Hello </h1>

```

### 4. What are components in React?

In fact, Every thing is component in React. To explain the concept, we can say in simple words that the component is an isolated piece of interface. In the application, Navbar, Sidebar etc are all components. These components are made separately and join together and as a result, one React Application completes.

#### Types of Components:
In React, there are two types of components.
- Function based component
- Class based component

#### Function based component:

The function based component is basically a JavaScript function that returns HTML, which is JSX. The example is:

```javascript
function Clock = () => {
   return <h1> Clock is Important </h1>
}
```

#### Class based component:

The class based components are typically JavaScript class which extends React.Component. Here is the example

```javascript

import React, { Component } from 'react'

class Clock extends Component {
render(){
return <h1> Clock is Important </h1>
}
}

```

### 5. How to create a new React App?

In ordert to create a new react app, one should follow certain steps and then, we get folder package in our local machine from the React. At first we should run the following command in the PowerShell terminal of VS Code:

```bash
npx create-react-app weatherapi
```

By executing the above command, we get a full package automatically from the React in the selected location and to start the installed project, we should change directory, if the seected location is different by run the following command:

```bash
cd weatherapi
```

Once everyting is open and ready to start work in code Editor (VS Code), we should write the following command to start the first default React app.

```bash
npm run start
```
After successfully execution of the app, we will get the result like this as given below:

![alt devTools](https://assets.digitalocean.com/articles/67372/chrome_success_message.png)

In this way, we create a new React app and later, certainly we customize the folders and files include in the package as per our need.
