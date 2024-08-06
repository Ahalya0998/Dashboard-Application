import React from "react";
import styled from "styled-components";
import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from "react-icons/tb";
import {
  PiCurrencyCircleDollarDuotone,
  PiCrosshairDuotone,
} from "react-icons/pi";
import { BiSolidDish, BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { Progress } from "antd";
import { Select, MenuItem, FormControl } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { FaHamburger } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { FaUserCircle, FaStar } from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Activity",
        data: Array.from({ length: 24 }, () =>
          Math.floor(Math.random() * 15000)
        ),
        backgroundColor: "#4a90e2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  const percentage = 70; // Order completion percentage

  const [period, setPeriod] = React.useState("Weekly");

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <MainContent>
      <DashboardContainer>
        <h3>Dashboard</h3>
        <CardWrapper>
          <CardGrid>
            <Card>
              <Icon color="#1948e3">
                <TbShoppingBagPlus />
              </Icon>
              <CardTitle>Total Orders</CardTitle>
              <CardValue>75</CardValue>
              <Percentage color="#1aeb4e">
                <BiSolidUpArrow /> 3%
              </Percentage>
            </Card>
            <Card>
              <Icon color="#1aeb4e">
                <TbShoppingBagCheck />
              </Icon>
              <CardTitle>Total Delivered</CardTitle>
              <CardValue>70</CardValue>
              <Percentage color="#fc262d">
                <BiSolidDownArrow /> 3%
              </Percentage>
            </Card>
            <Card>
              <Icon color="#fc262d">
                <TbShoppingBagX />
              </Icon>
              <CardTitle>Total Cancelled</CardTitle>
              <CardValue>05</CardValue>
              <Percentage color="#1aeb4e">
                <BiSolidUpArrow /> 3%
              </Percentage>
            </Card>
            <Card>
              <Icon color="#e61763">
                <PiCurrencyCircleDollarDuotone />
              </Icon>
              <CardTitle>Total Revenue</CardTitle>
              <CardValue>$12k</CardValue>
              <Percentage color="#fc262d">
                <BiSolidDownArrow /> 3%
              </Percentage>
            </Card>
          </CardGrid>
          <NetProfitCard large>
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <CardTitle>Net Profit</CardTitle>
                {/* <br /> */}
                <CardValue>$6759.25</CardValue>
                <Percentage1 color="#1aeb4e">
                  <BiSolidUpArrow /> 3%
                </Percentage1>
              </div>
              <ProgressContainer>
                <Progress
                  type="circle"
                  percent={percentage}
                  width={70}
                  strokeWidth={12}
                  strokeColor="#327aad"
                  trailColor="#d6d6d6"
                  format={(percent) => (
                    <ProgressText>
                      <strong>{`${percent}%`}</strong>
                      <div>Goal</div>
                      <div>Completed</div>
                    </ProgressText>
                  )}
                />
                <RoundedText>Values have been rounded off</RoundedText>
              </ProgressContainer>
            </CardContent>
          </NetProfitCard>
        </CardWrapper>

        {/* <MainContent> */}
        <CardGrid1>
          <Section className="activity">
            <Container>
              <h3>Activity</h3>
              <CustomFormControl size="small">
                <Select
                  value={period}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <CustomMenuItem value="Weekly">Weekly</CustomMenuItem>
                  <CustomMenuItem value="Monthly">Monthly</CustomMenuItem>
                  <CustomMenuItem value="Yearly">Yearly</CustomMenuItem>
                </Select>
              </CustomFormControl>
            </Container>
            <div style={{ height: "150px" }}>
              <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </Section>

          <Section className="icons">
            <IconsContainer>
              <IconItem color="#d43628">
                <div className="icon">
                  <PiCrosshairDuotone />
                </div>
                <div className="label">Goals</div>
                <div className="arrow">
                  <IoIosArrowDroprightCircle />
                </div>
              </IconItem>
              <IconItem color="#327aad">
                <div className="icon">
                  <FaHamburger />
                </div>
                <div className="label">Popular Dishes</div>
                <div className="arrow">
                  <IoIosArrowDroprightCircle />
                </div>
              </IconItem>
              <IconItem color="#25b061">
                <div className="icon">
                  <BiSolidDish />{" "}
                </div>
                <div className="label">Menus</div>
                <div className="arrow">
                  <IoIosArrowDroprightCircle />
                </div>
              </IconItem>
            </IconsContainer>
          </Section>
        </CardGrid1>
        {/* </MainContent> */}

        <CardGrid2>
          <Section2>
            <h3>Recent Orders</h3>
            <Table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaUserCircle /> Wade Warren
                  </td>
                  <td>15478256</td>
                  <td>$124.00</td>
                  <td>
                    <StatusLabel status="Delivered">Delivered</StatusLabel>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaUserCircle /> Jane Cooper
                  </td>
                  <td>48965786</td>
                  <td>$365.02</td>
                  <td>
                    <StatusLabel status="Delivered">Delivered</StatusLabel>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaUserCircle /> Guy Hawkins
                  </td>
                  <td>78958215</td>
                  <td>$45.88</td>
                  <td>
                    <StatusLabel status="Cancelled">Cancelled</StatusLabel>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaUserCircle /> Kristin Watson
                  </td>
                  <td>20965732</td>
                  <td>$65.00</td>
                  <td>
                    <StatusLabel status="Pending">Pending</StatusLabel>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaUserCircle /> Cody Fisher
                  </td>
                  <td>95715620</td>
                  <td>$545.00</td>
                  <td>
                    <StatusLabel status="Delivered">Delivered</StatusLabel>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaUserCircle /> Savannah Nguyen
                  </td>
                  <td>78514568</td>
                  <td>$128.20</td>
                  <td>
                    <StatusLabel status="Delivered">Delivered</StatusLabel>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Section2>
          <Section3>
            <h3>Customer's Feedback</h3>
            <FeedbackContainer>
              <FeedbackItem>
                <FeedbackHeader>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ProfilePic /> {/* Empty profile picture */}
                    <Name>Jenny Wilson</Name>
                  </div>
                  <Stars>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStar style={{ color: "white" }} />
                  </Stars>
                </FeedbackHeader>
                <div>
                  The food was excellent and so was the service. I had the
                  mushroom risotto with scallops which was awesome...
                </div>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackHeader>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ProfilePic /> {/* Empty profile picture */}
                    <Name>Dianne Russell</Name>
                  </div>
                  <Stars>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </Stars>
                </FeedbackHeader>
                <div>
                  We enjoyed the Eggs Benedict served on homemade focaccia bread
                  and hot coffee. Perfect service...
                </div>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackHeader>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ProfilePic /> {/* Empty profile picture */}
                    <Name>Devon Lane</Name>
                  </div>
                  <Stars>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStar style={{ color: "white" }} />
                  </Stars>
                </FeedbackHeader>
                <div>
                  Normally wings are wings, but theirs are lean meaty and
                  tender...
                </div>
              </FeedbackItem>
            </FeedbackContainer>
          </Section3>
        </CardGrid2>
      </DashboardContainer>
    </MainContent>
  );
};

