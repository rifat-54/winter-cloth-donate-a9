import React from "react";

const HelpToOthers = () => {
  return (
    <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-center mt-16">Everything You Need to Know About Supporting Our Mission</h2>
      <div className="space-y-3 mt-10">
      <div className="collapse  collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        What types of winter clothing can I donate?
        </div>
        <div className="collapse-content">
          <p>You can donate gently used or new winter items such as coats, jackets, scarves, gloves, hats, and sweaters. Please ensure all items are clean and in good condition.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How can I make a donation?
        </div>
        <div className="collapse-content">
          <p>You can donate by clicking the "Donate Now" button on our homepage. You’ll find instructions for dropping off items or scheduling a pickup, depending on your location.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Who benefits from the donations?
        </div>
        <div className="collapse-content">
          <p>The donations go directly to individuals and families in need, including those in shelters, low-income communities, and homeless individuals facing extreme weather conditions.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Can I volunteer to help?
        </div>
        <div className="collapse-content">
          <p>Absolutely! We welcome volunteers to assist with sorting, packing, and distributing donations. Visit our "Get Involved" page for more details and to sign up.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Is there a deadline for donating?
        </div>
        <div className="collapse-content">
          <p>We accept donations throughout the winter season. However, donating early ensures we can distribute items to those in need before the harshest weather arrives.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How can I track the impact of my donation?
        </div>
        <div className="collapse-content">
          <p>We provide regular updates and success stories on our website and social media. Subscribe to our newsletter to stay informed about how your contributions are making a difference</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HelpToOthers;
