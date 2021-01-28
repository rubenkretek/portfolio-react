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

import fcThumbnail from "./img/work/firstcol/firstcol-thumbnail.png";
import fcTab1 from "./img/work/firstcol/firstcol-thumbnail.png";
import fcTab2 from "./img/work/firstcol/video.jpg";
import fcTab3 from "./img/work/firstcol/about-2.jpg";
import fcTab4 from "./img/work/firstcol/services.jpg";
import fcImage1 from "./img/work/firstcol/jobs-overview.jpg";
import fcImage2 from "./img/work/firstcol/form.jpg";
import fcImage3 from "./img/work/firstcol/fast-track.jpg";
import fcImage4 from "./img/work/firstcol/job-deeper.jpg";
import fcImage5 from "./img/work/firstcol/phone.png";
import fcImage6 from "./img/work/firstcol/services.jpg";

import hugaThumbnail from "./img/work/huga/huga-thumbnail.png";
import hugaTab1 from "./img/work/huga/huga-thumbnail.png";
import hugaTab2 from "./img/work/huga/phone-showcase.jpg";
import hugaTab3 from "./img/work/huga/photography.jpg";
import hugaTab4 from "./img/work/huga/meet-the-team.jpg";
import hugaTab5 from "./img/work/huga/services-overview.jpg";
import hugaTab6 from "./img/work/huga/blog-post.jpg";
import hugaImage1 from "./img/work/huga/portfolio-piece.jpg";
import hugaImage2 from "./img/work/huga/phone.png";
import hugaImage3 from "./img/work/huga/web-development.jpg";
import hugaImage4 from "./img/work/huga/product-selection.jpg";



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
                    contentImgAltText: "Steps to a booking",
                    contentSubtitle: "Streamlining the booking process",
                    contentText: "<p>The aim was to minimise time spent on the phone generating quotes, and to increase the number of enquiries.</p><p>G&S required a bespoke quote calculator which could calculate the charge to the user based on their selections, and allow them to choose a date and time for their collection. I designed the entire experience of the user, then built the form using a plugin as the base system, and used PHP and JavaScript to add complex functionality.</p>",

                },
                {
                    contentImg: gsImage2,
                    contentImgAltText: "Example of how the postcode entry works",
                    contentSubtitle: "Minimising the number of cold leads",
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
            projectName: "Marketing Agency",
            companyName: "Huga",
            thumbnail: hugaThumbnail,
            teaserText: ["Branding Identity", "Static PHP website", "Print / Video / Merch collateral."],
            url: "/work/huga",
            whoAre: "Sussex-based web design and digital marketing agency, working with local SMEs to promote their businesses online.",
            brief: [
                { briefPoint: "Create a new visual identity for the brand" },
                { briefPoint: "Redesign website for improved functionality" },
                { briefPoint: "Improve mobile UX" }
            ],
            deliverables: [
                { deliverablesPoint: "Static website built in PHP" },
                { deliverablesPoint: "Branding guidelines covering all areas of the brand" },
                { deliverablesPoint: "Multitude of marketing collateral" }
            ],
            carouselTitle: "The project",
            carouselSubtitle: "Complete overhaul of the brand",
            carouselText: "<p>Huga is a Scandinavian-inspired company, so the visual identity needed to borrow elements from Danish design. As well as looking good, it needed to function well to show potential clients that Huga practice what they preach. I created a design that was original, but emanated Danish design through simplicity and typography style.</p>",
            carouselBackground: "#d8eef9",
            carouselImages: [
                {
                    carouselImage: hugaTab1,
                    carouselAltText: "Huga Homepage"
                },
                {
                    carouselImage: hugaTab2,
                    carouselAltText: "Portfolio module"
                },
                {
                    carouselImage: hugaTab3,
                    carouselAltText: "Photography page"
                },
                {
                    carouselImage: hugaTab4,
                    carouselAltText: "Meet the team page"
                },
                {
                    carouselImage: hugaTab5,
                    carouselAltText: "Services menu"
                },
                {
                    carouselImage: hugaTab6,
                    carouselAltText: "Blog post"
                },
            ],
            contentTitle: "Inspiring trust in the brand",
            contentModules: [
                {
                    contentImg: hugaImage1,
                    contentImgAltText: "Portfolio Piece",
                    contentSubtitle: "Attention to detail",
                    contentText: "<p>The old website was rough around the edges and several elements appeared broken. The responsive site was difficult to use and seemed very cluttered.</p><p>I streamlined the design and made sure that every little detail appeared well finished and well considered. I created a series of icons that appear throughout the site, that match the typography and other elements on the site, contributing to a cohesive visual language.</p>"
                },
                {
                    contentImg: hugaImage2,
                    contentImgAltText: "Mobile view of homepage",
                    contentSubtitle: "Responsive is key",
                    contentText: "<p>The responsiveness of the site needed to look and function as though it was purpose built, as opposed to being an afterthought.</p><p>When building the site, I started from the ground up and always considered how the site would work on a variety of devices.</p><p>It was my mission to ensure the site would work equally as well on a mobile phone as on a large 4k screen.</p>",
                },
                {
                    contentImg: hugaImage3,
                    contentImgAltText: "Web development services",
                    contentSubtitle: "Technical",
                    contentText: "<p>The site was built using PHP, which allowed it to be blazing fast and more secure, as it didn’t have a database that could be hacked.</p><p>The site was hand-coded without using any frameworks, just HTML, CSS, JS and PHP. This allowed for total control over how the site functioned and taught me a great deal about developing a site with pure code.</p>",
                },
                {
                    contentImg: hugaImage4,
                    contentImgAltText: "Web development service deeper page",
                    contentSubtitle: "More than just a website",
                    contentText: "<p>The website was just a small part of the project. I was in charge of desiging the visual language of the brand as a whole. Other than the website I also designed:</p><ul><li>Branding guidelines</li><li>Print material</li><li>Landing pages</li><li>Display ads</li><li>Clothing</li><li>Materials for a tradeshow</li><li>Promotional videos</li><li>Iconography</li></ul>"
                },
            ],
            conclusionText: "<p>High performing, hand-coded website, and a Danish-inspired visual language.</p><p>Click the button below to see the live site (please bear in mind the site has been taken over by another company so it may have changed since I built it)</p>",
            conclusionLink: "https://hugadigitalmarketing.com/",
            conclusionLinkText: "Visit site"
        },
        {
            projectName: "Care agency",
            companyName: "FirstCol",
            thumbnail: fcThumbnail,
            teaserText: ["Job listings functionality", "Bespoke WordPress theme build", "Customer Training"],
            url: "/work/firstcol",
            whoAre: "A care agency based in West Sussex who provide healthcare and staffing solutions to the NHS and the private sector.",
            brief: [
                { briefPoint: "Online job adverts" },
                { briefPoint: "Website rebuild using new branding" },
                { briefPoint: "UX review" }
            ],
            deliverables: [
                { deliverablesPoint: "Job board functionality" },
                { deliverablesPoint: "Bespoke WordPress template" },
                { deliverablesPoint: "Training session with staff" }
            ],
            carouselTitle: "Jobs",
            carouselSubtitle: "A built-in jobs board that can be easily managed by FirstCol staff",
            carouselText: "<p>FirstCol needed their old website to be rebuilt in WordPress, with the addition of the ability to add and manage new jobs on offer.</p><p>I used an existing plugin as a base for the site’s functionality, and customised it to fit FirstCol’s needs.</p>",
            carouselBackground: "#f7d2e6",
            carouselImages: [
                {
                    carouselImage: fcTab1,
                    carouselAltText: "FirstCol Homepage"
                },
                {
                    carouselImage: fcTab2,
                    carouselAltText: "Register and video module"
                },
                {
                    carouselImage: fcTab3,
                    carouselAltText: "Why FirstCol page"
                },
                {
                    carouselImage: fcTab4,
                    carouselAltText: "Clients Page"
                }
            ],
            contentTitle: "Applications overhaul",
            contentModules: [
                {
                    contentImg: fcImage1,
                    contentImgAltText: "Job list page",
                    contentSubtitle: "New streamlined application process",
                    contentText: "<p>Previously FirstCol took applications through an online form and then called applicants to tell them about available jobs.</p><p>I was able to cut out this step by allowing users to view available jobs before applying.<p/>"
                },
                {
                    contentImg: fcImage2,
                    contentImgAltText: "Application form",
                    contentSubtitle: "UX Review",
                    contentText: "<p>I designed the application form to follow a logical layout, and added a progress bar and clear instructions alongside each section.</p>",
                },
                {
                    contentImg: fcImage3,
                    contentImgAltText: "Fast track form",
                    contentSubtitle: "Time is money",
                    contentText: "<p>FirstCol were experiencing a high rate of drop-offs with their previous form, as users were frustrated by the length of it.</p><p>To maximise leads, I added an alternative ‘fast-track’ form, which is a stripped back version of the main application form that takes 5 minutes to complete. This allows FirstCol to still make contact with the potential candidate who would otherwise have dropped off.</p>",
                },
                {
                    contentImg: fcImage4,
                    contentImgAltText: "Fast track application form",
                    contentSubtitle: "Bespoke WordPress theme",
                    contentText: "<p>FirstCol supplied a fresh branding guideline that I used when building their new site.</p><p>This posed many challenges which couldn’t be solved with an off-the-shelf theme, so I built a custom one.</p><p>All job modules on the site needed to appear in a specific way that wasn’t present in the plugin or any other theme. I used a combination of PHP, CSS and JS to achieve the required layout.</p>",
                },
                {
                    contentImg: fcImage5,
                    contentImgAltText: "Mobile view of the homepage",
                    contentSubtitle: "Responsive",
                    contentText: "<p>A substantial proportion of FirstCol’s traffic came through mobile devices, but their old site was not well optimised for smaller screens.</p><p>When desigining and building the website I tested the UX across many device types to ensure it functioned effectively.</p>"
                },
                {
                    contentImg: fcImage6,
                    contentImgAltText: "Services page",
                    contentSubtitle: "Workshops",
                    contentText: "<p>I worked closely with FirstCol from the beginning to ensure they would be able to use what I built for them.</p><p>Towards the end of the project I led a workshop at their offices to teach them how to use their new system.</p>"
                },
            ],
            conclusionText: "<p>A system that streamlined the client’s application process.</p><p>Click the button below to see the live site (please bear in mind the site has been taken over by another company so it may have changed since I built it)</p>",
            conclusionLink: "http://www.firstcol.com/",
            conclusionLinkText: "Visit site"
        },
    ];
};