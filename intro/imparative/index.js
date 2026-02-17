// div element
const rootDiv = document.getElementById("root");

//creating h1 inside the rootDiv
const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = "Hello React";

//creating para inside rootDiv
const paragraph = document.createElement("p");
paragraph.className = "para";
paragraph.textContent = "welcome to your first session";

//creating button inside rootDiv
const learnMorebtn = document.createElement("button");
learnMorebtn.className = "btn";
learnMorebtn.textContent = "learn more.....";

//appending created elements to the rootDiv
rootDiv.append(heading);
rootDiv.append(paragraph);
rootDiv.append(learnMorebtn);
