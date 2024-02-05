interface IPricingCard {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}
const pricingCards: IPricingCard[] = [
    {
        price: 49,
        title: "Insightful Pro",
        benefits: [
            "Predictive load scoring",
            "Automated content creation",
            "Personalized messaging at scale",
            "Customer retention tools"
        ],
        id: 1,
        oneliner: "AI-powered sales tools for focused revenue growth"
    },
    {
        price: 99,
        title: "Insightful Enterprise",
        benefits: [
            "Everything In Pro Tier, and:",
            "Data-Driven recommendations",
            "Customizable sales workflows",
            "Real-time alerts and notifications"
        ],
        id: 2,
        oneliner: "Comprehensive sales optimization for accelerated revenue goals"
    },
];

export default pricingCards;