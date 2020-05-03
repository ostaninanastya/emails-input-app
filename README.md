# emails-input-app

## How to run project(project will be running at http://localhost:4005/)
```sh
$ git clone https://github.com/ostaninanastya/emails-input-app
$ cd emails-input-app/
$ npm install
$ npm run development
```
## How to build project
```sh
$ git clone https://github.com/ostaninanastya/emails-input-app
$ cd emails-input-app/
$ npm install
$ npm run production
```
## How to use the component
### Include a script tag at the beginning of your page
  ```html
    <script src="emails-input.js"></script>
  ```
### Or import to javascript file 
  ```js
    import './emails-input';
  ```
## API
### A method to get all entered emails(both valid and invalid)
  ```js
    const emailsInput = document.querySelector('emails-input'); 
    console.log(emailsInput.items) 
  ```
### A method to replace all entered emails with new ones
  ```js
    const emailsInput = document.querySelector('emails-input'); 
    emailsInput.items = ["example@mail.com", "example@gmail.com"];
  ```
### Ability to subscribe for emails list changes
  ```js
    document.addEventListener('change', function(event) { 
      alert(event.detail.text); 
    });
  ```
