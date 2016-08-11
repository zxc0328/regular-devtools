
var Todo = Regular.extend({
    template: `
        <li on-click={count = count +1}>
            This is global state: {todo.description}
            This is local state: {count}
        </li>
    `,
    name: "todo"
});

var Todos = Regular.extend({
    template: `
        <section id="main">
            <ul id="todo-list">
                {#inc this.$body}
            </ul>
        </section>
    `,
    name: 'todos'
});

var TodoMVC = Regular.extend({
    template: `
        <todos>
            {#list todos as todo}
                <todo todo={ todo } count={ 1 }></todo>
            {/list}
        </todos>
    `,
});

var todos = [
    { description: "sleep" },
    { description: "work" }
];

var app = new TodoMVC({
    data: {todos: todos}
}).$inject("#todoapp");