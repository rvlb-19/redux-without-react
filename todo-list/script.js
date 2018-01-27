const toDos = (state = [], action) => {
    switch(action.type) {
    case 'ADD_TODO':
        return [ ...state, action.content ];
    case 'REMOVE_TODO':
        return state.filter((item, idx) => (idx != action.id));
    default:
        return state;
    }
}

const store = Redux.createStore(Redux.combineReducers({ toDos }));

$(document).ready(() => {
    const renderList = () => {
        const list = $('#list');
        list.html('');
        store.getState().toDos.forEach((item, idx) => {
            list.append(`
                <li>
                    ${item} <button class="remove-todo" key=${idx}>Remover</button>
                </li>
            `);
        });
    };

    const renderFirstItem = () => {
        const items = store.getState().toDos;
        $('#first-item').html(items.length > 0 ? items[0] : '');
    }

    store.subscribe(renderList);
    store.subscribe(renderFirstItem);

    $('#add-todo').click((e) => {
        e.preventDefault();
        const input = $('input[name=todo-input]');
        store.dispatch({ type: 'ADD_TODO', content: input.val() });
        input.val('');
    });
});

$(document).on('click', '.remove-todo', (e) => {
    e.preventDefault();
    const id = $(e.target).attr('key');
    store.dispatch({ type: 'REMOVE_TODO', id });
});