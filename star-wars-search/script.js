$(document).ready(() => {
  const renderLastSearch = () => {
    $('#last-search').html(store.getState().lastSearch);
  };

  const renderList = () => {
    const list = $('#list');
    list.html('');
    store.getState().characters.forEach((character, id) => {
      list.append(`
        <li>
          ${character.name} <button class="remove-character" key=${id}>Remover</button>
        </li>
      `);
    });
  };

  store.subscribe(renderLastSearch);
  store.subscribe(renderList);

  $('#search-button').click(e => {
    e.preventDefault();
    const input = $('input[name=search-input]');
    const name = input.val();
    input.val('');
    
    addCharacter(name);
    updateLastSearch(name);
  });
});

$(document).on('click', '.remove-character', e => {
    e.preventDefault();
    const id = $(e.target).attr('key');
    removeCharacter(id);
});
