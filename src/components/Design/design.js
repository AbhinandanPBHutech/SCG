import React, { useEffect, useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";

import {
  AimOutlined,
  ArrowDownOutlined,
  DesktopOutlined,
  DownOutlined,
  FileOutlined,
  LeftOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  PieChartOutlined,
  RightOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./design.module.css";
import {
  Avatar,
  Breadcrumb,
  Calendar,
  Col,
  Input,
  Layout,
  Menu,
  Row,
  theme,
} from "antd";
import Employee from "../Employee/employee";
import FooterComp from "../Footer/footer";
// import WeekCalender from "../Calender/calender";
const { Header, Content, Footer, Sider } = Layout;

const WeekCalender = ({ click }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    if (click == "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
    if (click == "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
  }, [click]);

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
    }
    if (btnType === "next") {
    }
  };

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    // showDetailsHandle(dayStr);
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  return (
    <div className="calendar">
      {renderDays()}
      {renderCells()}
    </div>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("SCG", "1"),
  getItem("Office Location", "sub1", <AimOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Menu", "sub2", <TeamOutlined />, [
    getItem("Submenu 1", "6"),
    getItem("Submenu 2", "8"),
  ]),
];

const users = [
  {
    empTile: " Employee 1",
    empDesg: " Designation 1, Full Time",
    src: "https://avatars.githubusercontent.com/u/10627086?v=4",
    time1: "Day-off",
    time2: "12:34",
    time3: "Absent",
    time4: "Absent",
    time5: "-",
    time6: "28:29:55",
  },
  {
    empTile: " Employee 2",
    empDesg: " Designation 2, Full Time",
    src: "https://avatars.githubusercontent.com/u/10627086?v=4",
    time1: "Day-off",
    time2: "12:34",
    time3: "12:34",
    time4: "12:34",
    time5: "-",
    time6: "56:18:45",
  },
  {},
  {},
  {},
  {},
  {},
  {},
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [click, setClick] = useState("next");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "red",
      }}
    >
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={styles.sider}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <div className={styles.mbl_header}>
          <MenuOutlined style={{ color: "black", fontSize: 20 }} />
          <span>SCG</span>
        </div>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className={styles.header}
        >
          <div className={styles.header_menu}>
            <MenuFoldOutlined
              onClick={() => setCollapsed(!collapsed)}
              style={{ cursor: "pointer" }}
            />
            <span>Sub Menu</span>
          </div>
          <div>
            <Input />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className={styles.user_detail}>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            <div>Jane</div>
            <DownOutlined />
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
            }}
            className={styles.line_wrapper}
          >
            <div className={styles.line_1}>
              <div className={styles.today}>Today</div>
              <div className={styles.arrows}>
                <LeftOutlined
                  onClick={() => {
                    setClick("prev");
                    setTimeout(() => {
                      setClick("def");
                    }, 500);
                  }}
                />
                <RightOutlined
                  onClick={() => {
                    setClick("next");
                    setTimeout(() => {
                      setClick("def");
                    }, 500);
                  }}
                />
              </div>
              <div>May 2023</div>
              <div>
                Selectfrom Dropdown <DownOutlined />
              </div>
              <div>
                Selectfrom Dropdown <DownOutlined />
              </div>
              <div>
                Week <DownOutlined />
              </div>
            </div>

            <Row gutter={[12, 12]} className={styles.line_2}>
              <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                <Row gutter={[12, 12]}>
                  <Col xl={8} lg={8} md={8} sm={0} xs={0}>
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder="Search..."
                    />
                  </Col>
                  <Col xl={16} lg={16} md={16} sm={16} xs={16}>
                    <WeekCalender click={click} />
                  </Col>
                </Row>
                <div className={styles.mbl_search}>
                  <Input placeholder="Search..." prefix={<SearchOutlined />} />
                </div>
                <div className={styles.line_3}>
                  {users?.map((item, index) => {
                    return (
                      <Row className={styles.card} key={index}>
                        <Col
                          xl={6}
                          lg={6}
                          md={6}
                          sm={18}
                          xs={18}
                          style={{ display: "flex" }}
                          className={styles.itm1}
                        >
                          {item?.src ? (
                            <Avatar src={item?.src} />
                          ) : (
                            <div style={{ opacity: 0 }}>none</div>
                          )}
                          <div className={styles.emp_detail}>
                            <span className={styles.emp_title}>
                              {item?.empTile}
                            </span>
                            <span className={styles.emp_desg}>
                              {item?.empDesg}
                            </span>
                          </div>
                        </Col>
                        <Col
                          style={{ color: "#B2071D" }}
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          className={styles.time6}
                          xs={3}
                        >
                          {item?.time1}
                        </Col>
                        <Col
                          style={{ color: "#0F3057" }}
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={styles.time2}
                        >
                          {item?.time2}
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          style={
                            item?.time3 == "Absent"
                              ? {
                                  backgroundColor: "rgba(178, 7, 29, 0.24)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }
                              : {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: " #279847",
                                }
                          }
                          className={styles.time3}
                        >
                          {item?.time3}
                        </Col>
                        <Col
                          style={
                            item?.time4 == "Absent"
                              ? {
                                  backgroundColor: "rgba(178, 7, 29, 0.24)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }
                              : {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: " #279847",
                                }
                          }
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={styles.time4}
                        >
                          {item?.time4}
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          style={{ textAlign: "center" }}
                          className={styles.time5}
                        >
                          {item?.time5}
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          style={{ color: "#0F9D58" }}
                        >
                          {item?.time6}
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Col>

              <Col xl={8} lg={8} md={8} sm={0} xs={0}>
                <Calendar fullscreen={false} headerRender={null} />
              </Col>
            </Row>
          </div>
        </Content>
        <div className={styles.footer}>
          <FooterComp />
        </div>
      </Layout>
    </Layout>
  );
};
export default App;
