import { ICard } from "./card";

export const Card: React.FC<ICard> = ({ content, className }) => {
    return (
        <div id="base-card" className={className}>
            {content}
        </div>
    )
}