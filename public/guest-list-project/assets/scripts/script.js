const nameInput = document.getElementById("fname");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const unorderedList = document.getElementById("namesList");
const showGuests = document.getElementById("guest-names");

// validate if the list of names is empty to hide the h2
function isListEmpty() {
  const remainingLiEls = document.querySelectorAll("li");
  console.log(remainingLiEls);
  if (remainingLiEls.length > 0) {
    console.log("Items still exists.");
  } else {
    console.log("Hiding h2");
    showGuests.style.display = "none";
  }
}

// This function will capitalize the first letter of the first and last name
// and will make the rest of the first and last name lower case
function parseFirstAndLastName(name) {
  let fullName = name;
  // console.log(fullName, "inside function", typeof fullName); // validate input going into function
  // console.log(fullName.length); //validate name length
  const getIndexOfFirstSpace = fullName.indexOf(" ");

  const capitalFirstLetterOfFirstName = fullName.slice(0, 1).toUpperCase();
  console.log(getIndexOfFirstSpace); //index of first space
  const remainingLettersOfName = fullName
    .slice(1, getIndexOfFirstSpace)
    .toLowerCase();

  const capitalFirstLetterOfLastName = fullName
    .slice(getIndexOfFirstSpace + 1, getIndexOfFirstSpace + 2)
    .toUpperCase();

  const remainingLettersOfLastName = fullName
    .slice(getIndexOfFirstSpace + 2)
    .toLowerCase();

  let parsedName =
    capitalFirstLetterOfFirstName +
    remainingLettersOfName +
    " " +
    capitalFirstLetterOfLastName +
    remainingLettersOfLastName;
  return parsedName;
}

addBtn.addEventListener("click", () => {
  if (nameInput.value === "") {
    alert("Please enter a name.");
    return;
  }

  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = "guest name";

  const liContent = parseFirstAndLastName(nameInput.value);

  console.log(liContent); // confirm liContent value

  newLi.textContent = liContent;

  showGuests.style.display = "flex";
  newLi.appendChild(checkbox);

  unorderedList.appendChild(newLi);
  nameInput.value = "";
});

removeBtn.addEventListener("click", () => {
  const checkedInputs = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  checkedInputs.forEach((input) => {
    input.closest("li").remove();
  });
  console.log("item removed");
  isListEmpty();
});
