import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    smartphones:[
      {
        id: "SP-GlxS10",
        name: "Samsung Galaxy S10 5G",
        details: "Released: April, 2019; Specs: 198g, 7.9mm thickness, Android 9.0; One UI, 256/512GB storage, no card slot",
        image: require("@/assets/images/phones/Samsung-Galaxy-S10-5G.jpg"),
        price: 1297,
        stockQty: 10
      },

      {
        id: "SP-GlxF01D",
        name: "Samsung Galaxy Fold",
        details: "Released: Exp. 2019, Q2; Specs: 263g, 6.9mm thickness,Android 9.0, 512GB storage, no card slot",
        image: require("@/assets/images/phones/Samsung-Galaxy-Fold.jpg"),
        price: 1980,
        stockQty: 10
      },

      {
        id: "SP-Apl10S",
        name: "Apple iPhone XS",
        details: "Released: September 2018; Specs: 177g, 7.7mm thickness, iOS 12, up to iOS 12.3, 64/256/512GB storage, no card slot",
        image: require("@/assets/images/phones/Apple-iPhone-XS.jpg"),
        price: 1285,
        stockQty: 10
      },

      {
        id: "SP-Apl10R",
        name: "Apple iPhone XR",
        details: "Released: October, 2018; Specs: 194g, 8.3mm thickness, iOS 12, up to iOS 12.3, 64/128/256GB storage, no card slot",
        image: require("@/assets/images/phones/Apple-iPhone-XR.jpg"),
        price: 950,
        stockQty: 10
      },

      {
        id: "SP-HwSmZ",
        name: "Huawei P Smart Z",
        details: "Released: Exp. May 2019; Specs: 196.8g, 8.8mm thickness, Android 9.0, EMUI 9, 64GB storage, microSD card slot",
        image: require("@/assets/images/phones/Huawei-P-Smart-Z.jpg"),
        price: 312,
        stockQty: 10
      }
    ],

    notebooks:[
      {
        id: "PC-Elite830",
        name: "HP EliteBook 830 G5 Notebook PC",
        details: "Windows 10 Pro 64, 8th Generation Intel® Core™ i5 processor, 8GB memory, 256GB SSD storage, 13.3\" diagonal Full HD display, Intel® UHD Graphics 620",
        image: require("@/assets/images/laptops/HP-EliteBook-830-G5-Notebook-PC.png"),
        price: 1249,
        stockQty: 10
      },

      {
        id: "PC-Omen10",
        name: "HP OMEN X (Gaming PC)",
        details: "Windows 10, Intel® Core™ i7 processor, NVIDIA GeForce GTX 960M or 965M Graphics Card,Optional 4K IPS Display",
        image: require("@/assets/images/laptops/HP-OMEN-X.png"),
        price: 2419,
        stockQty: 10
      },

      {
        id: "PC-Dell15G3",
        name: "Dell G3 15 Gaming Laptop",
        details: "Windows® 10, NVIDIA® GeForce® GTX 1050, 4 GB GDDR5 video memory, 4-16GB DDR4 2666MHz up to 32GB, 1TB 5400 RPM Hybrid Hard Drive with 8GB Cache",
        image: require("@/assets/images/laptops/Dell-G3-15-Gaming-Laptop.jpeg"),
        price: 699,
        stockQty: 10
      },

      {
        id: "PC-Helios300",
        name: "Acer Predator Helios 300 Gaming Laptop",
        details: "Windows 10 Home, Intel® Core™ i7-8750H processor Hexa-core 2.20GHz, NVIDIA® GeForce® GTX1060 with 6GB Dedicated Memory, 15.6\" Full HD (1920 x 1080) 16:9 IPS, 8GB DDR4 SDRAM",
        image: require("@/assets/images/laptops/Predator-Helios-300.png"),
        price: 1149,
        stockQty: 10
      },

      {
        id: "PC-TecraX40",
        name: "Toshiba Tecra X40-E1420",
        details: "Windows 10, Intel® Core™ i5-8250U Processor, 14.0\" diagonal widescreen Touchscreen, 8GB DDR4 2400MHz, 128GB M.2 Solid State Drive (SSD), 1TB HDD",
        image: require("@/assets/images/laptops/Tecra-X40-E1420.png"),
        price: 1067,
        stockQty: 10
      }
    ]

  },

  // mutations: {
  //   change(state, flavor) {
  //     state.flavor = flavor
  //   }
  // },
  
  // getters: {
  //   flavor: state => state.flavor
  // }

});