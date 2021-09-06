# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was to build out an intro component with signup form master and get it looking as close to the design (in the "design" folder) as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

- Desktop version of the design : 
![image](https://user-images.githubusercontent.com/85306153/132214464-b3c51320-c01b-4e5f-a580-29e8630d83c5.png)

- Mobile version of the design :

![image](https://user-images.githubusercontent.com/85306153/132214705-bcaac53a-a58f-404f-94ff-b131a4fdcc21.png)

- Error messages : 
![image](https://user-images.githubusercontent.com/85306153/132214949-7a1cd1e0-6988-4815-8ad7-fc482de0c472.png)

### Links

- <a href="https://www.frontendmentor.io/solutions/intro-component-with-signup-form-master-using-html-css-js-5BhsplUr0">Solution</a>
- <a href="https://cellmixfr.github.io/Intro-component-with-signup-form-master/">Live Site</a>

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript (Event listening, validation form wit validity.valueMissing, Regex to validate an email)

### What I learned

- Use of validity.valueMissing to validate a form :
```js
function validation(e){
    if(firstName.validity.valueMissing){
        e.preventDefault();
        errorFirstName.innerHTML="First Name cannot be empty";
}
```
- Use of Regex to validate an email :
```js
if (!/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email.value)){
        errorEmail.innerHTML="Looks like this is not an email";
}
```

### Useful resources

- [Link 1](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/validation-formulaire) - Form validation using JavaScript - explanations 
- [Link 2](https://jsbin.com/juhako/193/edit?html,js,output) - Form validation using JavaScript - Example using validity.valueMissing
- [Link 3](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation) - MDN Web Doc on form validation - using JS, validity.valueMissing explanations
- [Link 4](https://www.journaldunet.fr/web-tech/developpement/1202967-comment-verifier-une-adresse-mail-en-javascript) - Email adress validation using Regex
- [Link 5](https://forums.commentcamarche.net/forum/affich-8437168-mettre-une-image-dans-input) - How to put icon on input element in a form 
- [Link 6](https://stackoverflow.com/questions/917610/put-icon-inside-input-element-in-a-form) - Idem

## Author

- Frontend Mentor - [@CellmixFR](https://www.frontendmentor.io/profile/CellmixFR)


