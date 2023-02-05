function toDoList() {
    const input = document.getElementById('text');
    if (input.value) {
        const newEl = document.createElement('li');
        newEl.innerText = input.value;
        document.querySelector('.list').appendChild(newEl);
        input.value = '';
    }
}
document.querySelector('button').addEventListener('click',function(){
    toDoList()
 
})
   