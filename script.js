let toDoItems = [];

function toDoList() {
    const input = document.getElementById('text');
    if (input.value) {
        const id = `inputValue-${toDoItems.length}`;
        const newEl = document.createElement('li');
        newEl.setAttribute('id', id );
        newEl.setAttribute('data-selected', false);
        newEl.innerText = input.value;
        document.querySelector('.list').appendChild(newEl);
        toDoItems = [...toDoItems, {title:input.value, id:id }]
        input.value = '';
    }
}

function fetchToDos() {
    document.querySelector('#spinner').style.display = 'block';
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => 
        response.json()
    ).then((data)=> {
        toDoItems = [...toDoItems, ...data.slice(1, 10)];
        toDoItems.forEach((element) => {
            const newEl = document.createElement('li');
            newEl.setAttribute('id', element.id );
            newEl.setAttribute('data-selected', false);
            newEl.innerText = element.title;
            document.querySelector('.list').appendChild(newEl);
        }); 
        document.querySelector('#spinner').style.display = 'none';
    }
    ) 

}
    function clearAll() {
        document.querySelectorAll('li').forEach((element) => {
            element.remove()
        });
        toDoItems = [];
    }
    document.querySelector('#clear-all').addEventListener('click', function(){
        clearAll()
    })

    document.querySelector('#add').addEventListener('click',function(){
        toDoList()
    })
    document.querySelector('#fetch').addEventListener('click',function(){
        fetchToDos()
    })