# Landing page using Javascript (4geeks acadamey activity)

This is a simple landing page selling an invented CSS framework. Ironically, the website is just made with plain CSS. Javascript is used to make modals appear when clicking certain buttons. In fact, when sending your email in the form input (which is sent to FormSubmit.co, an endpoint for Html forms), you have a modal too. Finally, the website is deployed using Vercel.

Visit the page here: https://business-landing-page-vanesascode.vercel.app

## Setup

- [x] Createa a app.js, an index.html, and a style.css file.

## CSS

- [x] The strategy was identified (see strategy1 & 2 png files in the image folder) - to create the Layout.
- [x] See how useful is to use display flex, and instead of using justify-content-etc, how nice it is giving a % to each element inside the flex div.
- [x] `> *` is a css selector that selects all direct child elements of the selected elements.
- [x] Feel free to create as many CSS files as needed depending on the parts your website has, for having it all organized and being fast to find what you want to change during the development and after production.

## Javascript

Each Javascript file is responsible for a modal in the website:

- The 'formModal' file sets the modal for when you fill in your email in the sign up section and so a form is submitted. All the steps are described in the file.

### Something interesting to know - close() method

The `closeModal` function in the app.js file, was tried to be called just close(). However, it didn't work and didn't close the Modal. This is because it is a method and is commonly used in JavaScript to close a window or a tab.

It's important to note that the close() method can only close windows or tabs that were opened by a script using the open() method. Additionally, some browsers may have restrictions on closing windows or tabs programmatically due to security reasons.

Just fun to know!

## Linking the form to FORMSUBMIT

[FORMSUBMIT](https://formsubmit.co/) is an endpoint for Html forms. It connects your form to their form endpoint and they email you the submissions. No PHP, Javascript or any backend code required. You just need to add this into your form section:

```
<form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form>
```

The first time you use it, it will send you an email to activate the form and will give you a random-like string to replace your naked email address in the action attribute of your form

## Deployment

- [x] Create an account in [Vercel.com](https://vercel.com)
- [x] Install the Now package, globally: `npm install now -g`

### to create your account

- [x] Run: `now`
- [x] The terminal will ask you your email.
- [x] Then, you'll receive an email in which you will have to verify your credentials.

### to deploy:

- [x] Run: `now` again.
- [x] It will ask you if you want to deploy. You say Y
- [x] Asks the scope (your name)
- [x] Asks if you want to link to existing project. You say N
- [x] In which directory is your code located? If it's in the root folder just leave it like this: `./`
- [x] Want to override the settings? You say N
- [x] You can now get the URL that is in the ✅ production line. It's live!

## To add new changes to the live URL

-[x] You run: `now --prod`. Then, changes are saved in the same URL you published before.

The `NOW PACKAGE` is a command-line tool and a cloud deployment platform provided by `Vercel`. It allows developers to easily deploy their applications and static websites to the cloud with just a few simple commands. The "now" package supports various programming languages and frameworks, including JavaScript, Node.js, Python, Ruby, Go, and many more. It provides features like zero-downtime deployments, automatic SSL certificates, and easy scaling options. Overall, the "now" package simplifies the process of deploying and managing web applications and static websites in the cloud.

`Vercel` is a cloud platform for static site hosting and serverless functions. It allows developers to deploy and serve static websites, frontend applications, and serverless functions with ease. Vercel offers features like instant deployment, automatic scaling, global CDN (Content Delivery Network), custom domains, and SSL certificates.

## Need to see versions of your NPM packages?

To see a list of globally installed npm packages along with their versions: `npm list -g --depth=0`. The --depth=0 flag ensures that only the top-level packages are displayed without their dependencies.
