import { AlarmClock, AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon  } from "lucide-react";

interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

const InfoCards: IInfoCard[] = [
    {
        title: "Increased Sales",
        bodyText: "Insightful's predictive analysis identify high-valye prospects for targeted pitches, boosting conversion rates and sales up to 20%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "No Time Wasted",
        bodyText: "Insightful automates personalized content creation, freeing up time for revenue-focused activities and increased productivity.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Decreased Churn",
        bodyText: "Insightful's AI load engangement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities",
        icon: ArrowUpNarrowWide,
        id: 3
    },
];

export default InfoCards;