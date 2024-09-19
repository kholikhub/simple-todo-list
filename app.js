// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

const limitTodos = 3;
const linkTodos = "https://module3-api-is2m.onrender.com/random-todos";

(async function getTodos() {
  try {
    const reponseAPI = await fetch(linkTodos);
    const reponseTodos = await reponseAPI.json();
    const data = reponseTodos;

    data.forEach((todo) => {
      let setId = closureFunc();
      const task = todo;

      const bodyTodo = document.getElementById("bodyTodo");
      const bodyTr = document.createElement("tr");
      bodyTr.innerHTML = `<tr>
                                    <td>${setId}</td>
                                    <td>${task}</td>
                                    <td>
                                        <button id="completeBtn" type="button">Complete</button>
                                        <button id="deleteBtn" type="button">Delete</button>
                                    </td>
                                </tr>`;
      bodyTodo.appendChild(bodyTr);
    });
  } catch (err) {
    console.error("Errornya karena : ", err);
  }
})();

// getTodos();

const inputTask = document.getElementById("newTask");
const submitTask = document.getElementById("addTaskBtn");
let isCorrect = false;

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let closureFunc = outer();

submitTask.addEventListener("click", () => {
  let isCorrect = false;
  try {
    if (!inputTask.value) {
      throw new Error("Nama Task tidak boleh kosong");
    }

    isCorrect = true;
  } catch (err) {
    alert("Perhatian !!! " + err.message);
  } finally {
    if (isCorrect) {
      const bodyTodo = document.getElementById("bodyTodo");
      const bodyTr = document.createElement("tr");
      let setId = closureFunc();

      bodyTr.innerHTML = `<tr>
                                    <td>${setId}</td>
                                    <td>${inputTask.value}</td>
                                    <td>
                                        <button id="completeBtn" type="button">Complete</button>
                                        <button id="deleteBtn" type="button">Delete</button>
                                    </td>
                                </tr>`;
      bodyTodo.appendChild(bodyTr);

      inputTask.value = "";
    }
  }
});

const bodyTodo = document.getElementById("bodyTodo");
bodyTodo.addEventListener("click", (e) => {
  const target = e.target;

  if (target.getAttribute("id") === "completeBtn") {
    target.parentElement.parentElement.style.backgroundColor = "red";
    target.parentElement.parentElement.style.color = "white";
  }

  if (target.getAttribute("id") === "deleteBtn") {
    target.parentElement.parentElement.remove();
  }
});