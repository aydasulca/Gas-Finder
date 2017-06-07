'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");

  header.append(title);
  header.append(Search());

  return header;
}
