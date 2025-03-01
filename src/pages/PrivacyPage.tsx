import { FC, JSX } from "react";
import Container from "components/_common/Container";

const PrivacyPage: FC = (): JSX.Element => {
  return (
    <Container className="bg-white text-[#595959] min-h-screen">
      <div className="text-black text-2xl font-bold text-center ">
        PRIVACY POLICY
      </div>
      <div className="text-sm text-[#595959] text-center mt-2">
        Last updated March 01, 2025
      </div>
      <div className="mt-10">
        <h2 className="text-lg text-black font-bold">SUMMARY OF KEY POINTS</h2>
        <p className="mt-4">
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-bold">
          What personal information do we process?
        </h3>
        <p>
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-bold">
          Do we process any sensitive personal information?
        </h3>
        <p>We do not process sensitive personal information.</p>
      </div>
      <div className="mt-6">
        <h3 className="text-base font-bold">
          How do we keep your information safe?
        </h3>
        <p>
          We have adequate organizational and technical processes and procedures
          in place to protect your personal information.
        </p>
      </div>
      <div className="mt-6">
        <p className="font-bold">Questions or concerns?</p>
        <p>
          If you have any questions or concerns, please contact us at
          <a
            href="mailto:include.add@gmail.com"
            className="text-[#3030F1] break-words"
          >
            {" "}
            include.add@gmail.com
          </a>
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPage;
