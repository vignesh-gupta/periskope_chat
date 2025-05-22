import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const TopBar = () => {
  return <header>
    <div className="text-muted-foreground">
      <BsChatDotsFill className="size-4" /> chat
    </div>
  </header>;
};

export default TopBar;
