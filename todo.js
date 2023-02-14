const toDoform = document.querySelector(".js-todoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDolist = document.querySelector(".js-todoList");

const TODOS_LS = "toDos"; 
const todos = [];     

    function loadToDos() {
      const loaded_toDos = localStorage.getItem(TODOS_LS);
      if (loaded_toDos !== null) {
        const parsedTodos = JSON.parse(loaded_toDos);
        
        parsedTodos.forEach(function(toDo) {
            showToDos(toDo);
        });
      } 
    }

    function saveTodos () {
        localStorage.setItem(TODOS_LS, JSON.stringify(todos))
    }

    function showToDos(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = todos.length + 1;
        delBtn.innerHTML = "❌";
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        toDolist.appendChild(li);
        const toDoObject = {
            name: text,
            id: newId,
        }
        todos.push(toDoObject);
        saveTodos();
    }

    function submitHandler(event) {
       event.preventDefault();
       const currentValue = toDoInput.value;
       showToDos(currentValue);
       toDoInput.value = "";
    }
    
      function init() {
        loadToDos();
        toDoform.addEventListener("submit", submitHandler)
      }

      init();