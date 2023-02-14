const toDoform = document.querySelector(".js-todoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDolist = document.querySelector(".js-todoList");

const TODOS_LS = "toDos"; 
let todos = [];

/*function filterFn(todo) {
    return todo.id === 1
}*/

    function loadToDos() {
      const loaded_toDos = localStorage.getItem(TODOS_LS);
      if (loaded_toDos !== null) {
        const parsedTodos = JSON.parse(loaded_toDos);
        
        parsedTodos.forEach(function(toDo) {
            showToDos(toDo.name);
        });
      } 
    }

    function saveTodos () {
        localStorage.setItem(TODOS_LS, JSON.stringify(todos))
    }

    function deleteToDo (event) {
        const btn = event.target;
        const li = btn.parentNode;

        toDolist.removeChild(li);
        const cleanToDos = todos.filter((todo) => {
           return todo.id !== parseInt(li.id)
        });
        todos = cleanToDos;
        saveTodos();
    }

    function showToDos(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = todos.length + 1;
        delBtn.innerHTML = "❌";
        delBtn.addEventListener("click", deleteToDo)
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