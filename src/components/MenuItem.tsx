import React from "react";

interface MenuItemProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  category: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  imageSrc,
  title,
  description,
  price,
  rating,
  category, 
}) => {
  return (
    <div>
      <div className="feature-item p-6 bg-gray-100 rounded-2xl shadow-md relative flex flex-col justify-end min-w-96 min-h-80 max-w-11">
        <img className="absolute -top-20 right-0" src={imageSrc} alt={title} />
        <h3 className="text-2xl font-bold text-[#39B54A]">{title}</h3>
        <p className="text-gray-600 mt-4 mx-11">{description}</p>
        <div className="flex justify-between items-center mx-8 ">
          <p className="text-[#39B54A] mt-7 ">{price}</p>
          <div className="flex items-center">
            <p className="text-gray-600">{rating}</p>
            <img
              src="/public/assets/star.png"
              alt="Rating star"
              className="ml-2"
            />
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">{category}</div>{" "}
      </div>
    </div>
  );
};

export default MenuItem;