const MainContent = styled.div`
  margin-left: 50px;
  padding: 20px;
  background-color: #1e1e1e;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const DashboardContainer = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px; /* Space between sections */
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  flex: 3; /* 75% width */

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }
`;

const Card = styled.div`
  position: relative; /* Ensure the card is the relative container for the absolute positioning */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px; /* Optional styling */
  background-color: #444; /* Optional styling */
`;

const NetProfitCard = styled(Card)`
  flex: 1; /* 25% width */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon = styled.div`
  margin-bottom: 8px; /* Adjust spacing as needed */
  border-radius: 25%; /* Makes the background circular */
  background-color: ${({ color }) => color}; /* Dynamic background color */
  font-size: 30px;
  width: 40px;
  text-align: center;
`;

const CardTitle = styled.div`
  font-size: 16px;
  margin-bottom: 4px; /* Adjust spacing as needed */
  text-align: left;
  box-sizing: border-box;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  box-sizing: border-box;
`;

const Percentage = styled.div`
  position: absolute;
  bottom: 8px; /* Adjust as needed */
  right: 8px; /* Adjust as needed */
  font-size: 14px;
  color: ${({ color }) => color}; /* Adjust color as needed */
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Percentage1 = styled.div`
  position: absolute;
  bottom: 8px; /* Adjust as needed */
  font-size: 14px;
  color: ${({ color }) => color};
  display: flex;
  text-align: left;
  align-items: center;
  box-sizing: border-box;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  box-sizing: border-box;
`;

const ProgressText = styled.div`
  text-align: center;
  font-size: 7px;
  color: white;
`;

const RoundedText = styled.div`
  margin-top: 8px;
  font-size: 8px;
  text-align: center;
`;

