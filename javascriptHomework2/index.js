const addButton = document.getElementById("addItem");
const inputDom = document.getElementById("listItem");
addButton.addEventListener("click", addAnItemToList);

function changeTheItemShape() {
  this.classList.toggle("listedItemCompleted");
}

const onCloseClick = (event) => {
  event.target.parentNode.parentNode.remove();
};

function addAnItemToList() {
  let regex = ".*[a-zA-Z].*";
  if (!inputDom.value.search(regex)) {
    const list = document.getElementById("unorderedList");
    const liDOM = document.createElement(`li`);
    liDOM.classList.add("listedItems");
    liDOM.innerHTML = `<span id='checkIcon' class='checkIcon'>
                       <i class='far fa-check'></i>
                     </span>
                      ${inputDom.value}
                     <span class='closeButton'>
                       <i onclick="onCloseClick(event)" class='fas fa-times'></i>
                     </span>`;

    liDOM.addEventListener("click", changeTheItemShape);
    list.appendChild(liDOM);
    toast("Listeye eklendi.");
    localStorage.setItem("item", inputDom.value);
  } else {
    toast("Listeye boş ekleme yapamazsınız!");
  }
}
//*completed task
document
  .querySelectorAll(".listedItems")
  .forEach((item) => item.addEventListener("click", changeTheItemShape));

//*delete the task you added before
document
  .querySelectorAll(".closeButton i")
  .forEach((item) => item.addEventListener("click", onCloseClick));

//*bootstrap toast
function toast(spanInner) {
  let toast = document.getElementById("toast");
  let span = document.getElementById("toastsSpan");
  let toastElement = new bootstrap.Toast(toast);
  //*toast body inner html
  span.innerHTML = spanInner;
  //*show toast
  toastElement.show();
  //*hide toast
  document.querySelector(".closeToast").addEventListener("click", function () {
    toastElement.hide();
  });
}
