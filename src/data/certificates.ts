export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    image: string;
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "AWS S3 Basics",
        issuer: "Coursera",
        date: "2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/93DHFJYT2I99?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        image: "/images/certificates/aws-s3-basics.png"
    },
    {
        id: 2,
        title: "Azure create a REST API using NodeJS Serverless Functions",
        issuer: "Coursera",
        date: "2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8E903NYJ6JVF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        image: "/images/certificates/azure-api-cert.png"
    },
    {
        id: 3,
        title: "Build a free website with WordPress",
        issuer: "Coursera",
        date: "2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/Z1K05382VWOP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        image: "/images/certificates/wordpress-cert.png"
    }
];
