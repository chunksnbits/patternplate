---
displayName: "Guide: Build a component"
tags: 
 - Guide
options:
  order: 1
---

# Build your first component in patternplate

* **Time invest**: 10 Minutes
* **Audience**: Eyerone
* **Level**: Beginner

### What to expect

* Learn how to add pattern 
* Style component with `CSS`
* Program the demo with `JavaScript`

### You'll need

* Text editor
* **patternplate project**
  * Follow along our [Getting Started Guide](./doc/docs/guides/getting-started) to bootstrap one.
  * A completed copy is available via `git clone https://github.com/patternplate/getting-started.git`
  * Make sure to start patternplate via `pattternplate start` and check it is running on `http://localhost:1337`.


## Create a new pattern

Let's improve the pattern library and add a `Button` component. 
Open a new terminal window or tab, then procceed with the steps below.

1. Create a new directory `button` in `lib`.

   ```bash
   # In a new terminal window
   mkdir lib/button
   ```

2. Open a text editor and add a `package.json` to `lib/button`. 

  ```bash
  # create "package.json"
  touch lib/button/package.json
  ```

   Copy the code below into `lib/button/package.json`

   ```json
   {
     "name": "button",
     "version": "1.0.0",
     "patternplate": {
       "displayName": "Button"
     }
   }
   ```

3. Create a `demo.js` file at `lib/button`. The interface will update
automatically and add **Button** to the patterns list. 

   ```bash
   # create "package.json"
   touch lib/button/demo.js
   ```

   Copy the code below into `lib/button/demo.js`.

   ```js
   module.exports = {
     default: function() {
       // Nothing implemented yet
     }
   }
   ```

   ![](https://patternplate.github.io/media/images/screenshot-button.png)
 
4. Click on the **Button** item to display its (still blank) demo canvas.
   Replace the contents of `lib/button/demo.js` with the code below:

   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     default: () => {
       // Nothing implemented yet
     }
   }
   ```

   Saving the file signals the **Button** demo to reload automatically and display the `HTML` you just added.

   ![](https://patternplate.github.io/media/images/screenshot-button-markup.png)

5. Let's throw some `CSS` into the mix.
   Replace the contents of `lib/button/demo.js` with the code below:

   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     css: `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       // Nothing implemented yet
     }
   }
   ```

   Saving the changes will update your demo to look like this:

   ![](https://patternplate.github.io/media/images/screenshot-button-styled.png)

6. We'll wrap up this tutorial by adding some user interaction to the button. 
Let's count up when clicking on **Button**.
   Replace the contents of `lib/button/demo.js` with the code below:


   ```js
   module.exports = {
     html: '<button class="my-button">My first button</button>',
     css: `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       const el = document.querySelector("button"); 

       let count = 0;
       el.addEventListener("click", () => {
         el.textContent = "Clicked " + (++count) + " times."
       });
     }
   }
   ```

  Click the button to see our program in action

  ![](https://patternplate.github.io/media/images/screencast-button-programmed.gif)

## Up next

* [Guide: Write documentation](./doc/docs/guides/index/docs/guides/write-documentation)

## Related topics

* [Demos](./doc/docs/reference/index/docs/reference/demos)