const toDoform = document.querySelector(".js-todoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDolist = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";      

    function loadToDos() {
      const toDos = localStorage.getItem(TODOS_LS);
      if (toDos !== null) {
        //Если есть список задач
      } 
    }

    function showToDos(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        delBtn.innerHTML = "❌";
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        toDolist.appendChild(li);
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