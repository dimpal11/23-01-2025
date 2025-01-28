import React from "react";

function Text() {
  return (
    <div className="bg-[--bg-body] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="py-10 sm:py-12 md:py-16 lg:py-20 max-w-6xl mx-auto">
        <div>
          <p className="font-normal text-[16px] sm:text-[18px] leading-relaxed Montserrat">
            Please take the time to carefully read this privacy notice as it
            contains crucial information about who we are, how and why we
            collect and use your personal information, as well as your rights in
            connection with that information.
          </p>
          <h2 className="font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] uppercase py-5 Montserrat">
            Who is Target Analysis SA
          </h2>
          <p className="font-normal text-[16px] sm:text-[18px] leading-relaxed Montserrat">
            Target Analysis was founded in 2013 by a team of experienced
            scientists and engineers. The company activates in the distribution
            and service of scientific instruments for analytical techniques in
            Greece and Cyprus.
          </p>
          <p className="font-normal text-[16px] sm:text-[18px] leading-relaxed py-5 Montserrat">
            See here for more info:
            <span className="text-[--text-color] break-all">
              https://www.targetanalysis.gr/about-us/targetanalysis/
            </span>
          </p>
        </div>

        <div>
          <h2 className="font-extrabold text-[28px] sm:text-[32px] uppercase py-3 Montserrat">
            The private data we gather and use
          </h2>
          <p className="font-normal text-[16px] sm:text-[18px] leading-relaxed pt-4 pb-7 Montserrat">
            The following personal information about you that you may disclose
            to us during the course of our business operations may be collected
            and processed: your name, job title, employer, company email
            address, and contact information.
          </p>
        </div>

        <div>
          <h2 className="font-extrabold text-[28px] sm:text-[32px] uppercase py-3 Montserrat">
            How we use your personal information
          </h2>
          <ul className="list-disc pl-5 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed space-y-3">
            <li className="Montserrat text-[18px] font-normal text-justify">
              To keep you informed of our most recent news, events, and products
              or services.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              To respond to your questions, requests, comments, or
              recommendations.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              To give you the information, products, or services you request
              from us.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              To comply with legal requirements and, where needed, for the
              creation, exercise, or defense of legal claims.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-extrabold text-[28px] sm:text-[32px] uppercase py-3 Montserrat">
            Your rights
          </h2>
          <ul className="list-disc pl-5 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed space-y-3">
            <li className="Montserrat text-[18px] font-normal text-justify">
              Access specific information about your personal information and
              how we handle it.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              Correction of inaccuracies in your personal data.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              Personal data that has been processed improperly or erroneously
              will be restricted or deleted.
            </li>
            <li className="Montserrat text-[18px] font-normal text-justify">
              Allowing us to stop using your personal information for certain
              purposes, such as direct marketing.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-extrabold lg:text-[28px] sm:text-[32px] uppercase py-4 Montserrat">
            Consequences of not providing your personal information{" "}
          </h2>
          <p className="font-normal text-[16px] sm:text-[18px] leading-relaxed pt-4 pb-7 Montserrat">
            It might be essential for Target Analysis’s clients and potential
            clients to provide their personal information in order to enter into
            a contract with us. Not providing your personal information, Target
            Analysis might be unable to offer its services and goods to you or
            engage in a contract with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Text;
