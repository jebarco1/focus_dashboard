import { BookOpen, Check, DollarSign, Edit, FileText, Globe, Link2, Mail, MessageCircle, RotateCcw, Youtube } from "react-feather";


export const articlesData = [
    {
      id: 1,
      title: "Understanding Hot and Cold Numbers",
      paragraph:
        "Hot Numbers: These are numbers that have frequently appeared in recent lottery draws. Some players believe they are more likely to appear again due to trends or streaks.Cold Numbers: These are numbers that have appeared less often or not at all recently. Players might choose these, hoping they are “due” for selection, based on the belief of balance in randomness.", icon: "read-book",
      class: "col-xl-4 xl-100 box-col-12",
      class2: "box-col-4",
    },
    {
      id: 2,
      title: "Considerations When Using Hot and Cold Numbers",
      paragraph:
        "Randomness: It's important to remember that each lottery draw is independent, and past results do not influence future outcomes. While analyzing trends can be interesting, it doesn't guarantee future results. Balanced Approach: Some players prefer a balanced approach, selecting a mix of hot and cold numbers, while others stick to personal numbers or random selections.",
      icon: "idea",
      class: "col-xl-4 xl-50 col-md-6 box-col-6",
      class2: "col-md-6 box-col-4",
    },
    {
      id: 3,
      title: "Fequency",
      paragraph:
        "Lottery number frequency analysis examines past draws to identify 'hot' numbers, frequently selected, and 'cold' numbers, rarely drawn. Players use this data to inform future picks. For example, hot numbers may indicate trends or patterns, while cold numbers could signal overdue selections. This statistical insight, while not guaranteeing outcomes, enhances strategies for choosing numbers in games of chance.",
      icon: "growth",
      class: "col-xl-4 xl-50 col-md-6 box-col-6",
      class2: "col-md-6 box-col-4",
    },
  ];

  export const faqQuestionsData = [
    {
      id: 1,
      titles: [
        {
          id: 1,
          title: "Integrating WordPress with Your Website?",
          paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
        },
        {
          id: 2,
          title: "WordPress Site Maintenance ?",
          paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
        },
        {
          id: 3,
          title: "Meta Tags in WordPress ?",
          paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
        },
        {
          id: 4,
          title: "WordPress in Your Language ?",
          paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
        },
      ],
    },
    {
      id: 2,
      subTitle: "Intellectual Property",
      titles: [
        {
          id: 5,
          title: "WordPress Site Maintenance ?",
          paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
        },
        {
          id: 6,
          title: " WordPress in Your Language ?",
          paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
        },
        {
          id: 7,
          title: "Integrating WordPress with Your Website ?",
          paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
        },
      ],
    },
    {
      id: 3,
      subTitle: "Selling And Buying",
      titles: [
        {
          id: 8,
          title: "WordPress Site Maintenance ?",
          paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
        },
        {
          id: 9,
          title: "Meta Tags in WordPress ?",
          paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
        },
        {
          id: 10,
          title: "Validating a Website ?",
          paragraph: "Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
        },
        {
          id: 11,
          title: "Know Your Sources ?",
          paragraph: "A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information.",
        },
      ],
    },
    {
      id: 4,
      subTitle: "User Accounts",
      titles: [
        {
          id: 12,
          title: "Integrating WordPress with Your Website ?",
          paragraph: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
        },
        {
          id: 13,
          title: "WordPress Site Maintenance ?",
          paragraph: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
        },
        {
          id: 14,
          title: " WordPress in Your Language ?",
          paragraph: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
        },
        {
          id: 15,
          title: " Validating a Website ?",
          paragraph: "Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.",
        },
        {
          id: 16,
          title: " Meta Tags in WordPress ?",
          paragraph: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
        },
      ],
    },
  ];

  export const askQuestionData = [
    {
      icon: <Edit />,
      title: "Tutorials",
      link: "./knowledgebase"
    },
    {
      icon: <Globe />,
      title: "Help Center",
      link: "./knowledgebase"
    },
    {
      icon: <BookOpen />,
      title: "Knowledgebase",
      link: "/cion/pages/knowledgebase"
    },
    {
      icon: <FileText />,
      title: "Articles",
      class: "badge badge-primary rounded-pill pull-right",
      val: "42",
      link: "../pages/knowledgebase"
    },
    {
      icon: <Youtube />,
      title: "Video Tutorials",
      class: "badge badge-primary rounded-pill pull-right",
      val: "642",
      link: "../"
    },
    {
      icon: <MessageCircle />,
      title: "Ask Our Community",
      link: "./"
    },
    {
      icon: <Mail />,
      title: "Contact Us",
      link: "./"
    },
  ];

  export const latestData = [
    {
      iconClass: <RotateCcw className="font-primary" />,
      val: "DavidLinner",
      title: "requested money back for a double debit card charge",
      time: "10 minutes ago",
    },
    {
      iconClass: <DollarSign className="font-primary" />,
      title: "All sellers have received monthly payouts",
      time: "2 hours ago",
    },
    {
      iconClass: <Link2 className="font-primary" />,
      name: "UserChristopher",
      val: "Wallace",
      title: "is on hold and awaiting for staff reply",
      time: "45 minutes ago",
    },
    {
      iconClass: <Check className="font-primary" />,
      val: "Victoria Wilson",
      title: "Ticket #43683 has been closed by",
      time: "Dec 7, 11:48",
    },
    {
      iconClass: <DollarSign className="font-primary" />,
      title: "All sellers have received monthly payouts",
      time: "2 hours ago",
    },
    {
      iconClass: <Link2 className="font-primary" />,
      name: "UserChristopher",
      val: "Wallace",
      title: "is on hold and awaiting for staff reply",
      time: "45 minutes ago",
    },
    {
      iconClass: <Check className="font-primary" />,
      val: "Victoria Wilson",
      title: "Ticket #43683 has been closed by",
      time: "Dec 7, 11:48",
    },
    {
      iconClass: <Link2 className="font-primary" />,
      name: "UserChristopher",
      val: "Wallace",
      title: "is on hold and awaiting for staff reply",
      time: "45 minutes ago",
    },
    {
      iconClass: <Link2 className="font-primary" />,
      name: "UserChristopher",
      val: "Wallace",
      title: "is on hold and awaiting for staff reply",
      time: "45 minutes ago",
    }
   
  ];

  export const featuredData = [
    {
      id: 1,
      img: 'faq/1.jpg',
      date: '15 April 2023',
      writer: 'Admin',
      hits: '0',
      short_description: [' Web Designing course belongs to the field of Computer Science and IT. It enables students to learn.'],
      rvalue: 4,
      title: 'Web Design',
    },
    {
      id: 2,
      img: 'faq/2.jpg',
      date: '15 May 2023',
      writer: 'Admin',
      hits: '0',
      short_description: ['This course is designed to start you on a path toward future studies in web development and design.'],
      rvalue: 5,
      title: 'Web Development',
    },
    {
      id: 3,
      img: 'faq/3.jpg',
      date: '15 June 2023',
      writer: 'Admin',
      hits: '0',
      short_description: ['User interface design (UI) is the design for machines and software, such as mobile devices, computers.'],
      rvalue: 4,
      title: 'UI Design',
    },
    {
      id: 4,
      img: 'faq/4.jpg',
      date: '15 July 2023',
      writer: 'Admin',
      hits: '0',
      short_description: ['A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn.'],
      rvalue: 3,
      title: 'Tailwind Design',
    },
  ];

  interface FaqDataType{
    class?: string;
    allData: {
        class?: string;
        class2?: string;
        class1?: string;
        icon: "Codepen" | "FileText" | "Youtube";
        title: string;
        paragraph: string;
    }[];
  }
 export const latestArticleFaqData:FaqDataType[] = [{
    "class": "6",
    "allData": [{
            "class": "12",
            "icon": "Codepen",
            "title": "Using Video",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class": "12",
            "icon": "Codepen",
            "title": "Vel illum qu",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class": "12",
            "icon": "Codepen",
            "title": "Cum sociis natoqu",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        }
    ]
},
{
    "class": "6",
    "allData": [{
            "class": "12",
            "icon": "FileText",
            "title": "Donec pede justo",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class": "12",
            "icon": "FileText",
            "title": "Nam quam nunc",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class": "12",
            "icon": "FileText",
            "title": "Using Video",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        }
    ]
},
{

    "allData": [{
            "class1": "12",
            "class2": "6",
            "icon": "Youtube",
            "title": "Vel illum qu",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class1": "12",
            "class2": "6",
            "icon": "Youtube",
            "title": "Cum sociis natoqu",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        },
        {
            "class1": "12",
            "icon": "Youtube",
            "title": "Donec pede justo",
            "paragraph": "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
        }
    ]
}
]


