/*

I kind of wanna do a typing text thing for the "I spend 6hrs on Instagram" + JSON for the videos and stuff to learn more




*/

//Importing HTML elements//
document.addEventListener("DOMContentLoaded", function() {
  importJSON = document.getElementById("importDiv");
}

)

//Creating JSON database//

let jsonDatabase =  [
{
  "title": "The Social Dilemma",
  "type" : "Film & TV (Documentary)",
  "image" : "https://miro.medium.com/max/1200/1*ijRQhopKew_RB358PA9-yA.jpeg",
},

{
  "title": "We Live In Public",
  "type" : "Film & TV (Documentary)",
  "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/We_Live_in_Public_poster.jpg/220px-We_Live_in_Public_poster.jpg",
},

{
  "title": "Black Mirror",
  "type" : "Film & TV (Fiction)",
  "image" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=480:*",
},

{
  "title": "How Gabbie Hanna Destroyed Her Career (Created by Cruel World Happy Mind)",
  "type" : "YouTube (Video Essay)",
  "image" : "https://github.com/samhatesham5/JSONProject/blob/main/images/gabbie-hanna.png?raw=true",
},

{
  "title": "The Never-Ending Nightmare of Nikocado Avocado - From Vegan to Villian (Created by The Right Opinion)",
  "type" : "Youtube (Video Essay)",
  "image" : "https://github.com/samhatesham5/JSONProject/blob/main/images/nick-avacado.png?raw=true",
},

{
  "title": "Jaron Lanier: How The Internet Failed and How To Recreate It",
  "type" : "YouTube (Talk Delievered at UC Santa Cruz)",
  "image" : "https://github.com/samhatesham5/JSONProject/blob/main/images/jared-image.png?raw=true",
},

];


//Using for loop to pull out stuff from database//

for (let i = 0; i < jsonDatabase.length; i++) {
  newElements(jsonDatabase[i]);
}

//Injecting elements into the page//

function newElements(jsonDatabase){
  //DIV//
  let newDiv = document.createElement("DIV")
  newDiv.classList.add("newDiv")
  let innerDiv = document.createElement("DIV")
  innerDiv.classList.add("innerDiv")

  //Text//

  let newHeader = document.createElement("H2")
  newHeader.innerText = jsonDatabase['title']

  let newParagraph = document.createElement("P")
  newParagraph.innerText = jsonDatabase ['type']
  innerDiv.appendChild(newHeader)
  innerDiv.appendChild(newParagraph)
  newDiv.appendChild(innerDiv)


  //IMG//

  let jsonImage = document.createElement("IMG")
  jsonImage.classList.add("jsonImage")
  jsonImage.src = jsonDatabase['image']
  newDiv.appendChild(jsonImage)

  //Append child//
  importJSON.appendChild(newDiv)
};