// ------------------------------------------------------------
// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh; /* Full height */
//   background-color: #2c2c2c;
// `;

// const Sidebar = styled.div`
//   width: 250px; /* Adjust width as needed */
//   background-color: #333;
//   color: white;
//   padding: 20px;
//   box-shadow: 2px 0 5px rgba(0,0,0,0.3);
//   flex-shrink: 0; /* Prevent shrinking */
// `;

// const MainContent = styled.div`
//   flex: 1; /* Takes remaining space */
//   padding: 20px;
//   margin-left: 50px;
//   overflow-y: auto; /* Allows scrolling if content overflows */
// `;

const CardGrid1 = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CardGrid2 = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px; /* Define gap between sections */
  align-items: flex-start; /* Align items to the top */
  box-sizing: border-box; /* Ensure padding and borders are included in width calculation */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections on mobile */
  }
`;

const Section = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  flex: 1;

  &.activity {
    flex: 3; /* 75% width */
  }

  &.icons {
    flex: 1; /* 25% width */
  }

  @media (max-width: 768px) {
    &.activity,
    &.icons {
      flex: none;
      width: 100%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    border-radius: 50px; /* Adjust the border-radius */
    background-color: #949494; /* Adjust the background color */

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #949494; /* Adjust the border color on hover */
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #949494; /* Adjust the border color when focused */
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: #949494; /* Adjust the border color */
    }
    .MuiSelect-select {
      color: #f5f7f6; /* Change the color of the selected text */
    }
  }
`;

const CustomMenuItem = styled(MenuItem)`
  color: #f5f7f6; /* Change the color of the dropdown menu items */
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Space between icon/label and arrow
  margin-bottom: 20px; // Space between items

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%; // Makes the background circular
    background-color: ${({ color }) => color}; // Dynamic background color
    margin-right: 10px; // Space between icon and label
    font-size: 20px;
  }
  .label {
    font-size: 16px;
    flex-grow: 1;
    text-align: left;
  }

  .arrow {
    display: flex;
    align-items: center;
  }
`;

// Section1 Styling
const Section1 = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  // height: 100%; /* Ensure full height in grid layout */
  box-sizing: border-box; /* Ensure padding and borders are included in the width calculation */

  @media (max-width: 768px) {
    height: auto; /* Allow content to determine height on mobile */
    width: 100%; /* Ensure full width on mobile */
  }
`;

const Section2 = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  flex: 3; /* Flex ratio for 75% width */
  box-sizing: border-box; /* Ensure padding and borders are included in width calculation */

  @media (max-width: 768px) {
    flex: none; /* Allow content to determine height on mobile */
    width: 100%; /* Ensure full width on mobile */
  }
`;

const Section3 = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  flex: 1; /* Flex ratio for 25% width */
  box-sizing: border-box; /* Ensure padding and borders are included in width calculation */

  @media (max-width: 768px) {
    flex: none; /* Allow content to determine height on mobile */
    width: 100%; /* Ensure full width on mobile */
  }
`;

// Table Styling
const Table = styled.table`
  width: 100%;
  background-color: #1e1e1e;
  border-collapse: collapse;
  margin-top: 20px;
  border: none;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    color: #e0e0e0;
  }

  th {
    background-color: #2c2c2c;
    font-weight: bold;
    border-bottom: 1px solid #444;
  }

  tr {
    border-bottom: 1px solid #444;
  }

  tr:last-child {
    border-bottom: none;
  }

  tbody tr:hover {
    background-color: #444;
  }
`;

// Status Label Styling
const StatusLabel = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  color: white;
  background-color: ${({ status }) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Pending":
        return "orange";
      case "Cancelled":
        return "red";
      default:
        return "grey";
    }
  }};
`;

// Feedback Container Styling
const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Space between feedback items */
`;

// Feedback Item Styling
const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// Feedback Header Styling
const FeedbackHeader = styled.div`
  display: flex;
  align-items: center; /* Aligns items vertically in the center */
  margin-bottom: 10px;
  justify-content: space-between;
`;

// Name Styling
const Name = styled.div`
  margin-left: 10px; /* Space between name and stars */
`;

// Stars Styling
const Stars = styled.div`
  color: gold;
`;

// Profile Picture Styling
const ProfilePic = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #e0e0e0; /* Light gray background */
  border: 2px solid #b0b0b0; /* Border color for better definition */
`;

const Spacing = styled.div`
  margin-top: 50px;
`;

export default Dashboard;