export const knowledgeBaseData = [
    {
      id: 1,
      title: "Any other legal pages I should know about?",
      knowledgeList: [
        {
          text: "Policies have wide acceptance among editors",
          fileTextIcon: true,
        },
        {
          text: "Guidelines are sets of best practices supported.",
          badge: "New",
          fileTextIcon: true,
        },
        {
          fileTextIcon: true,
          text: "Editors should attempt to follow guidelines.",
        },
        {
          fileTextIcon: true,
          text: "They are best treated with common sense.",
        },
        {
          text: "See More (40)",
        },
      ],
    },
    {
      id: 2,
      title: "Does Moment have an API or automatic export?",
      knowledgeList: [
        {
          text: "Resource API content produced by business.",
          fileTextIcon: true,
          badge: "Review",
        },
        {
          fileTextIcon: true,
          text: "API allows the search and download of AP Images.",
        },
        {
          fileTextIcon: true,
          text: "API retrieve a list of breaking news categories",
          badge: "Articles",
        },
        {
          fileTextIcon: true,
          text: "API retrieves rules for a fantasy league.",
        },
        {
          text: "See More (90)",
        },
      ],
    },
    {
      id: 3,
      title: "WordPress Site Maintenance",
      knowledgeList: [
        {
          fileTextIcon: true,
          text: "Make a backup of your WordPress website.",
        },
        {
          fileTextIcon: true,
          text: "Run a security check.",
          badge: "Closed",
        },
        {
          fileTextIcon: true,
          text: "Monitor your search engine optimization.",
        },
        {
          fileTextIcon: true,
          text: "Set a regular maintenance schedule.",
        },
        {
          text: "See More (50)",
        },
      ],
    },
    {
      id: 4,
      title: "Can I change my plan later?",
      knowledgeList: [
        {
          text: "You can easily change plans Wonderfull at any time.",
          fileTextIcon: true,
          badge: "Popular",
        },
        {
          fileTextIcon: true,
          text: "you’ll be charged a prorated cover that upgrade.",
        },
        {
          fileTextIcon: true,
          text: "Sed quia non numquam eius modi tempora incidunt",
        },
        {
          fileTextIcon: true,
          text: "But also the leap into electronic typesetting,",
        },
        {
          text: "See More (90)",
        },
      ],
    },
    {
      id: 5,
      title: "How do I pay for the Premium Plan?",
      knowledgeList: [
        {
          text: "Premium plans are billed as a yearly payment.",
          fileTextIcon: true,
        },
        {
          text: "Etraset sheets containing Lorem Ipsum passages",
          fileTextIcon: true,
        },
        {
          text: "You can set Monthly or Yearly for Premium plan.",
          fileTextIcon: true,
        },
        {
          fileTextIcon: true,
          text: "When an unknown printer took a galley",
          badge: "Closed",
        },
        {
          text: "See More (50)",
        },
      ],
    },
    {
      id: 6,
      title: "What is your Shopping Policy",
      knowledgeList: [
        {
          fileTextIcon: true,
          text: "Many new editors rely on policy interpretations.",
        },
        {
          fileTextIcon: true,
          text: "It has a more-or-less normal distribution of letters",
        },
        {
          text: "Violation of maintaining a neutral point of view.",
          fileTextIcon: true,
          badge: "Article",
        },
        {
          fileTextIcon: true,
          text: "You double check your sources.",
        },
        {
          text: "See More (26)",
        },
      ],
    },
    {
      id: 7,
      title: "Validating a Website",
      knowledgeList: [
        {
          text: "When our power of choice is untrammelled",
          fileTextIcon: true,
          badge: "Review",
        },
        {
          fileTextIcon: true,
          text: "It will frequently occur that pleasures",
        },
        {
          text: "who fail in their duty through weakness",
          fileTextIcon: true,
          badge: "Closed",
        },
        {
          fileTextIcon: true,
          text: " At vero eos et accusamus et iusto",
        },
        {
          text: "See More (10)",
        },
      ],
    },
    {
      id: 8,
      title: "How can I change the component?",
      knowledgeList: [
        {
          fileTextIcon: true,
          text: "You can modify some specific component settings.",
        },
        {
          text: "Click Apply to validate the set preferences.",
          fileTextIcon: true,
          badge: "Popular",
        },
        {
          text: "Following procedure applie to external components",
          fileTextIcon: true,
          badge: "Review",
        },
        {
          text: "To modify those specific components settings.",
          fileTextIcon: true,
        },
        {
          text: "See More (21)",
        },
      ],
    },
    {
      id: 9,
      title: "What is Lorem Ipsum?",
      knowledgeList: [
        {
          text: "Common language regular the existing languages.",
          fileTextIcon: true,
        },
        {
          text: "Lorem Ipsum been industry's standard dummy",
          fileTextIcon: true,
        },
        {
          text: "Language is not real even ‘Lorem’ does't exist.",
          fileTextIcon: true,
        },
        {
          text: "dummy text that is not meant to mean anything.",
          badge: "On hold",
          fileTextIcon: true,
        },
        {
          text: "See More (34)",
        },
      ],
    },
  ];