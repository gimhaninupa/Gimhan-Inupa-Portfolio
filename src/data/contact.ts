import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export const contactData = {
    email: "gimhaninupa94@gmail.com",
    location: {
        city: "Balangoda",
        country: "Sri Lanka",
        display: "Balangoda, Sri Lanka",
        // Using a search query embed which works without the complex PB string
        mapUrl: "https://maps.google.com/maps?q=Balangoda,%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    socials: [
        {
            name: "Github",
            href: "https://github.com/gimhaninupa",
            icon: Github
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/gimhan-inupa-samaraweera-199233375/",
            icon: Linkedin
        },
        {
            name: "Facebook",
            href: "https://web.facebook.com/gimhan.inupa",
            icon: Facebook
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/gimhan_inupa",
            icon: Instagram
        }
    ]
};
