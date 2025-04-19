




### HTML 
See this HTML code in action HERE


**Tool Description:**


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
---

### CSS (Cascading Sheet Style)

See full CSS file used for The Cage Website HERE


**Tool Description:**

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



### JS (JavaScript)

See this JS code in action HERE

**Tool Description:**

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


### ssh & scp (w/ ssh keys)

**Tool Description:**


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




### React (w/ components)

**Tool Description:**

See this React code example in action HERE

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



### Bootstrap

**Tool Description:**

See this bootstrap code example in action HERE

```bash
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

```

```bash
<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="https://www.bates.edu">
      <img
        src="./src/images/bobcat.png"
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      ...
    </Navbar.Collapse>
  </Container>
</Navbar>
```


### Tailwind CSS

``` bash

<body class="min-h-screen bg-white dark:bg-slate-900 p-6">
    <!-- Header Section with Dark Mode Toggle -->
    <header class="max-w-screen container mx-4 flex justify-between items-center">
        <h1 class="text-xl font-extrabold text-slate-900 dark:text-white">Tailwind CSS Demo</h1>
        <button id="toggleDark" 
            class="px-4 py-2 text-sm font-medium bg-brightamber rounded-md hover:bg-amber-700 transition-colors duration-200"
            onClick="document.body.classList.toggle('dark')"
        >Toggle Dark Mode</button>
    </header>

    <!-- Main content -->
    <main class="container mx-auto mt-8">
        <!-- Section 1: Responsive Grid Layout -->
        <section class="mb-12">
            <div class="card">
                <h2 class="text-lg font-medium text-slate-900 dark:text-white mb-4">1. Responsive Grid Layout</h2>
                <p class="mb-4">Tailwind makes creating responsive layouts simple using breakpoint prefixes.</p>
                
                <!-- Responsive grid that changes from 1 column on mobile to 3 columns on desktop -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div class="bg-teal-200 dark:bg-teal-200/50 p-6 rounded-lg shadow">
                        <h3>Card 1</h3>
                        <p>This grid automatically adjusts based on screen size.</p>
                    </div>
                    <div class="bg-teal-200 dark:bg-teal-200/50 p-6 rounded-lg shadow">
                        <h3>Card 2</h3>
                        <p>On mobile, cards stack vertically.</p>
                    </div>
                    <div class="bg-teal-200 dark:bg-teal-200/50 p-6 rounded-lg shadow">
                        <h3>Card 3</h3>
                        <p>On desktop, they display in a row.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Custom Components with Tailwind -->
        <section class="mb-12">
            <div class="card">
                <h2 class="text-lg font-medium text-slate-900 dark:text-white mb-4">2. Custom Components</h2>
                <p class="mb-4">We can create reusable components with Tailwind's utility classes.</p>
                
                <!-- Using the custom card component defined in our CSS -->
                <div class="flex flex-wrap gap-4 mt-6">
                    <div class="flex-center p-6 bg-emerald-500 rounded-lg w-32 h-32 shadow-2xl">
                        <span class="text-white">Flex Center</span>
                    </div>

                    <div class="flex-center p-6 bg-red-500 rounded-lg w-32 h-32 shadow-2xl">
                        <span class="text-white">Utility</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Dark Mode Support -->
        <section class="mb-12">
            <div class="card">
                <h2 class="text-lg font-medium text-slate-900 dark:text-white mb-4">3. Dark Mode Support</h2>
                <p class="mb-4">Tailwind makes implementing dark mode simple with the dark: variant.</p>
                
                <div class="rounded-lg border border-gray-300 dark:border-gray-600 p-6 mt-6">
                    <h3>Automatic Dark Mode</h3>
                    <p>This example uses the 'dark' class toggle. In a real application, you can also use the 'media' strategy to respond to system preferences.</p>
                    
                    <div class="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                        <p class="text-slate-900 dark:text-white">This content automatically adapts to dark mode.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Custom Utilities and Theme Extension -->
        <section class="mb-12">
            <div class="card">
                <h2 class="text-lg font-medium text-slate-900 dark:text-white mb-4">4. Custom Utilities and Colors</h2>
                <p class="mb-4">Tailwind allows extending the default theme with custom colors and utilities.</p>
                
                <div class="mt-6 space-y-4">
                    <!-- Custom color from theme extension -->
                    <div class="p-4 bg-brightamber rounded-md">
                        <p>This uses our custom brightamber color defined in the theme.</p>
                    </div>
                    
                    <!-- Custom utility class -->
                    <div class="p-4 radial-blue rounded-md">
                        <p>This uses our custom radial-blue utility class.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Advanced Features -->
        <section class="mb-12">
            <div class="card">
                <h2 class="text-lg font-medium text-slate-900 dark:text-white mb-4">5. Interactive Elements</h2>
                <p class="mb-4">Tailwind makes it easy to style interactive components with state variants.</p>
                
                <!-- Accordion using details/summary with Tailwind styling -->
                <details class="mt-4 border rounded-lg overflow-hidden">
                    <summary class="selection:bg-green-500 p-3 text-sm font-medium bg-brightamber rounded-md hover:bg-amber-700 cursor-pointer">
                        Click to expand this accordion
                    </summary>
                    <div class="p-4 bg-white dark:bg-black">
                        <p>This uses the native details/summary elements with Tailwind styling.</p>
                        <p class="mt-2">Note how we use the selection: variant to style the text selection.</p>
                    </div>
                </details>

                <!-- Button with various states -->
                <div class="mt-6">
                    <button class="px-4 py-2 bg-brightamber hover:bg-amber-700 active:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brightamber rounded-md transition-colors">
                        Interactive Button
                    </button>
                    <p class="mt-2 text-sm text-slate-500 dark:text-blue-100">
                        Try hovering, focusing, and clicking this button to see different states.
                    </p>
                </div>
            </div>
        </section>
    </main>

</body>

<body class = "min-h-screen grid place-content-center radial-blue">
    <div class="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center" >
        <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
            <div class="bg-red-500 w-16 h-16 rounded-full"></div>
        </div>
    </div>
</body>
```



### ShadCN/UI

```bash
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
```
```bash
export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
```



### Design for user experience (Krug)



### Accessibility




### Figma



### Cursor




### Google Firebase for backend



































