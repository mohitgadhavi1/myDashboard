class Page {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }
}

const country = new Page("country", [
  "explore",
  "economy",
  "fire power",
  "democracy",
]);
const stocks = new Page("stocks", []);
const socials = new Page("socials", []);
const apps = new Page("apps", []);
let Data;
export default Data = [country, stocks, socials, apps];
