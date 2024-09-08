import React from "react";

const Badge = ({
  text,
  type,
}: {
  text: string;
  type: "active" | "inactive";
}) => {
  return (
  <div
      className="px-2 py-1 rounded-lg text-white font-medium text-sm"
      style={{ backgroundColor: type === "active" ? "#76ab65" : "#EE4E4E" }}
    >
      <p className="capitalize">{text}</p>
    </div>
  );
};

export default Badge;
