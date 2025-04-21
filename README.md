**Micah Sheats**

**Apr 21, 2025**

**DCS 325**


### HTML 

**Tool Description:**
Hypertext Markup Language is essentially the backbone of most web applications. It is what structures content on a website using a system of nested tags like `<head>`, `<body>`, `<div>`, `<h1>`, and `<p>`. etc to “markup” sections. This ensures browsers and other assistive technologies can understand the content’s hierarchies and purpose. 

See this HTML code in action [HERE](https://msheats.bates-catapult.net/index.html)
```bash

<!DOCTYPE html>
<html>
<head>
  <title>La Cage</title>
  <link rel="stylesheet" href="cagestyle.css" />
  <script src="cage.js"></script>
</head>
<body>
  <div class="banner">
    <img src="https://tse1.mm.bing.net/th?id=OIP.oUZKr2wl149eIJ4poCkJxAHaHa&rs=1&pid=ImgDetMain" height="50">
    <span style="font-size: 3em"><i>&nbsp;La Cage &nbsp;</i></span>
    <img src="https://tse1.mm.bing.net/th?id=OIP.oUZKr2wl149eIJ4poCkJxAHaHa&rs=1&pid=ImgDetMain" height="50">
  </div>
  <button onclick="toggleMenu()">Toggle Menu</button>
  <button id="theme-toggle" onclick="toggleDarkMode()">Toggle Theme</button>
  <div class="menu">
    <a href="cagewebsite.html">Home</a>
    <a href="aboutcage.html">About</a>
    <a href="contacts.html">Contact</a>
  </div>
  <div class="car">
    <div class="img-wrap">
      <img src="https://th.bing.com/th/id/OIP.Z5pe5GVs5VAeLN_c08oUHAHaEo?w=300&h=187&c=7&r=0&o=5&pid=1.7" alt="Image 1">
      <img src="https://cdn.usarestaurants.info/assets/uploads/1a1b7c5cc948dd8127f7fbb23541eede_-united-states-maine-androscoggin-county-lewiston-cage-207-783-0668htm.jpg" alt="Image 3">
    </div>
    <button class="btn prev" onclick="showPreviousImage()">‹</button>
    <button class="btn next" onclick="showNextImage()">›</button>
  </div>
  <div class="content-section">
    <h3>Welcome to <i>La Cage</i></h3>
    <p><i>La Cage</i> is a local bar in Lewiston, Maine. We offer a variety of activities and drinks for you to enjoy.</p>
    <h4>What does <i>La Cage</i> have to offer?</h4>
    <div class="flex-container">
      <ul>
        <li>Great company</li>
        <li>Pool table</li>
        <li>Karaoke</li>
        <li>Foosball</li>
        <li>Darts</li>
        <li><s>Clean Floors</s></li>
        <li><b>Pabst Blue Ribbon</b></li>
      </ul>
      <div class="images">
        <img src="https://th.bing.com/th/id/OIP.KOdbpCZ-ydZhggCkWZ_aBAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7" class="bouncing-image">
        <img src="https://th.bing.com/th/id/R.38f536b79c7c40bfee9aecdebb7b107e?rik=vt3aSVtpOZCJtA&pid=ImgRaw&r=0&sres=1&sresct=1" class="bouncing-image">
      </div>
    </div>
  </div>
  <div class="content-section">
    Follow on <a href="https://www.facebook.com/people/The-Cage/100054271431513/">Facebook</a>
    <br>
    Write a review on our <a href="https://www.tripadvisor.com/Attraction_Review-g40708-d5831786-Reviews-The_Cage-Lewiston_Maine.html">Trip Advisor</a>
  </div>
</body>
</html>

```

**Example Explanation:**

In this example, I have provided the HTML script from my website for The Cage. I chose this as the example because it does a good job of exemplifying the standard HTML elements, including `<head>`, `<body>`, `<div>`, `<ul>`, and `<p>`. Through these elements, we organized the information to be visually appealing and have a thoughtful layout, which makes sense to the user on the full site. 


### CSS (Cascading Sheet Style)

**Tool Description:**
Cascade Sheet Style is used to define the look and feel of a website. With CSS, we can control things like layout spacing, colors, animations, fonts, and screen size behaviors. CSS can be applied inline in an HTML document using a `<style>` tag or can be called from a .css file, which can be helpful for maintaining consistency and improving readability of the HTML script. 


See full CSS file used for The Cage Website [HERE](./blob/main/CSS_Example/cagestyle.css)
```bash

:root {
    --garnet-color: white;
    --main-bg-color: #ffffff;
    --main-body-color: #222222;
    --main-hover-color: rgb(255, 204, 0);
    --secondary-bg-color: #f4f4f4;
    --border-color: #ddd;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --banner-text-color: rgb(170, 28, 28);
    --menu-text-color: #222222;
    --content-bg-color: var(--secondary-bg-color);
    --content-text-color: var(--main-body-color);
    --list-secondary-color: #888;
    --list-bold-color: rgb(170, 28, 28);
    --link-color: #0073e6;
    --link-hover-color: var(--garnet-color);
}

```

```bash
body {
    font-family: Arial, sans-serif;
    background: 
     url('https://th.bing.com/th/id/R.eeb391b5ff877b807676ba4200dad8a8?rik=WUwaZogL5EADxQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fFree-DownloadBeer-Background.jpg&ehk=fHI8BoHVHOzivuHoFXjz899IzAfv6iKg28SlNhFWEeU%3d&risl=&pid=ImgRaw&r=0') center center fixed;
    margin: 0;
    padding: 0;
    background-size: cover;
    place-items: center;
    transition: color 0.3s ease;
}

.menu a {
    color: var(--menu-text-color);
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 16px;
}

.menu a:hover {
    color: var(--main-hover-color);
}

.content-section {
    margin: 20px;
    padding: 20px;
    background-color: var(--content-bg-color);
    color: var(--content-text-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 10px 10px 20px 10px var(--shadow-color);
    display: block;
}


```

**Example Explanation:**
This example comes from the .css file for the cage website which is demoed in the HTML example above. In this file, we defined several global variables using `:root` which makes it easy to maintain consistent styling across the website. We also used variables like `--main-hover-color` to create interactive changes to the website as the user moved their mouse across things like buttons and links. Finally, we created variables such as `.content-section` and defined key style properties such as margin, padding, background color, etc., to neatly organize the content section of the page when applied. 


### JS (JavaScript)

**Tool Description:**
JavaScript is a tool that brings interactivity and logic to webpages. JS allows for the page to respond to user actions without reloading the page, allowing for things like pop-ups, animations, and dropdown menus. Essentially, JS allows for webpages to go from static to dynamic and interactive. 


See this JS code in action [HERE](https://micahsheats.github.io/JS_examp/js-example/).
```bash
"use strict";

// get box with defined id
const box = document.getElementById("the_box");


// array of colors
let colors = ["red", "green", "purple", "orange", "dodgerblue"]

// count for colors
let count = 0;

// function to change the color of the box to the next color in the array
function recolorBox() {
  box.style.backgroundColor = colors[count];

  //increment count where modulo is used to loop back to the beginning of the array
    count = (count + 1) % colors.length;
}

//recolorBox();
box.addEventListener("click", recolorBox);


// have circle follow mouse
// get circle with defined id
const circle = document.getElementById("the_circle");

// to prevent circle from blocking click events
circle.style.pointerEvents = "none";

// function to handle mousemove event
function handleMouseMove(event) {
    circle.style.left = event.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = event.clientY - circle.offsetHeight / 2 + "px";
}


// get the button with the defined id
const button = document.getElementById("toggleFollowButton");

// variable to check if circle should follow mouse
let followMouse = false;

// add mousemove event listener to the document for following the mouse
function toggleFollowMouse() {
  followMouse = !followMouse;  

  if (followMouse) {
    // allow the circle to follow the mouse anywhere on the screen by attaching the mousemove event listener to the document
    box.removeEventListener("mousemove", handleMouseMove); 
    document.addEventListener("mousemove", handleMouseMove); 
  } else {
    // allow the circle to follow the mouse only inside the box by attaching the mousemove event listener to the box
    document.removeEventListener("mousemove", handleMouseMove);
    box.addEventListener("mousemove", handleMouseMove);
  }
}

// Add event listener to the button to toggle mouse follow
button.addEventListener("click", toggleFollowMouse);

// Initially, add mousemove event listener to the box to constrain circle inside the box
box.addEventListener("mousemove", handleMouseMove);

```

**Example Explanation:**
I chose the above JS example because of how well it demonstrates the interactive behavior on a webpage. It combines event handling, state management, and DOM manipulation in an interactive way. Namely, it uses things like the recolorbox box to change the background color each time it is clicked. It also uses features such as `toggleFollowMouse` to switch whether the circle follows the mouse everywhere or just in the box. Finally, showcases a function that handles mouse movements, where the circle positioning is updated based on the movements of the mouse. 


### ssh & scp (w/ ssh keys)

**Tool Description:**
Secure Shell allows for secure remote access and file transfer. This protocol allows for the user to securely log into a remote computer over a network as if the computer were physically present. This tool uses cryptography and a set of public and private keys to encrypt communications such that it can’t be accessed without the proper keys. 



Key Creation
```bash
% ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/personA/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/personA/.ssh/id_rsa
Your public key has been saved in /Users/personA/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:xgi4mloyWKUGdR/+NVHGLPJSGj+hCDVmSfmTJso0Lpo personA@computerA
The key's randomart image is:
+---[RSA 3072]----+
|  . .oBo  .+o	 |
| . o.=ooo +oo	 |
+----[SHA256]-----+ 
% cd .ssh
% ls
id_rsa       	id_rsa.pub
%
```

Using the key to login
```bash
% cd ~/.ssh
% ls
id_rsa       	id_rsa.pub
% 
% scp id_rsa.pub personA@remote_ip.32.128:
(personA@remote_ip.32.128) Password:
id_rsa.pub     100% 1147 	3.2MB/s   00:00
% ssh personA@remote_ip.32.128
Last login: Sun Sep 24 14:08:37 2023
$
```

**Example Explanation:**
This example showcases generating a secure key pair with ssh in terminal. The command ssh-keygen create a public and private key pair which can then be used in the manner described above. By using SSH, we reduce reliance on passwords and greatly simplify repeated access to remote environments. 


### React (w/ components)

**Tool Description:**
React is a powerful JavaScript library that was developed by Facebook in 2015. This library allows developers to build component-based interfaces, greatly streamlining the development process. In this library, each piece of the UI is stored in reusable components, which are then responsible for rendering a part of the user interface. This modular structure makes codebases easier to build and maintain. 


See this React code example in action [HERE](https://tommo.bates-catapult.net/majorProto2/)

```bash
const CourseDonutChart: React.FC<CourseDonutChartProps> = ({ 
  completedCourses, 
  totalRequired 
}) => {
  const remaining = Math.max(0, totalRequired - completedCourses);
  
  const data = {
    labels: [
      `Completed (${completedCourses})`, 
      `Remaining (${remaining})`
    ],
    datasets: [{
      data: [completedCourses, remaining],
      backgroundColor: [
        '#059669', // Green for completed
        '#e5e7eb'  // Light gray for remaining
      ],
      borderColor: [
        '#ffffff',
        '#ffffff'
      ],
      borderWidth: 2,
      cutout: '70%',
      hoverOffset: 4
    }]
  };
```

**Example Explanation:**
This example comes from our final project, which is a worksheet for potential and current DCS majors to help them understand possible paths to completing the major. I chose this example because it shows component-based design of React with things like the CourseDonutChart, which accepts props(used for passing data), making it reusable anywhere in the app. This example also shows how React can use props to calculate values and update visual representations dynamically. 



### Bootstrap

**Tool Description:**
Bootstrap is a widely used frontend framework that provides developers with pre-designed CSS and JS components such as buttons, menus, and alerts. Its features include a responsive grid system which helps developers to build mobile-friendly sites while avoiding writing exapansive CSS scripts. Bootstrap's open-source library offers out-of-the-box templates and styles that can be easily incorporated into a design. 

See this Bootstrap code example in action [HERE](https://micahsheats.github.io/bootstrap/#)

``` bash
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
```

``` bash
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">Bootstrap Demo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
```

```bash
                <div class="col-md-4">
                    <h5>Button Styles</h5>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary">Primary</button>
                        <button class="btn btn-outline-secondary">Secondary</button>
                        <button class="btn btn-success">Success</button>
                    </div>
```

```bash
        <div class="container">
            <h2 class="text-center mb-5">Bootstrap Components</h2>
            <div class="row g-4">
                <!-- Cards -->
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">Featured Card</div>
                        <div class="card-body">
                            <h5 class="card-title">Card Component</h5>
                            <p class="card-text">Cards are flexible content containers that include options for headers, footers, images, and more.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Open Modal
                            </button>
                        </div>
                    </div>
                </div>

```

**Example Explanation:**
In looking through my work for the semester, I couldn’t find any examples of Bootstrap for this portfolio that I wanted to showcase, so I worked with Copilot to create this demo. In this demo, I exemplify several Bootstrap classes, including navbar, btn, and card, to show how easy it is to make a good-looking site with minimal code. I also show how classes like the buttons can be stylized in different ways to allow for flexibility to get to the specific style you are looking for.


### Tailwind CSS

**Tool Description:**
Tailwind is a utility-first CSS framework that allows you to style elements directly in HTML using predefined classes. This approach to stylization promotes speed and flexibility by bypassing the need to write a custom CSS class for every component.

See full code for these Tailwind CSS examples [HERE](./blob/main/Tailwind_CSS_Example/build/index.html)

``` bash
    <link href="./output.css" rel="stylesheet">
</head>
<body class = "min-h-screen grid place-content-center radial-blue">
    <div class="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center" >
        <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
            <div class="bg-red-500 w-16 h-16 rounded-full"></div>
        </div>
```

```bash
    <div class="card flex-center">
        <button id="toggleDark" 
            class="px-4 py-2 text-sm font-medium mt-8 bg-brightamber rounded-md hover:bg-amber-700 min-w-[100px]"
            onClick="document.body.classList.toggle('dark')"
        >Button</button>
    </div>
    
    <div>
        <details class=" card flex-center mt-4 border rounded-lg overflow-hidden">
                    <summary class="selection:bg-green-500 p-3 text-sm font-medium mt-8 bg-brightamber rounded-md hover:bg-amber-700 min-w-[100px] cursor-pointer">
                        Click to expand
                    </summary>
                    <div class="p-3">
                        <p>hidden content which you can now see.</p>
                    </div>
    
    </div>
```



**Example Explanation:**
To exemplify this, I chose to show code chunks from the Tailwind tutorials completed earlier this semester. These chunks exemplify Tailwind by using the utility classes directly in HTML. Specifically, in the first chunk, you can see that I used the classes `w-52` `h-52` `rounded-full shadow-2xl` `grid` and `place-content-center` to create a centered layout with colors and shadows with minimal code and documents. In the second chunk, I used Tailwind to create a button that changes colors when the user hovers over it, as well as a stylized expandable section with hidden text. 


### ShadCN/UI

**Tool Description:**
ShadCN/UI is a component library built for React using Tailwind CSS and Radix Primatives. The library provides well-designed and accessible components for UI development, which follow modern design principles and can be easily implemented into a website.

```bash
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4">
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default Size</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com" target="_blank">Link Button</a>
        </Button>
        <Button className="w-32" variant="secondary" disabled>
          Processing...
        </Button>
      </div>
    </div>
  )
}
```


**Example Explanation:**
Similar to the Bootstrap example, I didn’t like any of my previous creations with ShadCN, so I worked with Copilot to create this example. In this, I exemplify the ShadCN button designs. This example shows how these buttons are both reusable and customizable in that we can easily change the style. They are also flexible as they can accept props such as `variant` and `size`. Finally, this example shows the Tailwind styling with “className=" flex flex-col items-center justify-center min-h-svh gap-4"” which is a key part of design with ShadCN. 



### Design for user experience (Krug)

**Description:**
Throughout the semester, we read Steven Krug's book Design for User Experience. This book discusses principles that should be followed in website design so as to allow the user to navigate it without confusion or unnecessary clicks. 


Find my full reading notes [HERE](/Users/micahsheats/Desktop/DCS325Final-1/Krug Reading Notes/Sheats_Dont Make Me Think Reading Notes (2).pdf)

![Krug example](./Krug Reading Notes/krug.png)

These principles were best applied when we created our final project: a worksheet for potential and current DCS majors. This site exemplifies the principles of the book by being intuitive to the user and not making the user think anymore than they need to in order to navigate the site. We did this by putting the information in a logical order, breaking the page up into clearly defined hierarchies, having all parts of the site no more than one or two clicks away from the index, and providing brief and unavoidable guidance when it was necessary and relevant such as the warnings when a class could only be used to fufuill two of the four methods but was catagorized under more. 





### Accessibility

**Description:**

Programming for ccessibility ensures that websites are usable by people with disabilities or assistive technologies. There are several ways in which we incorporated programming for accessibility throughout the course, including semantic HTML, alternate text for images, keyboard navigation support so that someone with limited or no mouse capabilities can tab through the site, screenreader labels, and ARIA attributes.  

**Using the Colorblindly Chrome extension to test our final project:**

![Image of Colorblindly](./Accessability_Example/colorblindly.png)


**Example Explanation:**
One way in which I included accessibility into my programming in this class was by using the Colorblindly Chrome Extension to ensure that my sites were usable for people with color blindness. This extension simulates what looking at the site would be like with different color blindnesses. This is helpful because I can see if there is a problem with a visualization, such that a colorblind person would not be able to use our site to the same extent as a person who is not colorblind could. 


### Figma

**Tool Description:**
Figma is a design and prototyping tool used to create wireframes, UI mockups, and interactive prototypes. Through this site, developers can collaborate in real time to plan layouts and website designs before actually coding. 


![Figma example](./Figma_Example/figma.png)



**Example Explanation:**
One way that I used Figma this semester was to create a mockup of our final project before coding it. Through this prototype, my team and I were able to discuss and uncover optimal flows for the user interface to make it as seamless as possible of an experience for the user. The biggest influence this process had on the final site is that through this prototyping, we decided to include hover pop-ups with pre-requisites and course descriptions, which became one of the main attractions of our site by the presentation of our final product.




### Cursor

**Tool Description:**
Cursor is an AI-powered code editor with built-in AI tools for code generation and debugging using natural language prompts. This can greatly improve coding speeds through AI explanations of what code is doing, suggestions on how to debug it, and even editing it when in “agent” mode. 

``` bash
import React, { useState, useEffect, useCallback } from "react";

type Position = {
  x: number;
  y: number;
};

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

export const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    generateFood();
    setIsPlaying(true);
  };
  
  ```
  
Image of the site build by cursor:
![Image of the site built by Cursor](./Cursor%20Example/cursorsite.png)


**Example Explanation:**
The above example is a website that I built solely through prompts to the cursor. When building this, Cursor was able to take an image of the Apple Store home screen and apply the style to the site, as well as include a fully functional game of Snake. In total, the site took probably 10 minutes to complete, far less than if I were to build it myself. 





### Google Firebase for backend

**Tool Description:**

Google Firebase is a Backend Service platform which offers services including authentication, cloud storage, real-time databases, and hosting. It allows frontend developers to add their own backend services without having to deal with the complex issues that come with managing your own server infrastructure. 


```bash
npm install firebase
```

```bash

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTLNGfp_9625aWfXjVfbkgS0lNdI2zmok",
  authDomain: "test-63c82.firebaseapp.com",
  projectId: "test-63c82",
  storageBucket: "test-63c82.firebasestorage.app",
  messagingSenderId: "319192943768",
  appId: "1:319192943768:web:6425c8efd02805910b14ed",
  measurementId: "G-X9GYZ0HNML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

```

**Example Explanation:**
This code is what is used to connect the web app on the front end to Google Firebases backend. This connection allows for things like authentication and analytics in a project, which can be useful from real-time user analytics to training AI models. 




## Reflection Questions
##### What was your experience in using React+Vite for building web apps compared to "rolling your own" using HTML, CSS, & JavaScript?

- I enjoyed both in separate ways. First, I enjoyed rolling out my own because it was relatively intuitive, as we had to learn and build everything from the ground up. I also enjoyed using React, however, because of the automated aspect and pre-packaged things we could use to make the website look good. React was also much harder for me to understand, however, so that was a negative because it caused much more stress. In all, though, I would definitely trend towards a React app should I try to build something after this class.  



##### What are the primary takeaways you had from reading Krug's book and your corresponding analysis of sites?
- The primary takeaways that I had from reading the book was that people who are using websites really do not want to think. As such, your website should be as intuitive as it can possibly be for the best UX. Furthermore, people are not reading everything on your website, they are skimming, so it is generally best to make the website skimmable. Finally, it is important to give the user the sense of whether they are on the right track or not. Do not use many words when few will do, and do not give the user too many options at one time.


##### What is the importance of accessibility (give a few explicit examples), and what steps can (and should) you take in assessing the accessibility of your site?

- Accessibility is important because, as developers, we want everybody to be able to use the website regardless of impairments. Specifically, if someone can’t use their mouse, they should be able to navigate our site by using the tab key. If someone is blind, they should be able to use a screen reader to interpret what is on the page, including images, which should have alt text. And if someone is colorblind, they should still be able to differentiate the colors in visualization through us using colorblind friendly colors. 


##### In what ways did the different design sprints, and use of Figma, help you in thinking about what an end product should look like and how it should function?

- The design sprints and Figma were great for solidifying ideas before beginning to code. Coding often feels very intimidating to me, so having a plan going in of exactly what needs to be done and what the final product should look like was really helpful for overcoming that. Furthermore, creating the prototypes gave us time to discuss concepts and flesh out ideas rather than having to make adjustments in the middle of creating the actual product. 


##### What takeaways do you have from working with AI/LLMs through Cursor (or similar) in building web applications?

- The main takeaway from using LLMs is that they quickly becoming a great tool for coding. It was very impressive to watch Cursor create an entire working site in a couple of minutes with minimal guidance. However, it also highlighted the importance of knowing how the code actually works because there were several times throughout the semester where Copilot or Cursor would get stuck going in circles when in reality the problem was as simple as a parenthesis imbalance or an undefined variable. 


##### What was your favorite thing (or deemed most useful) that we covered this semester, and why?

- The favorite thing that I learned this semester was the basics of how the development works in terms of tools, workflows, and team environments. I don’t have any plans to go into a coding-heavy web design role right now, but I will likely work alongside some teams with this focus after college. I think that having a basic understanding of what is going on in their process and with their team could prove incredibly helpful in communicating with them and achieving the goals of everyone involved.


##### What do you wish we had covered, or had covered in more detail, and why?

- One thing that I wish we had covered in more detail is React. While the tutorial was definitely helpful, it was a lot of information all at once, and it would have been very helpful to have a bit slower of an introduction to the library and all the things/processes that surround it. 



