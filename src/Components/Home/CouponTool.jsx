import React from "react";

const CouponTool = () => {
  return (
    <div>
      <h1 className="md:text-4xl text-3xl font-bold">What you can do with Coupontools</h1>
      <div className="flex md:flex-row flex-col-reverse items-center gpa-8 md:py-20 py-10">
        {/* coupon tools point */}
        <div className="md:w-7/12">
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-4xl font-bold">
              Digital coupon marketing
            </div>
            <div className="collapse-content">
              <p className="text-base text-gray-400">
                Coupontools is a web and mobile solution that simplifies coupon
                creation and distribution. No app download needed! Customize
                coupons to match your brand, and let customers save them
                directly to their mobile wallets.<br></br> 
                <br></br>
                Use our intuitive builder to
                create landing pages, collect data, and gain insights into your
                audience. Boost sales with SMS reminders to ensure customers use
                their coupons.
                <br></br>
                <br></br>
                 Experience the ease and effectiveness of
                Coupontools to grow your business!
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-bold">
              Streamline your promotions
            </div>
            <div className="collapse-content text-gray-400">
              <p>
                Coupontools makes it easy to run your promotions. Our software
                helps you create and share digital coupons quickly, reaching
                your customers on any channel.
                <br></br>
                <br></br>
                 With a simple design process and
                real-time tracking, you can easily manage your campaigns and see
                what works best. Say goodbye to complicated marketing and let us
                help you promote your business with ease.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-bold">
              Make gamification marketing fun
            </div>
            <div className="collapse-content text-gray-400">
              <p>
                We turn marketing into a fun experience with gamification. By
                adding game-like features to your promotions, you can grab your
                customers' attention, keep them engaged, and encourage them to
                take action.
                <br></br>
                <br></br>
                 Our tools let you create interactive campaigns like
                spin-the-wheel, scratch-and-win, and more. These games not only
                entertain your customers but also make them more likely to
                choose your brand. 
                <br></br>
                <br></br>
                Try gamification marketing with Coupontools
                and see how easy it is to make your marketing exciting and
                effective.
              </p>
            </div>
          </div>
        </div>

        {/* img */}
          <img
            src="https://media.istockphoto.com/id/495393288/vector/online-shopping-concept.jpg?s=612x612&w=0&k=20&c=2kIoSdw4GWuVfaQj37PCRkpgVqmGWsoSbaA6wllNF-U="
            alt="" className="md:w-5/12 md:ml-16 md:mx-0 mx-3"
          />
      </div>
    </div>
  );
};

export default CouponTool;
