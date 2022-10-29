const tasks = [
  { task: "Поработать" },
  { task: "Сходить в магазин" },
  { task: "Спортзал" },
  { task: "Завтрак" },
];


//функция для добавления нового элемента
function addNewTask() {
  const taskInput = document.getElementById("task-input");

  const ul = document.querySelector(".todo-list-ul");
  const li = document.createElement("li");

  //Создаем лист
  li.classList.add("list-group-item");

  li.onclick = () => {
    li.classList.add("noActive");
  };

  //создаем кнопки, чтобы можно было удалять элементы
  const button = document.createElement("button");
  // используем у кнопки сlasslist
  button.classList.add("btn", "btn-success");
  //добавим кнопке надпись DELETE
  $(button).html(`<i class="fa-sharp fa-solid fa-trash"></i>`)
  //чтобы кнопка работала и удаляла задачу
  button.onclick = () => {
    li.remove();
  };
  tasks.unshift({task : taskInput.value})

  //добавление данных
  li.append( button, "  ", taskInput.value);
  ul.append(li)
  //после ввода задачи отчистим поле ввода
  document.getElementById("task-input").value = ""
}
const btn = document.querySelector(".btn-input");
btn.addEventListener("click", addNewTask);

function getTodoList(alltasks) {
  //получим наш лист
  const ul = document.querySelector(".todo-list-ul");

  //Продублировать, чтобы вывести все элементы списка tasks
  //liElements - хранит все li элементы
  const liElements = alltasks.map((elem) => {
    //создаем li - элемент списка
    const li = document.createElement("li");

    //Создаем лист
    li.classList.add("list-group-item");

    li.onclick = () => {
      li.classList.add("noActive");
    };

    //создаем кнопки, чтобы можно было удалять элементы
    const button = document.createElement("button");
    // используем у кнопки сlasslist
    button.classList.add("btn", "btn-success");

    $(button).html(`<i class="fa-sharp fa-solid fa-trash"></i>`)

    //чтобы кнопка работала и удаляла задачу
    button.onclick = () => {
      li.remove();
    };

    //добавление данных
    li.append( button, "  ",  elem.task);

    console.log("li", li);

    return li;
  });
  //поместить элемент в наш список liElementc -> ul
  return ul.append(...liElements);
}

getTodoList(tasks);
