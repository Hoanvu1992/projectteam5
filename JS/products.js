let products = {
  data: [
    {
      image:
        "../../Image/products/tivi-led-asanzo-32-inch-32at130-1-300x300.jpeg",
      name: "LED 32 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image:
        "../../Image/product_led/tivi-led-Asanzo-43T660-anh-dai-dien-2-300x300.jpeg",
      name: "LED 43 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/product_led/Tivi-Asanzo-50-inch-50E890-300x300.png",
      name: "LED 50 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/product_led/Tivi-Asanzo-50-inch-50E890-300x300.png",
      name: "LED 55 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image:
        "../../Image/product_led../../../Image/product_led/LED-CHAN-DUNG-300x300.png",
      name: "LED CHÂN ĐỨNG",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/product_led/LED-CHAN-QUY-600x600.png",
      name: "LED CHÂN QUỲ",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/products/videowall-55-300x300.png",
      name: "MÀNG HÌNH GHÉP TV 40 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/products/videowall-43-INCH-300x300.jpeg",
      name: "MÀNG HÌNH GHÉP TV 43 INCH",
      retail: "./Product_retail/product_retail.html",
    },
    {
      image: "../../Image/products/videowall-50-INCH-300x300.png",
      name: "MÀNG HÌNH GHÉP TV 50 INCH",
      retail: "./Product_retail/product_retail.html",
    },
  ],
};

function create_element(tag_name, attributes) {
  let element = document.createElement(tag_name);

  if (attributes) {
    for (let key in attributes) {
      element[key] = attributes[key];
    }
  }
  return element;
}
// biến để test hàm create_element
// let div = create_element("div", {
//   className: "test",
//   innerText: " abc",
// });

// console.log(div);

function display_product(data) {
  for (let product of data) {
    // console.log(product.image);
    // console.log(product.name);
    // console.log(product.inputText);
    let div_card = create_element("div", {
      className: "card",
    });

    let div_image_container = create_element("div", {
      className: "image-container",
    });

    let image = create_element("img", {
      src: product.image,
    });

    let div_container = create_element("div", {
      className: "container",
    });

    let h5_name = create_element("h5", {
      className: "product-name",
      innerText: product.name,
    });

    let a_link = create_element("a", {
      className: "product-link",
      innerText: "ĐỌC TIẾP",
      href: product.retail,
    });
    div_image_container.appendChild(image);
    div_container.appendChild(h5_name);
    div_container.appendChild(a_link);
    div_card.appendChild(div_image_container);
    div_card.appendChild(div_container);

    document.getElementById("list_products").appendChild(div_card);
  }
}

display_product(products.data);

// modal
const productRetail = document.getElementsByClassName("product-link");
console.log("product-link");

// const myModal = document.getElementById("myModal");
// const myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", () => {
//   myInput.focus();
// });
