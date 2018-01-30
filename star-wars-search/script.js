$(document).ready(() => {
  const renderLastSearch = () => {
    $('#last-search').html(store.getState().lastSearch);
  };

  const renderList = () => {
    const list = $('#list');
    list.html('');
    store.getState().characters.forEach((item, id) => {
      list.append(`
        <li>
          ${item} <button class="remove-character" key=${id}>Remover</button>
        </li>
      `);
    });
  };

  store.subscribe(renderLastSearch);
  store.subscribe(renderList);

  $('#search-button').click(e => {
    e.preventDefault();
    const input = $('input[name=search-input]');
    triggerSearch(input.val());
    input.val('');
  });
});

$(document).on('click', '.remove-character', e => {
    e.preventDefault();
    const id = $(e.target).attr('key');
    triggerRemoveCharacter(id);
});
