import React from "react";
import imgfirst from '../assets/Screenshot_78.png'

const HomeMiddle = () => {
  return (
    <div className="mt-20 mb-8">
      <h2 className="text-3xl font-bold text-center">
        Significance of Winter clothing donation in Islam
      </h2>
      <p className="text-gray-500 mt-10 w-11/12 lg:w-10/12 mx-auto">
        Charity and Helping Others—Islam is heavily focused on charity and
        helping others. We all know clothing is a basic need of life, but there
        are so many people globally who don’t have the necessary clothing. This
        is why, in line with its teachings, donating clothes to account for this
        need.
      </p>
      <p className="text-gray-500 mt-10 w-11/12 lg:w-10/12 mx-auto">
        Prophet Muhammad (PBUH) said: “If anyone gives clothes to a person who
        has nothing to wear, Allah will clothe them with green garments of
        Paradise.” (Tirmidhi)
      </p>
      <p className="text-gray-500 mb-10 mt-10 w-11/12 lg:w-10/12 mx-auto">
        This Hadees shows that acts of charity, such as clothing the needy,
        carry immense spiritual rewards.
      </p>
      <div>
        <img className="w-11/12 mx-auto" src={imgfirst} alt="" />
      </div>
      <h2 className="text-3xl font-bold text-center mt-32">Give People Physical and Emotional  Warmth By donate <br /> clothes to homeless</h2>
      <p className='text-gray-500 text-center mt-6 w-11/12 lg:w-10/12 mx-auto'>Share warmth, and donate gently used winter clothing. Help those in need stay cozy during the cold months. Make a difference by joining the best charity to donate clothes.</p>
    </div>
  );
};

export default HomeMiddle;
