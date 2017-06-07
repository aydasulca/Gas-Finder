'use strict';

const filterByDistrict = (stations,query) => {
  const filtergas = stations.filter((e) =>{
    return e.district.toLowerCase().indexOf(query.toLowerCase())!= -1;
  })
    return filtergas;
  };
