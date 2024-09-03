import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";

interface Ideation {
  id: string;
  name: string;
  profileImage: string;
  reason: string;
  reportedFor: string;
  userType: string;
  location: string;
  investmentRequired: number;
  establishmentYear: number;
  industry: string;
  type: string;
  productAndServices: string;
  shortBio: string;
  facilityInfo: string;
  salesInfo: { label: string; value: number }[];
  assetsInfo: string;
  investorType: string;
  amountRaised: number; // Add this property
}

const ideationsData: Ideation[] = [
  {
    id: "1",
    name: "ideation One",
    profileImage: "/avatar.svg",
    reason: "Violation of terms",
    reportedFor: "Inappropriate behavior",
    userType: "ideation",
    location: "Location One",
    investmentRequired: 10000000,
    establishmentYear: 2015,
    industry: "Tech",
    type: "Startup",
    productAndServices: "Software development and IT services",
    shortBio: "A leading tech startup...",
    facilityInfo: "Office space, equipment, etc.",
    salesInfo: [
      { label: "Current Monthly Sales", value: 31179272 },
      { label: "Current Monthly Sales", value: 31179272 },
      { label: "Current Monthly Sales", value: 31179272 },
      // Add more sales info if needed
    ],
    assetsInfo: "Office space, equipment, etc.",
    investorType: "Multiple",
    amountRaised: 3000000, // Add this property
  },
  // Add more ideation entries as needed
];

const UserProfileIdeation = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ideation, setIdeation] = useState<Ideation | null>(null);

  useEffect(() => {
    if (id) {
      const selectedIdeation = ideationsData.find(
        (b: { id: string | string[] }) => b.id === id
      );
      setIdeation(selectedIdeation || null);
    }
  }, [id]);

  if (!ideation) {
    return <div>Loading...</div>;
  }

  const progressValue =
    (ideation.amountRaised / ideation.investmentRequired) * 100;

  return (
    <section className="sm:flex ">
      <div className="bg-[#003034] border border-white rounded-xl py-4 sm:py-10 px-4 sm:px-10 m-4">
        <div className="flex flex-col space-y-2 text-white">
          <p className="text-white font-bold text-[24px]">
            {ideation.name} in {ideation.location}{" "}
            <br className="sm:block hidden" /> looking for Investment at{" "}
            {ideation.location}
          </p>
          <div className="border border-gray-400 rounded-xl py-4 px-4 space-y-2">
            <div className="flex justify-between">
              <h1 className="text-md">Investment Range</h1>
              <p className="text-white">
                Required amount :{" "}
                <span className="text-[#EAD514]">
                  ₹{ideation.investmentRequired}
                </span>
              </p>
            </div>
            <div>
              <Progress
                className="border-none bg-[#A4E320]"
                value={progressValue}
                size="lg"
                color="green"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <p className="text-[#A4E320]">
              ₹{ideation.amountRaised} ( {progressValue.toFixed(2)}% )
              <span className="text-white"> raised</span>
            </p>
          </div>
          <h4 className="text-md font-semibold">
            Established Year:
            <span className="text-md text-gray-400 font-thin ml-2">
              {ideation.establishmentYear}
            </span>
          </h4>
          <h4 className="text-md font-semibold">
            Industry :
            <span className="text-md text-gray-400 font-thin ml-2">
              {ideation.industry}
            </span>
          </h4>
          <h4 className="text-md font-semibold">
            District:
            <span className="text-md text-gray-400 font-thin ml-2">
              {ideation.location}
            </span>
          </h4>
          <h4 className="text-md font-semibold">
            Type of ideation :
            <span className="text-md text-gray-400 font-thin ml-2">
              {ideation.type}
            </span>
          </h4>
          <h4 className="text-md font-semibold">Product and Services:</h4>
          <p className="text-md text-gray-400 font-thin">
            {ideation.productAndServices}
          </p>
          <h4 className="text-md font-semibold">ideation Short Bio :</h4>
          <p className="text-md text-gray-400 font-thin">{ideation.shortBio}</p>
          <h4 className="text-md font-semibold">Facility Info :</h4>
          <p className="text-md text-gray-400 font-thin">
            {ideation.facilityInfo}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {ideation.salesInfo.map((sale, index) => (
              <div
                key={index}
                className="text-white text-md border border-[#A4E320] py-5 px-5 rounded-xl space-y-4"
              >
                <h1>{sale.label} :</h1>
                <p className="text-[#A4E320]">
                  ₹ {sale.value.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
          <h4 className="text-md font-semibold">Assets Info:</h4>
          <p className="text-md text-gray-400 font-thin">
            {ideation.assetsInfo}
          </p>
          <div className="flex items-center space-x-2">
            <h4 className="text-md font-semibold">Type of Investor:</h4>
            <p className="p-2 rounded-full bg-[#001719] justify-start">
              {ideation.investorType}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileIdeation;
