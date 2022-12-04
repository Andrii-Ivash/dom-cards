const body = document.body;

const div = document.createElement("div");
const img = document.createElement("img");
const title = document.createElement("h1");
const p = document.createElement("p");
const btn = document.createElement("button");


const div2 = document.createElement("div");
const img2 = document.createElement("img");
const title2 = document.createElement("h1");
const p2 = document.createElement("p");
const btn2 = document.createElement("button");

const div3 = document.createElement("div");
const img3 = document.createElement("img");
const title3 = document.createElement("h1");
const p3 = document.createElement("p");
const btn3 = document.createElement("button");

body.appendChild(div);
div.appendChild(img);
div.appendChild(title);
div.appendChild(p);
div.appendChild(btn);

body.appendChild(div2);
div2.appendChild(img2);
div2.appendChild(title2);
div2.appendChild(p2);
div2.appendChild(btn2);

body.appendChild(div3);
div3.appendChild(img3);
div3.appendChild(title3);
div3.appendChild(p3);
div3.appendChild(btn3);

title.textContent = "Twitter";
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum tenetur laudantium unde nulla optio repudiandae nam tempora nostrum! Inventore, obcaecati? Eveniet architecto tempora voluptates voluptatibus vero nihil labore veniam!";
btn.textContent = "Read more";

title2.textContent = "Instagram";
p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum tenetur laudantium unde nulla optio repudiandae nam tempora nostrum! Inventore, obcaecati? Eveniet architecto tempora voluptates voluptatibus vero nihil labore veniam!";
btn2.textContent = "Read more";

title3.textContent = "Youtube";
p3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum tenetur laudantium unde nulla optio repudiandae nam tempora nostrum! Inventore, obcaecati? Eveniet architecto tempora voluptates voluptatibus vero nihil labore veniam!";
btn3.textContent = "Read more";

img.src = "https://cdn-icons-png.flaticon.com/512/733/733635.png";
img.alt = "image";
img.width = 60;
img.height = 60;

img2.src = "https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-1200x1199.png";
img2.alt = "image";
img2.width = 60;
img2.height = 60;

img3.src = "https://cdn-icons-png.flaticon.com/512/717/717426.png";
img3.alt = "image";
img3.width = 60;
img3.height = 60;

body.setAttribute(
    "style",
    "display: flex; align-items: center; justify-content: center; gap: 3rem; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
);

// div
div.setAttribute(
    "style",
    "border: 3px solid black; border-radius: 5px; width: 15%; text-align: center; padding: 30px 20px"
);

title.setAttribute(
    "style",
    "text-transform: uppercase; font-weight: bold;"
);

btn.setAttribute(
    "style",
    "text-transform: uppercase; background: black; color: white; padding: 10px 50px; border: none; border-radius: 20px; width: 100%; cursor: pointer; transition: .4s"
);

// div2
div2.setAttribute(
    "style",
    "background: #e75480; border: 3px solid #e75480; color: white; border-radius: 5px; width: 15%; text-align: center; padding: 30px 20px"
);

title2.setAttribute(
    "style",
    "text-transform: uppercase; font-weight: bold;"
);

btn2.setAttribute(
    "style",
    "text-transform: uppercase; background: white; color: #e75480; padding: 10px 50px; border: none; border-radius: 20px; width: 100%; cursor: pointer; transition: .4s"
);

// div3
div3.setAttribute(
    "style",
    "border: 3px solid black; border-radius: 5px; width: 15%; text-align: center; padding: 30px 20px"
);

title3.setAttribute(
    "style",
    "text-transform: uppercase; font-weight: bold;"
);

btn3.setAttribute(
    "style",
    "text-transform: uppercase; background: black; color: white; padding: 10px 50px; border: none; border-radius: 20px; width: 100%; cursor: pointer; transition: .4s"
);

//btns hover
btn.addEventListener("mouseover", function() {
    btn.style.transform = `scale(1.1)`;
});

btn.addEventListener("mouseout", function() {
    btn.style.transform = `scale(1)`;
});

btn2.addEventListener("mouseover", function() {
    btn2.style.transform = `scale(1.1)`;
});

btn2.addEventListener("mouseout", function() {
    btn2.style.transform = `scale(1)`;
});

btn3.addEventListener("mouseover", function() {
    btn3.style.transform = `scale(1.1)`;
});

btn3.addEventListener("mouseout", function() {
    btn3.style.transform = `scale(1)`;
});