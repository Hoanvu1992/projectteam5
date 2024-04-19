let products = {
  data: [
    {
      image: "../../../Image/products/may-chieu-ngoai-troi-600x600.jpeg",
      name: "MÁY CHIẾU NGOÀI TRỜI",
      retail: "../Product_retail/product_retail.html",
    },
    {
      image: "../../../Image/products/may-chieu-trong-nha-600x600.jpeg",
      name: "MÁY CHIẾU TRONG NHÀ",
      retail: "../Product_retail/product_retail.html",
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

    let a = create_element("a", {
      className: "product-link",
      innerText: "ĐỌC TIẾP",
      href: product.retail,
    });
    div_image_container.appendChild(image);
    div_container.appendChild(h5_name);
    div_container.appendChild(a);
    div_card.appendChild(div_image_container);
    div_card.appendChild(div_container);

    document.getElementById("list_products").appendChild(div_card);
  }
}

display_product(products.data);
