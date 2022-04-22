const findButton = document.getElementById("findbtn");

findButton.addEventListener("click", (event) => {
  event.preventDefault();
  const brand = document.getElementById("brands").value;
  console.log(brand);
  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((product) => {
        const parentDiv = document.getElementById("item");
        const productDiv = document.createElement("div");
        const titleElement = document.createElement("h6");
        const imageElement = document.createElement("img");
        const descriptionElement = document.createElement("p");
        const priceElement = document.createElement("h5");
        const priceButton = document.createElement("button");
        const productLink = product.product_link;

        titleElement.innerText = product.name;
        productDiv.appendChild(titleElement);
        parentDiv.appendChild(productDiv);
        productDiv.appendChild(imageElement);
        productDiv.appendChild(descriptionElement);
        productDiv.appendChild(priceElement);
        descriptionElement.innerText = product.description;

        imageElement.setAttribute("src", product.image_link);
        const price = Math.round(product.price * 100);
        priceElement.innerText = `Ksh. ${price}`;
        imageElement.className = "productImage";
        priceElement.className = "price";
        productDiv.className = "productDiv";
        descriptionElement.className = "description";

        priceElement.addEventListener("click", () => {
          window.open(productLink);
        });

        let form = document.getElementById("form");
        let top = document.getElementById("top");

        if (form.style.display !== "none" && top.style.display !== "none") {
          form.style.display = "flex";
          top.style.display = "flex";
        } else {
          form.style.display = "none";
        }
      });
    });
});

let popup = document.getElementById("popup");
let popupButton = document.getElementById("popbtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (popup.style.display !== "none") {
    popup.style.display = "block";
  }
  setTimeout(() => form.reset(), 3000);
});

popupButton.addEventListener("click", () => {
  popup.remove();
});
