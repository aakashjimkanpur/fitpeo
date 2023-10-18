import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import { TbSquareKey } from "react-icons/tb";
import { PiCubeFocusThin } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Left = () => {
  return (
    <div className="sidebar">
      <div className="left2">
        <RiSettingsLine
          onClick={(e) => {
            document
              .getElementsByClassName("sidebar")[0]
              .classList.toggle("sidebaronhide");
            document
              .getElementsByClassName("Setting")[0]
              .classList.toggle("Settinghide");
            document
              .getElementsByClassName("layout")[0]
              .classList.toggle("layouthide");
            document
              .getElementsByClassName("hello")[0]
              .classList.toggle("hellohide");
          }}
          size={25}
        />
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Dashboard</div>
      </div>
      <div className="left2 bgc">
        <div>
          <TbSquareKey size={20} />
        </div>
        <div>Dashboard</div>
      </div>
      <div>
        <div className="left3">
          <PiCubeFocusThin size={20} />
          <div>Product</div>
          <MdKeyboardArrowRight />
        </div>
        <div className="left3">
          <LuUserSquare2 size={20} />
          <div>Customers</div>
          <MdKeyboardArrowRight />
        </div>
        <div className="left3">
          <MdOutlineAccountBalanceWallet size={20} />
          <div>Income</div>
          <MdKeyboardArrowRight />
        </div>
        <div className="left3">
          <CiDiscount1 size={20} />
          <div>Promote</div>
          <MdKeyboardArrowRight />
        </div>
        <div className="left3">
          <RiQuestionnaireLine size={20} />
          <div>Help</div>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="leftuser bgc">
        <div>
          <img
            className="userimg"
            src="data:image/png;base64,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"
            alt="user"
          />
        </div>
        <div>
          <div>Evano</div>
          <div style={{ fontSize: "9px" }}>Project Manager</div>
        </div>
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Left;
