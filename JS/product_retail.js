let retails = {
  data: [
    {
      image: "../../../Image/products/32.png",
      name: "TV ASANZO 32 INCH",
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

function retail_product(data) {
  for (let retail of data) {
    let div_retail = create_element("div", {
      className: "d-flex mt-5 pt-5 border-bottom border-1",
    });

    let image = create_element("img", {
      src: retail.image,
    });

    let span = create_element("span", {
      className: "ms-3",
    });
    let p_text = create_element("p", {
      className: "pb-4 fw-bolder",
      innerText: retail.name,
    });

    let a_like = create_element("a", {
      href: "",
    });

    let i_like = create_element("i", {
      className:
        "fa-solid fa-thumbs-up bg-primary text-white px-2 py-1 me-1 rounded",
      innerText: " Like",
    });

    let a_share = create_element("a", {
      href: "",
    });
    let i_share = create_element("i", {
      className: "fa-solid fa-share bg-primary text-white px-2 py-1 rounded",
      innerText: " Share",
    });

    span.appendChild(p_text);
    a_like.appendChild(i_like);
    a_share.appendChild(i_share);
    span.appendChild(a_like);
    span.appendChild(a_share);
    div_retail.appendChild(image);
    div_retail.appendChild(span);

    document.getElementById("retails_product").appendChild(div_retail);
  }
}

retail_product(retails.data);
