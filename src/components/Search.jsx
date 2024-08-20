import React from "react";
import InputField from "./InputField";

const Search = ({ query, setQuery }) => {
  const search = [
    {
      id: "search",
      type: "text",
      placeholder: "Search for a Movie",
      label: "",
      value: query,
      onChange: (e) => setQuery(e.target.value),
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
