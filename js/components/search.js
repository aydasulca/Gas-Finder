const Search = (update) => {
    const container = $('<div class="container-fluid"></div>');
    const row = $('<div class="row">')
    const col = $('<div class="col-xs-12">')
    const inputgroup = $('<div class="input-group ">');
    const icono = $('<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i><span>');
    const input = $('<input type="text" id="autocomplete-input" class="form-control" placeholder="Ingresa tu distrito a buscar">');

    container.append(row);
    row.append(col);
    col.append(inputgroup);
    inputgroup.append(icono);
    inputgroup.append(input);

    return container;
}
