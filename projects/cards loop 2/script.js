
var cards = [
    {
        img : "img/c1.jpg",
        title : "nature"
    },
    {
        img : "img/c2.jpg",
        title : "Goku"
    },
    {
        img : "img/c3.jpg",
        title : "Rush our"
    },
    {
        img : "img/c1.jpg",
        title : "nature"
    },
    {
        img : "img/c2.jpg",
        title : "Goku"
    },
    {
        img : "img/c3.jpg",
        title : "Rush our"
    },
    {
        img : "img/c1.jpg",
        title : "nature"
    },
    {
        img : "img/c2.jpg",
        title : "Goku"
    },
    {
        img : "img/c1.jpg",
        title : "nature"
    },
    {
        img : "img/c2.jpg",
        title : "Goku"
    },
    {
        img : "img/c1.jpg",
        title : "nature"
    },
    {
        img : "img/c2.jpg",
        title : "Goku"
    },
    {
        img : "img/c3.jpg",
        title : "Rush our"
    }
]




// loop

for (var i = 0; i < cards.length; i++){
    document.getElementById("cards").innerHTML += `<div class="card">
    <div class="img">
        <img src="${cards[i].img}" alt="">
    </div>
    <div class="content">
    <h1>${cards[i].title}</h1>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus quaerat inventore accusamus maxime
        praesentium doloribus alias cum. Fugit eos magni consectetur assumenda, voluptatibus ipsa recusandae
        consequuntur saepe? Eveniet, minus?</p>
</div>
<div class="btn">
    <button>click</button>
</div>
</div>`
}