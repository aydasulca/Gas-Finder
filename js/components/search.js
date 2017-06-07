const SearchItem= (station,update) => {
    //const search = $('<div class="container-fluid></div>"');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12 style-container-gas"></div>');
    const col9 = $('<div class="col-xs-9"></div>');
    const name = $('<p class="col-xs-12">'+station.name+'</p>');
    const address = $('<p class="col-xs-12">'+station.address+'</p>');
    const col3 = $('<div class="col-xs-3"></div>');
    const icon = $('<span class="col-xs-12"><i class="fa fa-map" aria-hidden="true"></i></span>');

    col9.append(address);
    col9.append(name);
    col3.append(icon);
    col.append(col9);
    col.append(col3);
    row.append(col);

    return row;

};

const reRender = (containerGas, encontrandoGas,update) => {
  containerGas.empty();
  encontrandoGas.forEach((station) => {
    containerGas.append(SearchItem(station, update));
  });
}

const Search = (update) => {
    const container = $('<div class="container-fluid"></div>');
    const row = $('<div class="row style-container">');
    const col = $('<div class="col-xs-12">');
    const inputgroup = $('<div class="input-group ">');
    const icono = $('<span class="input-group-addon"><i class="glyphicon glyphicon-search"></i><span>');
    const input = $('<input type="text" id="autocomplete-input" class="form-control" placeholder="Ingresa tu distrito a buscar">');
    const containerGas = $('<div class="container-gas"></div>');

    container.append(row);
    row.append(col);
    col.append(inputgroup);
    inputgroup.append(icono);
    inputgroup.append(input);
    container.append(containerGas);

    input.on('keyup', (e) => {
        if(input.val() != "") {
          var encontrandoGas= filterByDistrict(state.stations , input.val());
          console.log(encontrandoGas);
        }
        reRender(containerGas, encontrandoGas, update);
    });
    return container;
}
