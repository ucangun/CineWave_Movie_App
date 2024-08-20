import React from "react";
import InputField from "./InputField";

const Search = () => {
  const search = [
    {
      id: "search",
      type: "text",
      placeholder: "Search for a Movie",
      label: "",
    },
  ];

  return (
    <div className="mx-auto">
      {search.map((field) => (
        <InputField key={field.id} field={field} />
      ))}
    </div>
  );
};

export default Search;
