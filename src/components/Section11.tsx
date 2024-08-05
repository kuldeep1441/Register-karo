import React from 'react';

// Define an interface for the Section props
interface SectionProps {
    title: string;
    prefix: string;
    items: string[];
  }

function Section11() {
  return (
    <div className="bg-[#2B2F33] text-[#ACACAC] p-8 font-assistant">
      <div className="max-w-7xl mx-auto">
        <Section title="Virtual Office in Major Cities" prefix="Virtual Office in" items={[
          "Delhi", "Gurgaon", "Bangalore", "Mumbai", "Pune", "Kolkata", "Chennai", "Noida", "Kochi", "Jaipur", "Hyderabad", "Chandigarh", "Lucknow", "Mohali"
        ]}/>
        <Section title="Virtual Office for GST in Major Cities" prefix="Virtual Office for GST in" items={[
          "Delhi", "Gurgaon", "Bangalore", "Mumbai", "Pune", "Kolkata", "Chennai", "Noida", "Kochi", "Jaipur", "Hyderabad", "Lucknow", "Chandigarh", "Mohali"
        ]}/>
        <Section title="Virtual Office for Business in Major Cities" prefix="Virtual Office for Business in" items={[
          "Delhi", "Gurgaon", "Bangalore", "Mumbai", "Pune", "Kolkata", "Chennai", "Noida", "Kochi", "Jaipur", "Hyderabad", "Lucknow", "Chandigarh", "Mohali"
        ]}/>
        <Section title="Virtual Office with Mailing Address in Major Cities" prefix="Virtual Office with Mailing Address in" items={[
          "Delhi", "Gurgaon", "Bangalore", "Mumbai", "Pune", "Kolkata", "Chennai", "Noida", "Kochi", "Jaipur", "Hyderabad", "Lucknow", "Chandigarh", "Mohali"
        ]}/>
        <hr className="border-gray-700 my-4" />
        <div className="flex justify-between text-xs mt-4 px-4" style={{ fontSize: '13px', fontWeight: 400, lineHeight: '20.93px', textAlign: 'left' }}>
          <p>Copyright © 2019, Team Cowork. All Rights Reserved</p>
          <p>Powered by MXN Realspaces Pvt Ltd</p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, prefix, items } : SectionProps) {
  return (
    <div className="mb-6 pl-4">
      <h3 className="font-bold text-base text-white">{title}</h3>
      <p className="text-xs mt-2" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20.93px', textAlign: 'left' }}>
        {items.map((city, index) => (
          <React.Fragment key={city}>
            {index > 0 && " | "}
            <span>{prefix} {city}</span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default Section11;
