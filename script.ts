interface Todos {
  id: number;
  task: string;
}

class AddAPI {
  // Properties
  linkTodos: string;

  // Constructor
  constructor() {
    this.linkTodos = "https://module3-api-is2m.onrender.com/random-todos";
  }
}

// Method
(async function getTodos() {
  try {
    const apiTodo = new AddAPI();
    const responseAPI = await fetch(apiTodo.linkTodos);
    const responseTodos = await responseAPI.json();
    const data: Todos[] = responseTodos;

    data.forEach((todo: Todos) => {
      const task = todo.task;
      const setId = new Numbering().nextId();
      const bodyTodo = document.getElementById("bodyTodo");
      const bodyTr = document.createElement("tr");
      bodyTr.innerHTML = `
        <td>${setId}</td>
        <td>${task}</td>
        <td>
            <button class="completeBtn" type="button">Complete</button>
            <button class="deleteBtn" type="button">Delete</button>
        </td>`;
      bodyTodo!.appendChild(bodyTr);
    });
  } catch (err) {
    console.error("Error karena: ", err);
  }
})();

class AddTask {
  isCorrect: boolean;
  inputTask: string;
  bodyTodo: HTMLElement | null;
  bodyTr: HTMLElement | null;
  inputElement: HTMLInputElement | null;
  submitTask: HTMLElement | null;

  constructor() {
    this.bodyTodo = null;
    this.bodyTr = null;
    this.inputTask = "";
    this.isCorrect = false;
    this.inputElement = null;
    this.submitTask = null;
  }

  initialize() {
    this.submitTask = document.getElementById("addTaskBtn");
    this.bodyTodo = document.getElementById("bodyTodo");
    this.bodyTr = document.createElement("tr");
    this.inputElement = document.getElementById("newTask") as HTMLInputElement | null;
    if (this.inputElement) {
      this.inputTask = this.inputElement.value;
    }
  }
}

class Numbering {
  private count = 0;

  nextId() {
    return ++this.count;
  }
}

class NewTask {
  private addTask: AddTask;
  private numbering: Numbering;

  constructor(addTask: AddTask, numbering: Numbering) {
    this.addTask = addTask;
    this.numbering = numbering;
  }

  addNewTask() {
    this.addTask.initialize();
    this.addTask.submitTask!.addEventListener("click", () => {
      let isCorrect = false;
      try {
        if (!this.addTask.inputTask.trim()) {
          throw new Error("Nama Task tidak boleh kosong");
        }

        isCorrect = true;
      } catch (err: any) {
        alert("Perhatian !!! " + err.message);
      } finally {
        if (isCorrect) {
          const bodyTodo = document.getElementById("bodyTodo");
          const bodyTr = document.createElement("tr");
          const setId = this.numbering.nextId();

          bodyTr.innerHTML = `
            <td>${setId}</td>
            <td>${this.addTask.inputTask}</td>
            <td>
                <button class="completeBtn" type="button">Complete</button>
                <button class="deleteBtn" type="button">Delete</button>
            </td>`;
          bodyTodo!.appendChild(bodyTr);

          this.addTask.inputElement!.value = "";
        }
      }
    });
  }
}

// Event Listener untuk tombol Complete dan Delete
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("completeBtn")) {
    const row = target.parentElement!.parentElement!;
    row.style.backgroundColor = "red";
    row.style.color = "white";
  }

  if (target.classList.contains("deleteBtn")) {
    target.parentElement!.parentElement!.remove();
  }
});
