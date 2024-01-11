import drop1 from "../assets/images/drop1.jpg";
import drop2 from "../assets/images/drop2.jpg";
import drop3 from "../assets/images/drop3.jpg";
// import drop4 from "../assets/images/drop4.jpg";

import bid1 from "../assets/images/bid1.png";
import bid2 from "../assets/images/bid2.png";

import featuredProducts1 from "../assets/images/featuredImages1.png";
import featuredProducts2 from "../assets/images/featuredImages2.png";
import featuredProducts3 from "../assets/images/featuredImages3.png";

export const drops = [
  {
    id: 1,
    name: "Eyo : Eko For Show",
    status: "upcoming",
    time: "November 21 at 11 am WAT",
    creator: "Aliya Minat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    image: drop1,
  },
  {
    id: 2,
    name: "Ginger Suburbs",
    status: "live",
    time: "November 21 at 11 am WAT",
    creator: "Aliya Minat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    image: drop2,
  },
  {
    id: 3,
    name: "Sink",
    status: "ended",
    time: "November 21 at 11 am WAT",
    creator: "Aliya Minat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    image: drop3,
  },
  {
    id: 4,
    name: "Warped '99",
    status: "ended",
    time: "November 21 at 11 am WAT",
    creator: "Amet Taylor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    image: drop3,
  },
];

export const topBids = [
  {
    id: 1,
    name: "Out of the box",
    creator: "Dan Murray",
    date: "12/08/22",
    highestBid: "0.57 ETH",
    currentBid: "0.987 ETH",
    liked: false,
    image: bid1,
  },
  {
    id: 2,
    name: "Falling apart",
    creator: "Jacob Banks",
    date: "12/08/22",
    highestBid: "0.34 ETH",
    currentBid: "0.99 ETH",
    liked: true,
    image: bid2,
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    creators: 64,
    image: featuredProducts1,
  },
  {
    id: 2,
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    creators: 58,
    image: featuredProducts2,
  },
  {
    id: 3,
    name: "The Boolean Egyptian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    creators: 37,
    image: featuredProducts3,
  },
];
