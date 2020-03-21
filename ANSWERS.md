Why would you use class component over function components (removing hooks from the question)?
Class components allow you to have more direct control over certain things in your code by using react lifecycle methods such as componentDidMount.

Name three lifecycle methods and their purposes.
The three main lifecycle methods are componentDidMount which will execute when the component is originally loaded on the page, componentDidUpdate, which will execute when the components state changes, and componentWillUnmount which can be used to do any necessary cleanup.

What is the purpose of a custom hook?
A custom hook can allow you to do many things within react in a more streamlined and repeatable way. Usually you will make a custom hook based off of something like useState and you will add your own functionality on top of the useState.

Why is it important to test our apps?
It is important to test our apps because by implementing testing, we write better code that is easier to make tests for, and most importantly to prevent a future developer from making a change that may break something. It puts a test in place to explain that something is supposed to work a certain way, and helps to prevent developers from changing that thing in the future.
