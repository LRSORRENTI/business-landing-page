interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 59,
        title: "VisionAI Growth",
        benefits: [
            "Automated process optimization",
            "Real-time analytics dashboards",
            "Custom AI-driven insights",
            "Enhanced customer interaction tools",
            "Intelligent automation of routine tasks"
        ],
        id: 1,
        oneliner: "Empower your business with automated intelligence for sustainable growth"
    },
    
    {
        price: 129,
        title: "VisionAI Transformation",
        benefits: [
            "Everything in Growth Tier, plus:",
            "Enterprise-scale digital transformation",
            "Bespoke intelligent automation solutions",
            "Predictive market trend analysis",
            "Dedicated support and strategy consulting",
        ],
        id: 2,
        oneliner: "Transformative AI solutions for leading-edge business innovation and scalability"
    }
    
]

export default pricingCards