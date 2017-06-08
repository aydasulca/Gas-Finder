'use strict';

const stationDetails =(station) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row ">');
  const col = $('<div class="col-xs-12">');
  const name = $('<h3 class="col-xs-12">'+state.selectedStation.name+'</h3>');
  const address = $('<p class="col-xs-12">'+state.selectedStation.address+'</p>');

  col.append(name);
  col.append(address);
  row.append(col);
  container.append(row);

  for(var i=0; i<state.selectedStation.products.length; i++){
    const products = $('<div class="col-xs-3 stylePrecio"><p class="">'+state.selectedStation.products[i]+'</p></div>');
    col.append(products);
  }
  return container;
}
