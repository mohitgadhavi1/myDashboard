import { MdOutlineExplore, MdEmojiFlags } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { LightningBoltIcon } from "@heroicons/react/outline";

class Page {
  constructor(name, menu, icon) {
    this.name = name;
    this.menu = menu;
    this.icon = icon;
  }
}

const country = new Page(
  "country",
  [["explore", "economy", "fire power", "democracy"]],
  [
    <MdOutlineExplore />,
    <AiOutlineDollar />,
    <LightningBoltIcon />,
    <MdEmojiFlags />,
  ]
);
const stocks = new Page("stocks", []);
const socials = new Page("socials", []);
const apps = new Page("apps", []);
let Data;
export default Data = [country, stocks, socials, apps];
