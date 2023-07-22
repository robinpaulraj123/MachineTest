import React, { useRef } from "react";
import { Button } from "flowbite-react";

export default function Test2 () {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    inputRef.current.blur();
  };

  return (
    <div className="mx-96 my-56">
      <div>
        <input ref={inputRef} type="text" value="" onChange={() => {}} />{" "}
        <div className="flex space-x-3 mt-5">
          <Button onClick={handleFocus}>Focus</Button>
          <Button onClick={handleBlur}>Blur</Button>
        </div>
      </div>
    </div>
  );
};


