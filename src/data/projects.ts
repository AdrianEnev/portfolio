export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    link?: string;
    color: string;
    status: 'featured' | 'coming-soon';
    year: string;
    isClientWork?: boolean;
    isWIP?: boolean;
}

export const projects: Project[] = [
    {
        id: "kent-academy",
        title: "Kent Academy",
        subtitle: "Production Platform for Football Club",
        description: "A complete production platform built for a football academy helping them manage players, news, and analytics. Features a custom admin panel, role-based auth, and advanced tracking.",
        tech: ["React", "TypeScript", "Fly.io", "Netlify"],
        link: "https://fckentacademy.com",
        color: "rose",
        status: "featured",
        year: "2025"
    },
    {
        id: "heavenly-hair-oil",
        title: "Heavenly Hair Oil",
        subtitle: "E-commerce Experience",
        description: "A premium e-commerce experience for a natural hair care brand, focusing on elegant product presentation and seamless user journey.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
        link: "https://heavenly-hair-oil.netlify.app/",
        color: "emerald",
        status: "featured",
        year: "2025",
        isWIP: true,
        isClientWork: true
    },
    {
        id: "bianchi-coffee",
        title: "Bianchi Coffee UK",
        subtitle: "Direct-to-Consumer Store",
        description: "A sophisticated online store for a premium coffee roaster, designed to showcase high-quality blends and streamline the ordering process.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
        link: "https://enev-coffee.netlify.app/",
        color: "cyan",
        status: "featured",
        year: "2026",
        isWIP: true,
        isClientWork: true
    }
];
