const card=document.querySelector("div")
card.id="butterfly"
card.innerHTML=`<img src="https://www.shutterstock.com/image-photo/photo-day-2024-beautiful-butterfly-600nw-2496391053.jpg" width="300">
<p>Butterfly</p>
<button>Explore more</button>`
card.style.border="2px solid black"
card.style.backgroundColor="grey"
card.style.display="inline-block"
card.style.padding="10px"
card.style.gap="10px"


const card1=document.querySelector("span")
card1.id="spring"
card1.innerHTML=`<img src="https://media.istockphoto.com/id/674833094/photo/cherry-tree-blossom.jpg?s=612x612&w=0&k=20&c=Mcdqod2YZRzIbP3juutyYe2warEFMWHrBsvOoB1xFAc=" width="300">
<p>spring</p>
<button>Explore more</button>`
card1.style.border="2px solid black"
card1.style.backgroundColor="grey"
card1.style.display="inline-block"
card1.style.padding="10px"
card.style.gap="10px"
document.body.appendChild(card1)

const newcard=document.createElement("div")
newcard.id="camera"
newcard.innerHTML=`<img src="https://pixlr.com/images/generator/how-to-generate.webp" width="300">
<p>camera</p>
<button>Explore more</button>`
newcard.style.border="2px solid black"
newcard.style.backgroundColor="grey"
newcard.style.display="inline-block"
newcard.style.padding="10px"
card.style.gap="10px"
document.body.appendChild(newcard)


const newcard1=document.createElement("span")
newcard1.id="water"
newcard1.innerHTML=`<img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/chinafalls1.jpg?w=1024&h=681p" width="300">
<p>water</p>
<button>Explore more</button>`
newcard1.style.border="2px solid black"
newcard1.style.backgroundColor="grey"
newcard1.style.display="inline-block"
newcard1.style.padding="10px"
card.style.gap="10px"
document.body.appendChild(newcard1)