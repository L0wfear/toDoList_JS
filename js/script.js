(function () {
    // массив, который выводится
    let tasks = {
        // добавляемые таски
            current: []
        },
        tasksList = document.getElementById("items"), // ul в который записываются таски
        button = document.getElementById('submit'), // кнопка
        addNewTaskField = document.getElementById("input"); // форма ввода
        

       

      

        button.addEventListener('click', function() { add(addNewTaskField.value); }); // вызов функции add с аргументом value из поля ввода
        
        function add (el) {
            if (el) {
            let elem = { // переменная, куда присваивается новый объект
                taskId: doId(),
                taskContent: el,
                taskState: "current"
            }
            tasks.current.push(elem); // добавление в массив current нового объекта
            createItem(elem); 
        }
        }



    function createItem(el) {
        let item = document.createElement('li'),
            text = document.createElement('span'),
            markDone = document.createElement('input');

        item.id = el.taskId;
        text.innerHTML = el.taskContent;
        markDone.classList.add("button");
        markDone.type = "button";
        markDone.value = 'Done';
        item.appendChild(text);
        item.append(markDone);
        tasksList.appendChild(item);
        markDone.addEventListener('click', function () {done(
            this);});
        addNewTaskField.value = '';
    
    }

      function done (el) {
            if (el.parentNode.className) {
                el.parentNode.remove();
            }
            else {
            el.parentNode.classList.add("done");
        }
        }

      function doId() {
                return Math.random().toString(36).substr(2, 16);
    }


     addNewTaskField.addEventListener('keyup', function (e) { // функция, позволяющая добавлять новые таски при помощи enter
        if(e.keyCode === 13) {
            add(this.value);
            this.value = "";
        }
    })
    
       
})();