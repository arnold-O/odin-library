const ADDButton = document.querySelector(".header-eventBtn");

const formAdd = document.querySelector(".classDisplay");
const formSubmitBtn = document.querySelector("#formSubmitBtn");

// form inputs
const TitleValue = document.getElementById("titleValue");

const AurthurValue = document.getElementById("aurthurValue");
const PagesValue = document.getElementById("pagesValue");
const ReadValue = document.getElementById("readValue");
// form inputs

// details section selected
const container = document.querySelector(".mainView");

// details section selected

ADDButton.addEventListener("click", function () {
  formAdd.classList.toggle("classDisplay");
});

const myLibrary = [];
// submit button functionality
formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const title = AurthurValue.value;
  const authur = TitleValue.value;
  const pages = PagesValue.value;
  const read = ReadValue.value;

  const newBook = {
    id: myLibrary.length + 1,
    title,
    authur,
    pages,
    read,
  };
  if (myLibrary.length > 1) {
  }
  myLibrary.push(newBook);

  myLibrary.map((item, i) => {
    // const {id, title, authur,pages,read} = item
    console.log(item);

    const html = `<div class=" containerMap">
      <p class="el-0ne serialNumber">${item.id}</p>
      <p class="el-0ne titleDetails">${item.title}</p>
      <p class="el-0ne authurDetails">${item.authur}</p>
      <p class="el-0ne pagesDetails">${item.pages}</p>
      <p class="el-0ne readDetails">${item.read}</p>
      <button class="el-0ne btn-delete">Delete</button>

      </div>
      
      `;

    container.insertAdjacentHTML("afterbegin", html);
  });

  // SETTING input boxes back to zero
  AurthurValue.value = "";
  TitleValue.value = "";
  PagesValue.value = "";
  ReadValue.value = "";

  console.log(myLibrary);
});



