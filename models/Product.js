const mongoose = require("mongoose");

const ProductShema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    prize: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductShema);

/** Prodct images
 * https://ibb.co/wBjPq5N
https://ibb.co/JKXGLQ4
https://ibb.co/SnkfzBS
https://ibb.co/x2HgDqB
https://ibb.co/JHxWSgJ
https://ibb.co/2Yr0PJ3
https://ibb.co/dmK6j9J
https://ibb.co/DKfTTw8
https://ibb.co/94PK2td
https://ibb.co/1L4B71H
https://ibb.co/NnGz2BT
https://ibb.co/Q8r1ZtN
https://ibb.co/TLPRvc9
https://ibb.co/WcWprRc
https://ibb.co/Lp5ZNH2
https://ibb.co/7nkVbCd
https://ibb.co/2P4vyd5
https://ibb.co/TKWRhf1
https://ibb.co/YNMjP0f
https://ibb.co/4K6r8G9
https://ibb.co/J3FdKXS
https://ibb.co/LPPPT7B
https://ibb.co/ZVC7qY7
https://ibb.co/HzFWgnM
https://ibb.co/pLSYsmb
https://ibb.co/qRvNBGY
 */

/**
 * 
 const product = [
   {
     title: "Capital Polo - Alpinestars Moto",
     desc: "Polo clásico de piqué de 2 botones con unión de ADN Alpinestars\n Cuello y puños elásticos.\n Etiqueta principal interna y etiqueta de marca externa.\n Logotipo HD en el pecho delantero.\n 60% algodón / 40% poliéster.\n Imágen ilustrativa.",
     img: "https://i.ibb.co/NFPYtTW/polo-Black02.png",
     categories: ["t-shirt", "polo", "man", "summer"],
     size: ["s", "m", "l", "xl"],
     color: ["black", "gray", "red", "blue"],
     prize: 9000,
     inStock: true,
    },
  ];
  */
