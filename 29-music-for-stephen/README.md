# Setting Up a Text Editor

## Required

Although you can use any text editor you want, the instructions below will use VS Code.

- Install [Visual Studio Code](https://code.visualstudio.com/)

- Install the following packages in VS Code
  - `Live Server` (lets you run your code on your local machine for testing, by adding a "Go Live" button to the bottom of your VS Code window)
  - `p5js Snippets` (lets VS Code auto-complete p5 functions for you)


## Optional

There is a configuration file in this folder template called `.eslintrc.js` that helps provide instant feedback about possible problems in your code using a tool called ESLint (for example, warning you that you didn't declare a variable before using it, or that your indentation is incorrect). Setting up your machine to use this may not be feasible in a computer lab scenario, as it requires admin rights to install Node.js. If you cannot install Node.js, the VS Code setup  will still work just fine, but you will not get instant feedback from ESLint about possible problems in your code.

- Install Node.js from https://nodejs.org (which also installs npm -- node package manager)

- in VS Code, open Terminal and type `npm install -g eslint`
  - if you have installation problems with eslint, you can try updating npm [in VS Code, open Terminal and type `npm install npm@latest -g`]

- Install the following packages in VS Code
  - `ESLint` (allows VS Code to use ESLint, which helps you write better formatted JavaScript, and warns you of errors as you type your code)


## For Each New Project

- make a copy of this template folder
- rename the folder to whatever you want your project to be called (your project will be at yourusername.github.io/projectname)
- move the newly renamed template folder into your GitHub repository folder
- edit `sketch.js` with your p5js code
- to see your project, click on the "Go Live" button on the bottom (footer) bar of VS Code, which will start a local development webserver and automatically open up your index.html file
- commit your changes to GitHub (via the GitHub desktop app)
- push your changes to the server

## Daily GitHub Workflow

- Fetch Origin (pull any changes from GitHub repo)
- do your work
- commit changes to GitHub
- push your changes

Following this workflow **every** time you work on your code is especially important when using GitHub at home and at school. If you forget to fetch origin before coding, and have made changes to your code on another machine, there are likely to be "clashes" in your code, which are time consuming to fix.


# Contents of Template Folder

* .vscode folder
  * launch.json
* assets folder
  * gear.png
* css folder
  * fullscreenp5.css
* js folder
  * p5.collide2d.min.js
  * p5.js
  * p5.min.js
  * p5.sound.js
  * p5.sound.min.js
* .eslintrc.js
* favicon.ico
* index.html
* LICENSE
* README.md (this file)
* sketch.js

## launch.json

This file is useful if you use the debugging features of VS Code. 

## gear.png

The assets folder is where you should save any images or sounds used in your project. The gear.png file is a placeholder image that you are welcome to delete.

## fullscreenp5.css

This is the Cascading Style Sheet (CSS) file linked to from index.html. It causes your sketch to be full screen by default. If you decide to build a project that combines other elements of a web page with your sketch, you will want to change this CSS file.

## p5.collide2d.min.js

p5.collide2D provides tools for calculating collision detection for 2D geometry with p5.js. Rather than having to do the math yourself, you can import this library (by uncommenting the link in the index.html file) and use it to determine whether two objects are in contact. For example, you could use this to determine if a circle on the screen has any point in contact with a triangle.

## p5.js

This file stores the complete p5.js library. It is easy to read by humans, so feel free to open it and explore its contents. It also has a friendly error system, which helps new programmers with common user errors. This is the file that is linked to by default in the index.html file. Once you have completed your project and don't need the friendly error system anymore, you might want to update your index.html file to link to p5.min.js instead of this file (to speed up the load time of your project).

## p5.min.js

This file is a minified version of the p5.js file. It is a lighter version, with the same functionalities, but smaller file size. This minified version is harder to read for humans, and does not include the friendly error system.

## p5.sound.js, p5.sound.min.js

p5.sound extends p5.js with Web Audio functionality including audio input, playback, analysis, and synthesis. You need to link to one of these files from your index.html file if you'd like to use sound in your project.

## index.html

index.html is a template for an HTML file. This index.html first imports the main p5js library included in the js folder, then loads and executes the file sketch.js which is where you can write your own code. This is the file you need to edit if you want to include sound or collision detection (you should be able to simply uncomment the links to those libraries).

## LICENSE

By default, I have included an Unlicense file for your project, which puts your work into the public domain. If you would rather keep your work within the copyright system, you can remove/replace this file.

## README.txt

This README file formatted with Markdown :)

## sketch.js

The sketch.js is a template for the p5.js sketch, with the functions setup() and draw() that you can complete. This is the file you will be editing 99% of the time.
