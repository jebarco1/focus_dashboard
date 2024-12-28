export const paymentMethodData = [
    { name: "BOB", imagePath: "card" },
    { name: "MasterCard", imagePath: "mastercard", defaultChecked: true },
    { name: "Paypal", imagePath: "paypal" },
    { name: "Visa", imagePath: "visa" },
  ];

export const webDesignCourseList = ["A. HTML ", "B. CSS", "C. Javascript", "D. Above the all "];

export const radioOptionsWithCreativeOptionsData = [
    {
      strokeClassName: "danger",
      options: "The notification icon displayed new messages.",
      svgName: "notification",
    },
    {
      strokeClassName: "success",
      options: "The download icon indicated completion.",
      svgName: "stroke-calendar",
    },
    {
      strokeClassName: "second",
      options: "The tag icon allowed easy categorization.",
      svgName: "tag",
    },
    {
      strokeClassName: "primary",
      options: "The email icon was inaccessibly located.",
      svgName: "stroke-email ",
    },
  ];

  export const activitiesNameData = [
    { className: "success", name: "Reading" },
    { className: "success", name: "Watching TV" },
    { className: "danger", name: "Listening to music" },
    { className: "", name: "Playing video games" },
    { className: "success", name: "Painting/Drawing" },
  ];

  export const selectRequirementsData = [
    { themeName: "Voxo", sale: 270 },
    { themeName: "Cion", sale: "4.8k" },
    { themeName: "Multikart", sale: "2.6k" },
    { themeName: "Viho", sale: "2k", defaultChecked: true },
  ];

  export const defaultStyleFormData = [
    { Type: "COD", price: "50", priceClassName: "primary", deliveryTime: 2 },
    {
      Type: "FAST",
      price: "100",
      priceClassName: "secondary",
      deliveryTime: 1,
    },
  ];

  export const withoutBordersStyleForm = [
    {
      price: 39,
      badgeText: "100 MBPS",
      className: "warning",
      detail: "Plans for 2/4/6 months are offered to new clients.",
      defaultChecked: true,
    },
    {
      price: 50,
      badgeText: "Hired",
      className: "info",
      detail: " Plans for 2 years projects offered to new clients.",
    },
  ];
  
  export const  solidBorderStyleInlineFormData =[ 
    {detail:"We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.",imagePath:"blog/img.png"},
    {detail:"When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.",imagePath:"blog/blog.jpg"}
  ]

  export const offerStyleBorderFormData = [
    {
      checkBoxClassName: "success",
      imageName: "11",
      detail:
        "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
    },
    {
      checkBoxClassName: "danger",
      imageName: "10",
      detail:
        "Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.",
    },
  ];

  export const inlineStyleFormData = [
    {
      className: "warning",
      deliveryType: "COD",
      price: "50 INR",
      deliveryText:
        "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )",
    },
    {
      className: "secondary",
      deliveryType: "Fast",
      price: "50 INR",
      deliveryText:
        "Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )",
    },
    {
      className: "secondary",
      deliveryType: "Standard",
      price: "80 INR",
      deliveryText:
        "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )",
    },
    {
      className: "warning",
      deliveryType: "Local",
      price: "Free",
      deliveryText:
        "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )",
    },
  ];

  export const verticalStyleFormData = [
    {
      className: "primary",
      deliveryType: "COD",
      price: "50 INR",
      text: "Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )",
    },
    {
      className: "secondary",
      deliveryType: "FAST",
      price: "100 INR",
      text: "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )",
    },
    {
      className: "success",
      deliveryType: "Standard",
      price: "80 INR",
      text: "Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )",
    },
    {
      className: "info",
      deliveryType: "LOCAL",
      price: "FREE",
      text: "Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )",
    },
  ];

  export const buyingOptionsData = [
    {
      className: "warning",
      tittle: "Pixelstrap",
      price: "250 INR",
      totalRating: 5,
      starRating: [
        "txt-warning",
        "txt-warning",
        "txt-warning",
        "txt-warning",
        "txt-warning m-r-5",
      ],
    },
    {
      tittle: "Multikart",
      className: "danger",
      price: "150 INR",
      totalRating: 2,
      starRating: ["txt-warning", "txt-warning", "", "", "m-r-5"],
    },
  ];

  export const horizontalStyleFormData = [
    {
      className: "primary",
      deliveryType: "COD",
      price: "50 INR",
      text: "Estimated 5 Day Shipping ( Duties end tax may be due delivery )",
    },
    {
      className: "secondary",
      deliveryType: "FAST",
      price: "100 INR",
      text: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
    },
  ];

  export const horizontalStyleFormBuyingOptionsData = [
    {
      className: "success",
      tittle: "Pixelstrap",
      price: "250 INR",
      totalRating: 5,
      starRating: [
        "txt-warning",
        "txt-warning",
        "txt-warning",
        "txt-warning",
        "txt-warning m-r-5",
      ],
    },
    {
      colClassName:"offset-sm-3",
      tittle: "Tivo",
      className: "info",
      price: "150 INR",
      totalRating: 1,
      starRating: ["txt-warning", "", "", "", "m-r-5"],
    },
  ];