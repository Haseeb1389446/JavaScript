var cards = [
    {
        img : "img/c1.jpg",
        title : "NATURE",
        rate : "img/s3.png",
        price : "$999.99"
    },
    {
        img : "img/c2.jpg",
        title : "GOKU",
        rate : "img/s1.png",
        price : "$809.08"
    },
    {
        img : "img/c3.jpg",
        title : "RUSH OUR",
        rate : "img/s2.png",
        price : "$705.05"
    },
    {
        img : "img/c1.jpg",
        title : "NATURE",
        rate : "img/s3.png",
        price : "$999.99"
    },
    {
        img : "img/c2.jpg",
        title : "GOKU",
        rate : "img/s1.png",
        price : "$809.08"
    },
    {
        img : "img/c3.jpg",
        title : "RUSH OUR",
        rate : "img/s2.png",
        price : "$705.05"
    },
    {
        img : "img/c1.jpg",
        title : "NATURE",
        rate : "img/s3.png",
        price : "$999.99"
    },
    {
        img : "img/c2.jpg",
        title : "GOKU",
        rate : "img/s1.png",
        price : "$809.08"
    },
    {
        img : "img/c3.jpg",
        title : "RUSH OUR",
        rate : "img/s2.png",
        price : "$705.05"
    },
    {
        img : "img/c1.jpg",
        title : "NATURE",
        rate : "img/s3.png",
        price : "$999.99"
    },
    {
        img : "img/c2.jpg",
        title : "GOKU",
        rate : "img/s1.png",
        price : "$809.08"
    },
    {
        img : "img/c3.jpg",
        title : "RUSH OUR",
        rate : "img/s2.png",
        price : "$705.05"
    }

]


for (let i = 0; i < cards.length; i++) {
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
    <button><a href="detail.html?id=${i}">click</button></a>
</div>
</div>`
}