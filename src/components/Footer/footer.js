import React from "react";
import "./footer.css";
import {
  CalendarFilled,
  HomeFilled,
  HomeOutlined,
  NotificationFilled,
  UserAddOutlined,
  UserOutlined,
  WarningFilled,
} from "@ant-design/icons";
function FooterComp() {
  return (
    <div className="wrapper">
      <div className="item">
        <div className="item_inside">
          <HomeFilled style={{ color: "#008891" }} />
          <div>Menu 1</div>
        </div>
      </div>
      <div className="item">
        <div className="item_inside">
          <CalendarFilled style={{ color: "white" }} />
          <div>Menu 1</div>
        </div>
      </div>
      <div className="item">
        <div className="item_inside">
          <WarningFilled style={{ color: "white" }} />
          <div>Menu 1</div>
        </div>
      </div>
      <div className="item">
        <div className="item_inside">
          <NotificationFilled style={{ color: "white" }} />
          <div>Menu 1</div>
        </div>
      </div>
      <div className="item">
        <div className="item_inside">
          <UserOutlined style={{ color: "white" }} />
          <div>Menu 1</div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
