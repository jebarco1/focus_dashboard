import { P } from "../../AbstractElements";
import { Elementswebdesign, Usewebdesign, Webdesignersdo } from "../../utils/Constant";
import { ReactNode } from "react";
export const flushData = [
    {
        id: 'flush1',
        head: 'What is bootstrap?',
        text: <P> {'-->'} Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.<br />{'-->'} It is absolutely free to download and use.</P>

    },
    {
        id: 'flush2',
        head: 'Why Should You Use Bootstrap?',
        text:<P>First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started.<br />One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them.<br />You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. <br />To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects.</P>
    },
    {
        id: 'flush3',
        head: 'Bootstrap Image System',
        text: <P>Bootstrap handles the image display and responsiveness with its predefined HTML and CSSrules.<br />Adding the .img-responsive class will automatically resize images based on theusers' screen size. This will benefit your website’s performance, as reducing image sizes ispart of the site optimization process.<br />Bootstrap also provides additional classes likeimg-circle and .img-rounded, which help to modify the images' shape.</P>

    }
]

interface IconDemoDataType {
    id: string;
    icon: 'Bell' | "MessageCircle" | "CheckSquare" ;
    head: string;
    text: ReactNode;
}
export const iconDemoData:IconDemoDataType[] = [
    {
        id: 'icon1',
        icon: 'Bell',
        head: ' Keep in touch',
        text: <P><em className="txt-danger">  This page might not behave as expected because Windows Internet Explorer isn't configured to load unsigned ActiveX controls.</em> or Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer. (Both phrased as conditions that may cause future problems.) </P> 
    },
    {
        id: 'icon2',
        icon: 'MessageCircle',
        head: ' Chats with others',
        text:
            <P>You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails.<br /><strong> {'Chat:'}</strong>Use when you prefer a dedicated chat experience and don't mind switching between different apps.</P>

    },
    {
        id: 'icon3',
        icon: 'CheckSquare',
        head: ' Right way to code ',
        text:
            <P>1) Decide on the indentation and keep it that way.<br />2) Make comments.<br />3) Consistent name scheme.<br />4) Don't repeat code.<br />5) Avoid writing long code lines.<br />6) Break down a big task into smaller chunks.<br />7) Organize your program into smaller files.<br />8) Write clever code that is also readable.</P>
    }
]


export const outlineData = [
    {
        id: 'outline1',
        head: Webdesignersdo,
        text: <P> Web design<em className='txt-danger'> identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements</P>
    },
    {
        id: 'outline2',
        head: Usewebdesign,
        text: <P> <strong> Search engine optimization: </strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it. <br /> <br /><strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease. <br />  <br /> <strong> Improved sales:</strong>Increasing the number of items sold or  acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.</P>
    },
    {
        id: 'outline3',
        head: Elementswebdesign,
        text: <P> The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including: <br /> --&gt; Layout <br />--&gt; Images <br />--&gt; Visual hierarchy <br />--&gt; Color scheme<br /> --&gt; Typography <br /> --&gt; Navigation <br /> --&gt; Readability <br /> --&gt; Content </P>
    }
]