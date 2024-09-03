import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Investor } from "@/types";
import Modal from "@/components/Admin/Model";
import { delinvestor, updateinvestor, getinvestor } from "@/hooks/useInvestor";

const industries = [
  "Advertising",
  "Media & Marketing",
  "Health tech",
  "Education",
  "Web Infotech",
];

const location = ["banglore", "Chennai", "Cochin", "Goa"];

interface ModalState {
  show: boolean;
  title: string;
  content: string;
  isSuggestion?: boolean;
  isDocument?: boolean;
}

const NewInvestorsAllowence = () => {
  const router = useRouter();
  const { id } = router.query;
  const [investor, setInvestor] = useState<Investor | null>(null);
  const [modal, setModal] = useState<ModalState>({
    show: false,
    title: "",
    content: "",
  });

  useEffect(() => {
    const fn = async () => {
    if (id) {
      const selectedBusiness = await getinvestor(id)
      console.log(selectedBusiness)
      setInvestor(selectedBusiness);
    }
  }
  fn()
  }, []);

  const handleViewDocument = () => {
    setModal({
      show: true,
      title: "View Document",
      content:
        "This is a dummy document content. Replace it with your actual document or PDF viewer.",
      isDocument: true,
    });
  };

  const handleApprove = () => {
    updateinvestor(id)
    };
  
    const handleBanAccount = () => {
       delinvestor(id);
    };

  const handleSuggestChanges = () => {
    setModal({
      show: true,
      title: "Suggest Changes",
      content: "Add your suggestion",
      isSuggestion: true,
    });
  };

  const closeModal = () => {
    setModal({ show: false, title: "", content: "" });
  };

  if (!investor) {
    return <div>Loading...</div>;
  }

  return (
    <section className="sm:flex">
      <div className="bg-[#003034] border border-[#EAD514] rounded-xl py-4 sm:py-10 px-4 sm:px-10 m-4 col-span-2 sm:w-3/4">
        <div className="flex flex-col space-y-2 text-white">
          <p className="text-[#EAD514] text-[24px]">
            Investor at Media Production , Digital <br /> Marketing based on
            Kolkata, West Bengal
          </p>
          <h4 className="text-md font-semibold">
            Email:
            <span className="text-md text-gray-400 font-thin ml-2">
              Available only after Connect
            </span>
          </h4>
          <h4 className="text-md font-semibold">
            Phone No:
            <span className="text-md text-gray-400 font-thin ml-2">
              Available Only after connect
            </span>
          </h4>
          <h4 className="text-md font-semibold">Professional Bio:</h4>
          <p className="text-md text-gray-400 font-thin">
            With [number] years of experience navigating the dynamic landscape
            of media and advertising, I boast a{" "}
            <br className="sm:block hidden" /> proven track record of
            identifying disruptive trends, nurturing innovative ventures, and
            driving exceptional <br className="sm:block hidden" /> returns for
            investors. My passion for storytelling and keen understanding of
            consumer behavior have fueled
            <br className="sm:block hidden" />
            successful investments in a diverse portfolio of top companies
            across the media spectrum.
          </p>
          <h4 className="text-md font-semibold">Industry Interests:</h4>
          <div className="grid grid-cols-2 gap-2 sm:flex space-x-2">
            {industries.map((industry) => (
              <p
                key={industry}
                className="bg-[#C3EC6C] text-black px-4 py-2 rounded-full text-center"
              >
                {industry}
              </p>
            ))}
          </div>
          <h4 className="text-md font-semibold">Location Interests:</h4>
          <div className="grid grid-cols-2 gap-2 sm:flex space-x-2">
            {location.map((place, index) => (
              <p  key= {index} className="bg-[#C3EC6C] text-black px-4 py-2 rounded-full text-center">
                {place}
              </p>
            ))}
          </div>
          <h4 className="text-md font-semibold">Investment Range:</h4>
          <p className="text-md text-[24px] ml-2">10L to 5 Cr</p>
          <h4 className="text-md font-semibold">Recent Activity</h4>
          <div className="flex  flex-col space-y-4">
            <div className="flex justify-start items-center">
              <div className="w-10 h-10 bg-[#C3EC6C] rounded-full mr-4" />
              <p>Connected with Two Businesses</p>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-10 h-10 bg-[#C3EC6C] rounded-full mr-4" />
              <div>
                <p>Received 10 Proposals</p>
                <p className="sm:block hidden text-md text-gray-400 font-thin">
                  From Two startup - in Healthtech and Edtech
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-10 h-10 bg-[#C3EC6C] rounded-full mr-4" />
              <div>
                <p>Earlier than 7 days </p>
                <p className="sm:block hidden text-md text-gray-400 font-thin">
                  Received 8 proposals from - Edtech, health tech, manufacture,
                  Hotel Chain, Medical
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-10 h-10 bg-[#C3EC6C] rounded-full mr-4" />
              <div>
                <p>Earlier than 14 days </p>
                <p className="sm:block hidden text-md text-gray-400 font-thin">
                  Received 3 proposals from - Edtech, health tech, manufacture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#003034] text-center rounded-xl text-white p-4 m-4 sm:w-1/4 self-start">
        <div className="mb-2">
          <button
            onClick={handleViewDocument}
            className="bg-[#001F22] text-[#C3EC6C] w-full text-[14px] rounded-full py-3 px-8"
          >
            View Document
          </button>
        </div>
        <div className="mb-2">
          <button
            onClick={handleApprove}
            className="bg-[#C3EC6C] text-[#103B3E] w-full text-[14px] rounded-full py-3 px-8"
          >
            Approve
          </button>
        </div>
        <div className="mb-2">
          <button
            onClick={handleBanAccount}
            className="bg-[#FFDCE5] text-[#EC183E] w-full text-[14px] rounded-full py-3 px-8"
          >
            Ban Account
          </button>
        </div>
        <div className="">
          <button
            onClick={handleSuggestChanges}
            className="text-[#EAD514] w-full text-[14px] rounded-full py-3 px-8"
          >
            Suggest Changes
          </button>
        </div>
      </div>

      <Modal
        show={modal.show}
        title={modal.title}
        content={modal.content}
        onClose={closeModal}
        isSuggestion={modal.isSuggestion}
        isDocument={modal.isDocument}
      />
    </section>
  );
};

export default NewInvestorsAllowence;
