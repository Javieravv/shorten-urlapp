import { FC } from "react";
import './scss/detailscomponent.scss';

interface Props {
    image: string;
    title: string;
    description: string;
    classname: string;
}

const itemsDetails: Props[] = [
    {
        image: "/images/icon-brand-recognition.svg",
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
        classname: 'brand-class'
    },
    {
        image: "/images/icon-detailed-records.svg",
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        classname: 'detailed-class'
    },
    {
        image: "/images/icon-fully-customizable.svg",
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        classname: 'fully-class'
    }
]

const ItemDetail: FC<Props> = ({ image, title, description, classname = '' }) => {
    return (
        <article className={`item-detail ${classname}`}>
            <div className="div-image">
                <img
                    src={image}
                    alt={image}
                />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}


export const DetailsComponent = () => {
    console.log(itemsDetails);
    return (
        <section className="detail-container">
            {
                itemsDetails.map((item) => (
                    <ItemDetail
                        key={ item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        classname={item.classname}
                     />
                ))
            }
            <div className="line-cyan"></div>
        </section>
    )
}
