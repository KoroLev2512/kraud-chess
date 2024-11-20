export type LayoutType = {
    children?: JSX.Element;
};

export interface CarouselSlide {
    name: string;
    image: string;
    rank: string;
}

export interface CarouselStage {
    id: number;
    text: string;
    image?: string;
    className: string;
}

export interface Stage {
    id: number;
    text: string;
    className?: string;
    image?: string;
}

export interface CarouselMobileStage {
    stages: Stage[];
}
