const SearchItem= (station,update) => {
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12 style-container-gas"></div>');
    const col9 = $('<div class="col-xs-9"></div>');
    const name = $('<h4 class="col-xs-12"><strong>'+station.name+'</strong></h4>');
    const address = $('<p class="col-xs-12">'+station.address+'</p>');
    const district = $('<p class="col-xs-12">'+station.district+'</p>');
    const col3 = $('<div class="col-xs-3"></div>');
    const icon = $('<span class="col-xs-12 style-span"><i class="fa fa-map" aria-hidden="true"></i></span>');

    col9.append(name);
    col9.append(address);
    col9.append(district);
    col3.append(icon);
    col.append(col9);
    col.append(col3);
    row.append(col);

    icon.on('click',(e) => {
      e.preventDefault();
      state.selectedStation = station;
      update();
    });
    return row;
  };


  const reRender = (containerGas, encontrandoGas,update) => {
    containerGas.empty();
    encontrandoGas.forEach((n) => {
      containerGas.append(SearchItem(n, update));
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
        reRender(containerGas, encontrandoGas, update);
      }
    });
    return container;
  }
