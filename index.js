 const addProduct=() => {
  const ul = document.querySelector("ul");
  const inputValue = document.querySelector("input").value;
  const Checkbox = document.createElement("input");
  Checkbox.type = "checkbox";
  const li = document.createElement("li");
  li.textContent = inputValue;
  li.appendChild(Checkbox);
  ul.appendChild(li);
  input.value = "";
};
