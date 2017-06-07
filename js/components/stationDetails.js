'use strict';

const stationDetails =(station) => {
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row ">');
  const col = $('<div class="col-xs-12">');
  const name = $('<h4 class="col-xs-12">'+state.selectedStation.name+'</h4>');
  const address = $('<p class="col-xs-12">'+state.selectedStation.address+'</p>');
  const products = $('<p class="col-xs-12">'+state.selectedStation.products+'</p>');


  col.append(name);
  col.append(address);
  col.append(products);
  row.append(col);
  container.append(row);

  return container;

}
