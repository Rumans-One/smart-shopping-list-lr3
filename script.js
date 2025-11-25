// Функция добавления нового товара в список
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // Проверяем, что поле не пустое
    if (!taskText) {
        alert('Введите название товара!');
        return;
    }

    // Находим список
    const taskList = document.getElementById('taskList');

    // Создаём новый элемент списка
    const li = document.createElement('li');

    // Внутри li будет текст и кнопка "Удалить"
    li.innerHTML = `
        <span class="task-text" onclick="toggleDone(this)">${taskText}</span>
        <button onclick="this.parentElement.remove()">Удалить</button>
    `;

    // Добавляем элемент в список
    taskList.appendChild(li);

    // Очищаем поле ввода и возвращаем фокус
    taskInput.value = '';
    taskInput.focus();
}

// Функция переключения состояния "куплено"
function toggleDone(spanElement) {
    spanElement.classList.toggle('done');
}
