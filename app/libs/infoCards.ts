import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Enhanced Digital Transformation",
        bodyText: "VisionAI's advanced AI algorithms drive digital transformation, optimizing operations and enhancing customer interactions for smarter, faster business decisions.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Intelligent Automation",
        bodyText: "With VisionAI, automate complex processes and workflows, empowering your team to focus on strategic tasks and innovation, while AI handles the routine with precision.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Customer Experience Revolution",
        bodyText: "Leverage VisionAI's machine learning and data analytics to understand and predict customer needs, delivering personalized experiences that reduce churn and foster loyalty.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards