//Import Images
import gsThumbnail from "./img/work/gs-clearance/gs-thumbnail.png";
import gsTab1 from "./img/work/gs-clearance/gs-thumbnail.png";
import gsTab2 from "./img/work/gs-clearance/about.jpg";
import gsTab3 from "./img/work/gs-clearance/about-scrolled.jpg";
import gsTab4 from "./img/work/gs-clearance/home-map.jpg";
import gsTab5 from "./img/work/gs-clearance/services-deeper.jpg";
import gsTab6 from "./img/work/gs-clearance/home-graphic.jpg";
import gsImage1 from "./img/work/gs-clearance/quote-start.jpg";
import gsImage2 from "./img/work/gs-clearance/postcode-field.gif";
import gsImage3 from "./img/work/gs-clearance/product-selection.jpg";
import gsImage4 from "./img/work/gs-clearance/payment.jpg";
import gsImage5 from "./img/work/gs-clearance/quote-breakdown.jpg";
import gsImage6 from "./img/work/gs-clearance/in-phone.png";



export const workState = () => {
    return [
        {
            projectName: "Waste Clearance",
            companyName: "G&S Clearance",
            thumbnail: gsThumbnail,
            teaserText: ["Branding Identity", "Bespoke WordPress website", "Custom quote form."],
            url: "/work/gs-clearance",
            whoAre: "A fast growing waste clearance company with a good customer reputation, operating in the South East.",
            brief: [
                { briefPoint: "Give the website a visual overhaul" },
                { briefPoint: "Build a quote generator tool" },
                { briefPoint: "Improve speed" }
            ],
            deliverables: [
                { deliverablesPoint: "Visual Identity" },
                { deliverablesPoint: "Bespoke Wordpress website" },
                { deliverablesPoint: "Bespoke quote generator" }
            ],
            carouselTitle: "Design",
            carouselSubtitle: "Making the site easy to use",
            carouselText: "The target audience was broad, so the site needed to appeal to, and be easily used by, everyone. Its design needed to be refreshed to meet the standards expected in 2020. The original site was completely stripped back and only essential content was kept.",
            carouselBackground: "#e8efde",
            carouselImages: [
                {
                    carouselImage: gsTab1,
                    carouselAltText: "G&S Homepage"
                },
                {
                    carouselImage: gsTab2,
                    carouselAltText: "G&S about us page"
                },
                {
                    carouselImage: gsTab3,
                    carouselAltText: "G&S Why us module"
                },
                {
                    carouselImage: gsTab4,
                    carouselAltText: "G&S Areas we cover module"
                },
                {
                    carouselImage: gsTab5,
                    carouselAltText: "G&S Garden Clearance page"
                },
                {
                    carouselImage: gsTab6,
                    carouselAltText: "G&S Recycling module"
                },
            ],
            contentTitle: "Bespoke quote generator",
            contentModules: [
                {
                    contentImg: gsImage1,
                    contentImgAltText: "Example of how the postcode entry works",
                    contentSubtitle: "Minimising the number of cold leads",
                    contentText: "<p>The aim was to minimise time spent on the phone generating quotes, and to increase the number of enquiries.</p><p>G&S required a bespoke quote calculator which could calculate the charge to the user based on their selections, and allow them to choose a date and time for their collection. I designed the entire experience of the user, then built the form using a plugin as the base system, and used PHP and JavaScript to add complex functionality.</p>"
                },
                {
                    contentImg: gsImage2,
                    contentImgAltText: "Minimising the number of cold leads",
                    contentSubtitle: "Streamlining the booking process",
                    contentText: "<p>As G&S only operate in the South East, I needed to make sure that only people in this area were enquiring. To do this I used the first half of their postcode to validate where in the country they were.</p><p>I split the postcode into two fields and used JavaScript to allow users to seamlessly type their postcode in across two fields.</p>",
                    link: "https://codepen.io/Rubenkretek/full/wvBGERO",
                    linkText: "Try it out"
                },
                {
                    contentImg: gsImage3,
                    contentImgAltText: "List of products",
                    contentSubtitle: "Making the selection of products idiot-proof",
                    contentText: "<p>I created a number field and +/- increments which allow the user to easily choose the quantity of products. When an item is selected, it becomes highlighted with a green shadow and border, which disappears if deselected. These elements were built using JavaScript and CSS.</p>",
                    link: "https://codepen.io/Rubenkretek/full/VwYQVgO",
                    linkText: "Try it out"
                },
                {
                    contentImg: gsImage4,
                    contentImgAltText: "Payment process",
                    contentSubtitle: "Taking payments",
                    contentText: "<p>Users can either book an appointment by paying a deposit, or have the quote emailed to them. I connected stripe payments to the form via an API call, enabling users to securely make payments within the form.</p>"
                },
                {
                    contentImg: gsImage5,
                    contentImgAltText: "Quote breakdown page",
                    contentSubtitle: "Displaying the quote breakdown",
                    contentText: "<p>Users see a complete breakdown of their quote and appointment details before booking, which is also emailed to them upon submission of the form. The plugin used for the form didn’t have the necessary functionality, so I used PHP to get around this.</p>"
                },
                {
                    contentImg: gsImage6,
                    contentImgAltText: "Iphone displaying the G&S homepage",
                    contentSubtitle: "G&S staff are users too",
                    contentText: "<p>I worked with the staff at G&S to ensure the site also provided them with good UX. I used email templates with conditional statements to send them the necessary information regarding bookings and quotes.</p>"
                },
            ],
            conclusionText: "<p>Professional, modern design with easy to use complex functionality, enabling users to book online.</p><p>Click the button below to see the live site (please bear in mind the site has been taken over by another company so it may have changed since I built it)</p>",
            conclusionLink: "https://www.gsclearance.co.uk/",
            conclusionLinkText: "Visit site"
        },
        {
            projectName: "Care agency",
            companyName: "FirstCol",
            thumbnail: gsThumbnail,
            teaserText: ["Branding Identity", "Bespoke WordPress website", "Custom quote form."],
            url: "/work/firstcol",
            whoAre: "A fast growing waste clearance company with a good customer reputation, operating in the South East.",
            brief: [
                { briefPoint: "Give the website a visual overhaul" },
                { briefPoint: "Build a quote generator tool" },
                { briefPoint: "Improve speed" }
            ],
            deliverables: [
                { deliverablesPoint: "Visual Identity" },
                { delivarablesPoint: "Bespoke Wordpress website" },
                { delivarablesPoint: "Bespoke quote generator" }
            ],
            carouselTitle: "Design",
            carouselSubtitle: "Making the site easy to use",
            carouselText: "The target audience was broad, so the site needed to appeal to, and be easily used by, everyone. Its design needed to be refreshed to meet the standards expected in 2020. The original site was completely stripped back and only essential content was kept.",
            carouselBackground: "#f7d2e6",
            carouselImages: [
                {
                    carouselImage: gsTab1,
                    carouselAltText: "G&S Homepage"
                },
                {
                    carouselImage: gsTab2,
                    carouselAltText: "G&S about us page"
                },
                {
                    carouselImage: gsTab3,
                    carouselAltText: "G&S Why us module"
                },
                {
                    carouselImage: gsTab4,
                    carouselAltText: "G&S Areas we cover module"
                },
                {
                    carouselImage: gsTab5,
                    carouselAltText: "G&S Garden Clearance page"
                },
                {
                    carouselImage: gsTab6,
                    carouselAltText: "G&S Recycling module"
                },
            ],
            contentTitle: "Bespoke quote generator",
            contentModules: [
                {
                    contentImg: gsImage1,
                    contentImgAltText: "Example of how the postcode entry works",
                    contentSubtitle: "Minimising the number of cold leads",
                    contentText: "<p>The aim was to minimise time spent on the phone generating quotes, and to increase the number of enquiries.</p><p>G&S required a bespoke quote calculator which could calculate the charge to the user based on their selections, and allow them to choose a date and time for their collection. I designed the entire experience of the user, then built the form using a plugin as the base system, and used PHP and JavaScript to add complex functionality.</p>"
                },
                {
                    contentImg: gsImage2,
                    contentImgAltText: "Minimising the number of cold leads",
                    contentSubtitle: "Streamlining the booking process",
                    contentText: "<p>As G&S only operate in the South East, I needed to make sure that only people in this area were enquiring. To do this I used the first half of their postcode to validate where in the country they were.</p><p>I split the postcode into two fields and used JavaScript to allow users to seamlessly type their postcode in across two fields.</p>",
                    link: "https://codepen.io/Rubenkretek/full/wvBGERO",
                    linkText: "Try it out"
                },
                {
                    contentImg: gsImage3,
                    contentImgAltText: "List of products",
                    contentSubtitle: "Making the selection of products idiot-proof",
                    contentText: "<p>I created a number field and +/- increments which allow the user to easily choose the quantity of products. When an item is selected, it becomes highlighted with a green shadow and border, which disappears if deselected. These elements were built using JavaScript and CSS.</p>",
                    link: "https://codepen.io/Rubenkretek/full/VwYQVgO",
                    linkText: "Try it out"
                },
                {
                    contentImg: gsImage4,
                    contentImgAltText: "Payment process",
                    contentSubtitle: "Taking payments",
                    contentText: "<p>Users can either book an appointment by paying a deposit, or have the quote emailed to them. I connected stripe payments to the form via an API call, enabling users to securely make payments within the form.</p>"
                },
                {
                    contentImg: gsImage5,
                    contentImgAltText: "Quote breakdown page",
                    contentSubtitle: "Displaying the quote breakdown",
                    contentText: "<p>Users see a complete breakdown of their quote and appointment details before booking, which is also emailed to them upon submission of the form. The plugin used for the form didn’t have the necessary functionality, so I used PHP to get around this.</p>"
                },
                {
                    contentImg: gsImage6,
                    contentImgAltText: "Iphone displaying the G&S homepage",
                    contentSubtitle: "G&S staff are users too",
                    contentText: "<p>I worked with the staff at G&S to ensure the site also provided them with good UX. I used email templates with conditional statements to send them the necessary information regarding bookings and quotes.</p>"
                },
            ],
            conclusionText: "<p>Professional, modern design with easy to use complex functionality, enabling users to book online.</p><p>Click the button below to see the live site (please bear in mind the site has been taken over by another company so it may have changed since I built it)</p>",
            conclusionLink: "https://www.gsclearance.co.uk/",
            conclusionLinkText: "Visit site"
        },
    ];
};