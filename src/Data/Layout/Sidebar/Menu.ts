import { SidebarMenuTypes } from "./SidebarTypes";

export const SidebarMenu:SidebarMenuTypes[] = [
    {
        title : "General",
        svgIcon:"home",
        title1:"General",
        subMenu:[
            {
                svgIcon:"home",
                title:"Dashboards",
                subMenu:[
                    {
                        title:"Shopping Place",
                        link:`${process.env.PUBLIC_URL}/dashboards/shoppingplace`,
                        type:"link"
                    },
                    {
                        title:"CRM Dashboard",
                        link:`${process.env.PUBLIC_URL}/dashboards/crmdashboard`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"widget",
                title:"Widget",
                subMenu:[
                    {
                        title:"General",
                        link:`${process.env.PUBLIC_URL}/widget/general`,
                        type:"link"
                    },
                    {
                        title:"Chart",
                        link:`${process.env.PUBLIC_URL}/widget/chart`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"layout",
                title:"Page layout",
                subMenu:[
                    {
                        title:"Hide Nav Scroll",
                        link:`${process.env.PUBLIC_URL}/pagelayout/hidenavscroll`,
                        type:"link"
                    },
                    {
                        title:"Footer Dark",
                        link:`${process.env.PUBLIC_URL}/pagelayout/footerdark`,
                        type:"link"
                    },
                    {
                        title:"Footer Fixed",
                        link:`${process.env.PUBLIC_URL}/pagelayout/footerfixed`,
                        type:"link"
                    }
                ]
            }
        ]
    },
    {
        title : "Ui Kits",
        svgIcon:"Ui-kites",
        title1:"Components",
        subMenu:[
            {
                svgIcon:"ui-kits",
                title:"Ui Kits",
                subMenu:[
                    {
                        title:"Typography",
                        link:`${process.env.PUBLIC_URL}/uikits/typography`,
                        type:"link"
                    },
                    {
                        title:"Avatars",
                        link:`${process.env.PUBLIC_URL}/uikits/avatars`,
                        type:"link"
                    },
                    {
                        title:"Helper Classes",
                        link:`${process.env.PUBLIC_URL}/uikits/helperclasses`,
                        type:"link"
                    },
                    {
                        title:"Grid",
                        link:`${process.env.PUBLIC_URL}/uikits/grid`,
                        type:"link"
                    },
                    {
                        title:"Tag & Pills",
                        link:`${process.env.PUBLIC_URL}/uikits/tag&pills`,
                        type:"link"
                    },
                    {
                        title:"Progress",
                        link:`${process.env.PUBLIC_URL}/uikits/progress`,
                        type:"link"
                    },
                    {
                        title:"Modal",
                        link:`${process.env.PUBLIC_URL}/uikits/modal`,
                        type:"link"
                    },
                    {
                        title:"Alert",
                        link:`${process.env.PUBLIC_URL}/uikits/alert`,
                        type:"link"
                    },
                    {
                        title:"Popover",
                        link:`${process.env.PUBLIC_URL}/uikits/popover`,
                        type:"link"
                    },
                    {
                        title:"Tooltip",
                        link:`${process.env.PUBLIC_URL}/uikits/tooltip`,
                        type:"link"
                    },
                    {
                        title:"Dropdown",
                        link:`${process.env.PUBLIC_URL}/uikits/dropdown`,
                        type:"link"
                    },
                    {
                        title:"Accordion",
                        link:`${process.env.PUBLIC_URL}/uikits/accordion`,
                        type:"link"
                    },
                    {
                        title:"Tab",
                        link:`${process.env.PUBLIC_URL}/uikits/tab`,
                        type:"link"
                    },
                    {
                        title:"Lists",
                        link:`${process.env.PUBLIC_URL}/uikits/lists`,
                        type:"link"
                    }
                ]
            }
        ]
    },
    {
        title : "Perk Ui",
        svgIcon:"Perk-Ui",
        title1:"Components",
        subMenu:[
            {
                svgIcon:"bonus-kit",
                title:"Bonus Ui",
                subMenu:[
                    {
                        title:"Scrollable",
                        link:`${process.env.PUBLIC_URL}/bonusui/scrollable`,
                        type:"link"
                    },
                    {
                        title:"Tree view",
                        link:`${process.env.PUBLIC_URL}/bonusui/treeview`,
                        type:"link"
                    },
                    {
                        title:"Toasts",
                        link:`${process.env.PUBLIC_URL}/bonusui/toasts`,
                        type:"link"
                    },
                    {
                        title:"Rating",
                        link:`${process.env.PUBLIC_URL}/bonusui/rating`,
                        type:"link"
                    },
                    {
                        title:"dropzone",
                        link:`${process.env.PUBLIC_URL}/bonusui/dropzone`,
                        type:"link"
                    },
                    {
                        title:"Tour",
                        link:`${process.env.PUBLIC_URL}/bonusui/tour`,
                        type:"link"
                    },
                    {
                        title:"SweetAlert2",
                        link:`${process.env.PUBLIC_URL}/bonusui/sweetalert2`,
                        type:"link"
                    },
                    {
                        title:"Owl Carousel",
                        link:`${process.env.PUBLIC_URL}/bonusui/owlcarousel`,
                        type:"link"
                    },
                    {
                        title:"Ribbons",
                        link:`${process.env.PUBLIC_URL}/bonusui/ribbons`,
                        type:"link"
                    },
                    {
                        title:"Pagination",
                        link:`${process.env.PUBLIC_URL}/bonusui/pagination`,
                        type:"link"
                    },
                    {
                        title:"Breadcrumb",
                        link:`${process.env.PUBLIC_URL}/bonusui/breadcrumb`,
                        type:"link"
                    },
                    {
                        title:"Range Slider",
                        link:`${process.env.PUBLIC_URL}/bonusui/rangeslider`,
                        type:"link"
                    },
                    {
                        title:"Image cropper",
                        link:`${process.env.PUBLIC_URL}/bonusui/imagecropper`,
                        type:"link"
                    },
                    {
                        title:"Basic Card",
                        link:`${process.env.PUBLIC_URL}/bonusui/basiccard`,
                        type:"link"
                    },
                    {
                        title:"Creative Card",
                        link:`${process.env.PUBLIC_URL}/bonusui/creativecard`,
                        type:"link"
                    },
                    {
                        title:"Timeline",
                        link:`${process.env.PUBLIC_URL}/bonusui/timeline`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"icons",
                title:"Icons",
                subMenu:[
                    {
                        title:"Flag icon",
                        link:`${process.env.PUBLIC_URL}/icons/flagicon`,
                        type:"link"
                    },
                    {
                        title:"Fontawesome Icon",
                        link:`${process.env.PUBLIC_URL}/icons/fontawesomeicon`,
                        type:"link"
                    },
                    {
                        title:"Ico Icon",
                        link:`${process.env.PUBLIC_URL}/icons/icoicon`,
                        type:"link"
                    },
                    {
                        title:"Themify Icon",
                        link:`${process.env.PUBLIC_URL}/icons/themifyicon`,
                        type:"link"
                    },
                    {
                        title:"Feather Icon",
                        link:`${process.env.PUBLIC_URL}/icons/feathericon`,
                        type:"link"
                    },
                    {
                        title:"Whether Icon",
                        link:`${process.env.PUBLIC_URL}/icons/whethericon`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"button",
                title:"Buttons",
                subMenu:[
                    {
                        title:"Default Style",
                        link:`${process.env.PUBLIC_URL}/buttons/defaultstyle`,
                        type:"link"
                    },
                    {
                        title:"Flat Style",
                        link:`${process.env.PUBLIC_URL}/buttons/flatstyle`,
                        type:"link"
                    },
                    {
                        title:"Edge Style",
                        link:`${process.env.PUBLIC_URL}/buttons/edgestyle`,
                        type:"link"
                    },
                    {
                        title:"Raised Style",
                        link:`${process.env.PUBLIC_URL}/buttons/raisedstyle`,
                        type:"link"
                    },
                    {
                        title:"Button Group",
                        link:`${process.env.PUBLIC_URL}/buttons/buttongroup`,
                        type:"link"
                    }
                ]
            }
        ]
    },
    {
        title : "Forms",
        svgIcon:"Form",
        title1:"Forms & Tables",
        subMenu:[
            {
                svgIcon:"form",
                title:"Forms",
                subMenu:[
                    {
                        title:"Form Controls",
                        subMenu:[
                            {
                                title:"Form Validation",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/formvalidation`,
                                bookmark: true,
                                type:"link"
                            },
                            {
                                title:"Base Inputs",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/baseinputs`,
                                type:"link"
                            },
                            {
                                title:"Checkbox & Radio",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/checkbox&radio`,
                                type:"link"
                            },
                            {
                                title:"Input Groups",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/inputgroups`,
                                type:"link"
                            },
                            {
                                title:"Input Mask",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/inputmask`,
                                type:"link"
                            },
                            {
                                title:"Mega Options",
                                link:`${process.env.PUBLIC_URL}/forms/formcontrols/megaoptions`,
                                type:"link"
                            }
                        ]
                    },
                    {
                        title:"Form Widgets",
                        subMenu:[
                            {
                                title:"Datepicker",
                                link:`${process.env.PUBLIC_URL}/forms/formwidgets/datepicker`,
                                type:"link"
                            },
                            {
                                title:"Touchspin",
                                link:`${process.env.PUBLIC_URL}/forms/formwidgets/touchspin`,
                                type:"link"
                            },
                            {
                                title:"Switch",
                                link:`${process.env.PUBLIC_URL}/forms/formwidgets/switch`,
                                type:"link"
                            },
                            {
                                title:"Typeahead",
                                link:`${process.env.PUBLIC_URL}/forms/formwidgets/typeahead`,
                                type:"link"
                            },
                            {
                                title:"Clipboard",
                                link:`${process.env.PUBLIC_URL}/forms/formwidgets/clipboard`,
                                type:"link"
                            }
                        ]
                    },
                    {
                        title:"Form layout",
                        subMenu:[
                            {
                                title:"Form Wizard 1",
                                link:`${process.env.PUBLIC_URL}/forms/formlayout/formwizard1`,
                                type:"link"
                            },
                            {
                                title:"Form Wizard 2",
                                link:`${process.env.PUBLIC_URL}/forms/formlayout/formwizard2`,
                                type:"link"
                            },
                            {
                                title:"Two Factor",
                                link:`${process.env.PUBLIC_URL}/forms/formlayout/twofactor`,
                                type:"link"
                            },
                        ]
                    }
                ]
            },
            {
                svgIcon:"table",
                title:"Tables",
                subMenu:[
                    {
                        title:"Reactstrap Tables",
                        subMenu:[
                            {
                                title:"Basic Tables",
                                link:`${process.env.PUBLIC_URL}/tables/reactstraptables/basictables`,
                                bookmark: true,
                                type:"link"
                            },
                            {
                                title:"Table components",
                                link:`${process.env.PUBLIC_URL}/tables/reactstraptables/tablecomponents`,
                                type:"link"
                            }
                        ]
                    },
                    {
                        title:"Data Tables",
                        subMenu:[
                            {
                                title:"Basic Init",
                                link:`${process.env.PUBLIC_URL}/tables/datatables/basicinit`,
                                type:"link"
                            },
                            {
                                title:"Advance Init",
                                link:`${process.env.PUBLIC_URL}/tables/datatables/advanceinit`,
                                type:"link"
                            },
                            {
                                title:"API",
                                link:`${process.env.PUBLIC_URL}/tables/datatables/api`,
                                type:"link"
                            },
                            {
                                title:"Data Sources",
                                link:`${process.env.PUBLIC_URL}/tables/datatables/datasources`,
                                type:"link"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title : "Charts",
        svgIcon:"Charts",
        title1:"Components",
        subMenu:[
            {
                svgIcon:"charts",
                title:"Charts",
                subMenu:[
                    {
                        title:"Apex Chart",
                        link:`${process.env.PUBLIC_URL}/charts/apexchart`,
                        type:"link"
                    },
                    {
                        title:"Google Chart",
                        link:`${process.env.PUBLIC_URL}/charts/googlechart`,
                        type:"link"
                    },
                    {
                        title:"Chatjs Chart",
                        link:`${process.env.PUBLIC_URL}/charts/chatjschart`,
                        type:"link"
                    }
                ]
            }
        ]
    },
    {
        title : "Apps",
        svgIcon:"Editor",
        title1:"Application",
        subMenu:[
            {
                svgIcon:"project",
                title:"Project",
                subMenu:[
                    {
                        title:"Project List",
                        link:`${process.env.PUBLIC_URL}/apps/project/projectlist`,
                        type:"link"
                    },
                    {
                        title:"Create new",
                        link:`${process.env.PUBLIC_URL}/apps/project/createnew`,
                        type:"link"
                    }
                ]
            },
            {
                title:"File manager",
                svgIcon:"file", 
                link:`${process.env.PUBLIC_URL}/apps/filemanager`
            },
            {
                svgIcon:"ecommerce",
                title:"Ecommerce",
                subMenu:[
                    {
                        title:"Product",
                        link:`${process.env.PUBLIC_URL}/ecommerce/product`,
                        type:"link"
                    },
                    {
                        title:"Product page",
                        link:`${process.env.PUBLIC_URL}/ecommerce/productpage`,
                        type:"link"
                    },
                    {
                        title:"Product list",
                        link:`${process.env.PUBLIC_URL}/ecommerce/productlist`,
                        type:"link"
                    },
                    {
                        title:"Payment Details",
                        link:`${process.env.PUBLIC_URL}/ecommerce/paymentdetails`,
                        type:"link"
                    },
                    {
                        title:"Order History",
                        link:`${process.env.PUBLIC_URL}/ecommerce/orderhistory`,
                        type:"link"
                    },
                    {
                        title:"Invoice",
                        link:`${process.env.PUBLIC_URL}/ecommerce/invoice`,
                        type:"link"
                    },
                    {
                        title:"Cart",
                        link:`${process.env.PUBLIC_URL}/ecommerce/cart`,
                        type:"link"
                    },
                    {
                        title:"Wishlist",
                        link:`${process.env.PUBLIC_URL}/ecommerce/wishlist`,
                        type:"link"
                    },
                    {
                        title:"Checkout",
                        link:`${process.env.PUBLIC_URL}/ecommerce/checkout`,
                        type:"link"
                    },
                    {
                        title:"Pricing",
                        link:`${process.env.PUBLIC_URL}/ecommerce/pricing`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"email",
                title:"Email",
                subMenu:[
                    {
                        title:"Email App",
                        link:`${process.env.PUBLIC_URL}/email/emailapp`,
                        type:"link",
                        bookmark: true,
                    },
                    {
                        title:"Email Compose",
                        link:`${process.env.PUBLIC_URL}/email/emailcompose`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"chat",
                title:"Chat",
                subMenu:[
                    {
                        title:"Chat App",
                        link:`${process.env.PUBLIC_URL}/chat/chatapp`,
                        type:"link"
                    },
                    {
                        title:"Video chat",
                        link:`${process.env.PUBLIC_URL}/chat/videochat`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"user",
                title:"Users",
                subMenu:[
                    {
                        title:"Users Profile",
                        link:`${process.env.PUBLIC_URL}/users/usersprofile`,
                        type:"link"
                    },
                    {
                        title:"Users Edit",
                        link:`${process.env.PUBLIC_URL}/users/usersedit`,
                        type:"link"
                    },
                    {
                        title:"Users Cards",
                        link:`${process.env.PUBLIC_URL}/users/userscards`,
                        type:"link"
                    }
                ]
            },
            {
                title:"Bookmarks",
                svgIcon:"bookmark",
                link:`${process.env.PUBLIC_URL}/apps/bookmark`
            },
            {
                title:"Contacts",
                svgIcon:"contact",
                link:`${process.env.PUBLIC_URL}/apps/contact`
            },
            {
                title:"Tasks",
                svgIcon:"task",
                link:`${process.env.PUBLIC_URL}/apps/task`
            },
            {
                title:"Calendar",
                svgIcon:"calendar",
                link:`${process.env.PUBLIC_URL}/apps/calender`
            },
            {
                title:"Social App",
                svgIcon:"social",
                link:`${process.env.PUBLIC_URL}/apps/socialapp`
            },
            {
                title:"To-Do",
                svgIcon:"to-do",
                link:`${process.env.PUBLIC_URL}/apps/todo`
            },
            {
                title:"Search Result",
                svgIcon:"search",
                link:`${process.env.PUBLIC_URL}/apps/searchresult`
            }
        ]
    },
    {
        title : "Pages",
        svgIcon:"Grid",
        title1:"Miscellaneous",
        subMenu:[
            {
                title:"Sample page",
                svgIcon:"sample-page",
                link:`${process.env.PUBLIC_URL}/pages/samplepage`
            },
            {
                svgIcon:"others",
                title:"Other",
                subMenu:[
                    {
                        title:"Error Page",
                        subMenu:[
                            {
                                title:"Error 400",
                                link:`${process.env.PUBLIC_URL}/pages/others/error400`,
                                type:"link"
                            },
                            {
                                title:"Error 401",
                                link:`${process.env.PUBLIC_URL}/pages/others/error401`,
                                type:"link"
                            },
                            {
                                title:"Error 403",
                                link:`${process.env.PUBLIC_URL}/pages/others/error403`,
                                type:"link"
                            },
                            {
                                title:"Error 404",
                                link:`${process.env.PUBLIC_URL}/pages/others/error404`,
                                type:"link"
                            },
                            {
                                title:"Error 500",
                                link:`${process.env.PUBLIC_URL}/pages/others/error500`,
                                type:"link"
                            },
                            {
                                title:"Error 503",
                                link:`${process.env.PUBLIC_URL}/pages/others/error503`,
                                type:"link"
                            }
                        ]
                    },
                    {
                        title:"Authentication",
                        subMenu:[
                            {
                                title:"Login Simple",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginsimple`,
                                type:"link"
                            },
                            {
                                title:"Login with bg image",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginwithbgimage`,
                                type:"link"
                            },
                            {
                                title:"Login with image two",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginwithimagetwo`,
                                type:"link"
                            },
                            {
                                title:"Login With validation",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginwithvalidation`,
                                type:"link"
                            },
                            {
                                title:"Login with tooltip",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginwithtooltip`,
                                type:"link"
                            },
                            {
                                title:"Login with sweetalert",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/loginwithsweetalert`,
                                type:"link"
                            },
                            {
                                title:"Register Simple",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/registersimple`,
                                type:"link"
                            },
                            {
                                title:"Register with Bg Image",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/registerwithbgimage`,
                                type:"link"
                            },
                            {
                                title:"Register with image two",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/registerwithimagetwo`,
                                type:"link"
                            },
                            {
                                title:"Register wizard",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/registerwizard`,
                                type:"link"
                            },
                            {
                                title:"Unlock User",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/unlockuser`,
                                type:"link"
                            },
                            {
                                title:"Forget Password",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/forgetpassword`,
                                type:"link"
                            },
                            {
                                title:"Reset Password",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/resetpassword`,
                                type:"link"
                            },
                            {
                                title:"Maintenance",
                                link:`${process.env.PUBLIC_URL}/pages/authentication/maintenance`,
                                type:"link"
                            }
                        ]
                    },
                    {
                        title:"Coming Soon",
                        subMenu:[
                            {
                                title:"Coming Simple",
                                link:`${process.env.PUBLIC_URL}/pages/comingsoon/comingsimple`,
                                type:"link"
                            },
                            {
                                title:"Coming with Bg video",
                                link:`${process.env.PUBLIC_URL}/pages/comingsoon/comingwithbgvideo`,
                                type:"link"
                            },
                            {
                                title:"Coming with Bg Image",
                                link:`${process.env.PUBLIC_URL}/pages/comingsoon/comingwithbgimage`,
                                type:"link"
                            }
                        ]
                    }
                ]
            },
            {
                svgIcon:"gallery",
                title:"Gallery",
                subMenu:[
                    {
                        title:"Gallery Grid",
                        link:`${process.env.PUBLIC_URL}/gallery/gallerygrid`,
                        type:"link"
                    },
                    {
                        title:"Gallery Grid Desc",
                        link:`${process.env.PUBLIC_URL}/gallery/gallerygriddesc`,
                        type:"link"
                    },
                    {
                        title:"Masonry Gallery",
                        link:`${process.env.PUBLIC_URL}/gallery/masonrygallery`,
                        type:"link"
                    },
                    {
                        title:"Masonry with Desc",
                        link:`${process.env.PUBLIC_URL}/gallery/masonrywithdesc`,
                        type:"link"
                    },
                    {
                        title:"Hover Effects",
                        link:`${process.env.PUBLIC_URL}/gallery/hovereffects`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"blog",
                title:"Blog",
                subMenu:[
                    {
                        title:"Blog Details",
                        link:`${process.env.PUBLIC_URL}/blog/blogdetails`,
                        type:"link"
                    },
                    {
                        title:"Blog Single",
                        link:`${process.env.PUBLIC_URL}/blog/blogsingle`,
                        type:"link"
                    },
                    {
                        title:"Add Post",
                        link:`${process.env.PUBLIC_URL}/bolg/addpost`,
                        type:"link"
                    }
                ]
            },
            {
                svgIcon:"faq",
                title:"Faq",
                link:`${process.env.PUBLIC_URL}/pages/faq`,
                type:"link"
            },
            {
                svgIcon:"faq",
                title:"Historical Data",
                link:`${process.env.PUBLIC_URL}/pages/HistoricalData`,
                type:"link"
            },
            {
                svgIcon:"blog",
                title:"Number Details",
                link:`${process.env.PUBLIC_URL}/pages/HistoricalDataByNumber`,
                type:"link"
            },
            {
                svgIcon:"editors",
                title:"Number Picker",
                link:`${process.env.PUBLIC_URL}/pages/NumberPicker`,
                type:"link"
            },
            {
                title:"Job Search",
                svgIcon:"job-search",
                subMenu:[
                    {
                        title:"Cards view",
                        link:`${process.env.PUBLIC_URL}/jobsearch/cardsview`,
                        type:"link"
                    },
                    {
                        title:"List View",
                        link:`${process.env.PUBLIC_URL}/jobsearch/listview`,
                        type:"link"
                    },
                    {
                        title:"Job Details",
                        link:`${process.env.PUBLIC_URL}/jobsearch/jobdetails`,
                        type:"link"
                    },
                    {
                        title:"Apply",
                        link:`${process.env.PUBLIC_URL}/jobsearch/apply`,
                        type:"link"
                    }
                ]
            },
            {
                title:"Learning",
                svgIcon:"learning",
                subMenu:[
                    {
                        title:"Learning List",
                        link:`${process.env.PUBLIC_URL}/learning/learninglist`,
                        type:"link"
                    },
                    {
                        title:"Detailed Course",
                        link:`${process.env.PUBLIC_URL}/learning/detailedcourse`,
                        type:"link"
                    }
                ]
            },
            {
                title:"Maps",
                svgIcon:"maps",
                subMenu:[
                    {
                        title:"Google Map",
                        link:`${process.env.PUBLIC_URL}/maps/googlemap`
                    },
                    {
                        title:"Leaflet Maps",
                        link:`${process.env.PUBLIC_URL}/maps/leafletmaps`
                    }
                ]
            },
            {
                title:"Editors",
                svgIcon:"editors",
                subMenu:[
                    {
                        title:"CK editor",
                        link:`${process.env.PUBLIC_URL}/editors/ckeditor`,
                        type:"link"
                    },
                    {
                        title:"MDE editor",
                        link:`${process.env.PUBLIC_URL}/editors/mdeeditor`
                    },
                    {
                        title:"ACE code editor",
                        link:`${process.env.PUBLIC_URL}/editors/acecodeeditor`,
                        type:"link"
                    }
                ]
            },
            {
                title:"Knowledgebase",
                svgIcon:"knowledgebase",
                link:`${process.env.PUBLIC_URL}/pages/knowledgebase`
            },
            {
                title:"Support Ticket",
                svgIcon:"support-tickets",
                link:`${process.env.PUBLIC_URL}/pages/supportticket`
            }
        ]
    }
]

           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          


           
           
           
           
           
           
           
           






























           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          










         
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          