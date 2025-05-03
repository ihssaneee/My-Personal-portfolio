import CoffeeShopWebsite from "../assets/projects/coffeeShopWebsite2.PNG"
import adminDashboard from "../assets/projects/905_1x_shots_so.png";
import electronicsWebsite from "../assets/projects/electronics-app.png";
export const projects=[
    {
        name:"Coffee shop website",
        description:"A static website for a coffee shop, built using HTML, CSS, and JavaScript. This is a basic website to establish an online presence for the coffee shop, with features like a navigation menu, slideshow, and sections for about us, customer favorites, and a gallery. ",
        tags:[
            {
                name:'html',
                color:"#BB8493"
            },
            {
                name:'javascript',
                color:"#03C988",

            },
            {
                name:"css",
                color:"#0080C3",
            }
        ],
        image:CoffeeShopWebsite,
        source_code_link:"https://github.com/ihssaneee/Coffee-shop-website"
    },
    {
        name:"Book Review Admin Panel",
        description:"A modern and responsive admin dashboard designed for managing a book review platform. This dashboard empowers administrators to oversee users, books, reviews, and genres efficiently. It features a dark mode, customizable UI, and secure user management, ensuring a seamless experience for administrators.",
        tags:[
            {
                name:'react',
                color:"#BB8493"
            },
            {
                name:'laravel',
                color:"#03C988",

            },
            {
                name:"tailwind",
                color:"#0080C3",
            }
        ],
        image:adminDashboard,
        source_code_link:"https://github.com/ihssaneee/Book-reviews"
    },
    {
        name:"Ecommerce platform",
        description:"A feature-rich e-commerce platform built with Laravel, offering a seamless shopping experience. The platform includes user authentication, product browsing by categories and subcategories, a dynamic shopping cart, secure checkout with Stripe integration. Admins have the ability to manage the product catalog by adding new products. ",
        tags:[
            {
                name:'blade',
                color:"#BB8493"
            },
            {
                name:'laravel',
                color:"#03C988",

            },
            {
                name:"css",
                color:"#0080C3",
            }
        ],
        image:electronicsWebsite,
        source_code_link:"https://github.com/ihssaneee/Electronics-website"
    }
]