// Age calculator
const age_cal_form = document.getElementById("age-cal-form");
const result = document.getElementById("age-result");

    result.style.display = 'none';

age_cal_form.onsubmit = (e) => {
    e.preventDefault();
    let b_time = document.getElementById("bod").value;
    let bod = new Date(b_time).getTime();

    let date = new Date().getTime();
    let time_diff = date - bod;

    let seconds = time_diff / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let day = hours / 24;
    let month = day / 30;
    let year = month / 12;

    let age_year = Math.floor(year);
    let age_month = Math.floor((year * 12) % 12);
    let age_day = Math.floor((year * 12 * 30) % 30);
    let age_hours = Math.floor((year * 12 * 30 * 24) % 60);
    let age_minutes = Math.floor((year * 12 * 30 * 24 * 60) % 60);
    let age_seconds = Math.floor((year * 12 * 30 * 24 * 60 * 60) % 60);


    result.style.display = 'block';
    if (b_time == "") {
        result.innerHTML = `<p class="alert alert-danger">Input your birth date </p>`;
    } else{
        result.innerHTML = `Your age: ${age_year} years ${age_month} months ${age_day} days <br>
        ${age_hours} hours ${age_minutes} minutes ${age_seconds} seconds`;
    }
};










// - Product with LS

const add_pro_form = document.getElementById("add-pro-form");

add_pro_form.addEventListener("submit", function (e) {
    e.preventDefault();
});

const products = [
    {
        title: "Stylish dress shirt formal button down men ",
        image: "https://sc04.alicdn.com/kf/U8b063eb3c0f14aecb4e511084a98378dI.jpg",
        discount: 10,
        r_price: 50,
        s_price: 30,
    },
    {
        title: "T-shirt style",
        image: "https://rukminim1.flixcart.com/image/332/398/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50",
        discount: 5,
        r_price: 60,
        s_price: 55,
    },
    {
        title: "Latest cotton long sleeve shirt casual ",
        image: "https://sc04.alicdn.com/kf/Hd037b09ddfb84088a08a2d08b3d038daM.jpg",
        discount: 2,
        r_price: 50,
        s_price: 30,
    },
    {
        title: "T-shirt",
        image: "https://rukminim1.flixcart.com/image/332/398/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50",
        discount: 20,
        r_price: 120,
        s_price: 100,
    },
];
sendData("product", products);

const add_pr_btn = document.getElementById("add-pro-btn");
const close_add_btn = document.getElementById("close-add-pro-form");
const add_product_form = document.querySelector(".add-product-form");
const product_show = document.getElementById("product-show");

add_pr_btn.addEventListener("click", function () {
    add_product_form.style.display = "block";
});
close_add_btn.addEventListener("click", function () {
    add_product_form.style.display = "none";
});

let getData = localStorage.getItem("product");
let pro_arr = JSON.parse(getData);

pro_arr.map((data) => {
    product_show.innerHTML += `
    <div class="col-lg-3 mt-2">
    <div class="product-content">
      <div class="card">
        <p class="discount">${data.discount}%</p>
        <img class="card-image img-fluid" src="${data.image}"  alt="">
        <div class="card-body">
          <h3 class="pro-title">${data.title}</h3>
          <p>Regular price: <span id="r_price">$${data.r_price}</span></p>
          <p>Sale price: <span id="s_price">$${data.s_price}</span></p>
          <button class="btn btn-success mt-3"> Add to cart</button>
        </div>
      </div>
    </div>
  </div>
    `;
});

// Team member with LS

const members = [
    {
        title: "Nat Reynolds",
        image: "./img/1 (1).jpg",
        department: "FINANCIAL DIRECTOR",
    },
    {
        title: "Celia Almeda",
        image: "./img/1 (2).jpg",
        department: "ADVERTISING MANAGER",
    },
    {
        title: "Frank Kinney",
        image: "./img/1 (3).jpg",
        department: "SALES MANAGER",
    },
];
sendData("member", members);
const team_mem_show = document.querySelector(".team-show");
const add_mem_form = document.querySelector(".add-mem-form");
const add_mem_btn = document.getElementById("add-mem-btn");
const close_mem_btn = document.getElementById("close-add-mem-form");

add_mem_btn.addEventListener("click", function () {
    add_mem_form.style.display = "block";
});
close_mem_btn.addEventListener("click", function () {
    add_mem_form.style.display = "none";
});

add_mem_form.addEventListener("submit", function (e) {
    e.preventDefault();
});

let getMemData = localStorage.getItem("member");
let mem_arr = JSON.parse(getMemData);

mem_arr.map((data) => {
    team_mem_show.innerHTML += `
<div class="col-lg-4">
<div class="team-member card">
    <img src="${data.image}" class="card-image" alt="">
    <div class="card-body">
        <div class="mem-info text-center">
            <h2>${data.title}</h2>
            <h3>${data.department}</h3>
            <ul class="d-flex list-unstyled justify-content-center">
                <li><a href=""> <span><i class="fab fa-facebook-f"></i></span> </a></li>
                <li><a href=""> <span><i class="fab fa-twitter"></i></span> </a></li>
                <li><a href=""> <span><i class="fab fa-linkedin"></i></span> </a></li>
            </ul>
        </div>
    </div>
</div>
</div>`;
});
