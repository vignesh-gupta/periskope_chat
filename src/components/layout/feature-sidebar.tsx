import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { AiFillHome } from "react-icons/ai";
import { BsChatDotsFill, BsFillDiagram2Fill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { FaChartLine, FaList } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
import { MdChecklist } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

const navItems: (
  | 0
  | { icon: IconType; isActive?: boolean; isNew?: boolean }
)[] = [
  { icon: AiFillHome },
  0,
  { icon: BsChatDotsFill, isActive: true },
  { icon: IoTicketSharp },
  { icon: FaChartLine },
  0,
  { icon: FaList },
  { icon: HiSpeakerphone },
  { icon: BsFillDiagram2Fill, isNew: true },
  0,
  { icon: RiContactsBookFill },
  { icon: RiFolderImageFill },
  0,
  { icon: MdChecklist },
  { icon: IoIosSettings },
];

const FeatureSidebar = () => {
  return (
    <nav className="absolute left-0 top-0 bottom-0 w-14 py-2 flex flex-col items-center bg-white border-r min-h-screen">
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={32}
        height={32}
        className="size-8"
      />

      <div className="pt-6 flex items-center flex-col gap-y-1">
        {navItems.map((item, index) => {
          if (item === 0) {
            return (
              <Separator key={`feature-sidebar-${index}`} className="my-2" />
            );
          }
          const Icon = item.icon;
          return (
            <Button
              key={`feature-sidebar-${index}`}
              variant="ghost"
              size="icon"
              className={cn(
                item.isActive &&
                  "bg-primary/10 text-primary hover:bg-primary/20"
              )}
            >
              <Icon
                className={cn(
                  "size-6",
                  item.isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default FeatureSidebar;
