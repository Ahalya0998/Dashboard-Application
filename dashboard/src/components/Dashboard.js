import React from "react";
import styled from "styled-components";
import { FaStar, FaTachometerAlt, FaHamburger } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidDish, BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import {
  PiCrosshairDuotone,
  PiCurrencyCircleDollarDuotone,
} from "react-icons/pi";
import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
  TbArrowUpRight,
} from "react-icons/tb";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "antd";
import { MenuItem, Select, FormControl } from "@mui/material";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Icon = styled.div`
//   margin: 20px 0;
//   color: #b0b0b0;
//   font-size: 24px;

//   &:hover {
//     color: white;
//   }
// `;

const MainContent = styled.div`
  margin-left: 50px;
  padding: 20px;
  background-color: #1e1e1e;
  color: #e0e0e0;
  // // height: 100vh;
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

const CardGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

const Section = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  // // height: 100vh;
`;

const Card = styled.div`
  position: relative; // Ensure the card is the relative container for the absolute positioning
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  // border: 1px solid #ccc; // Optional styling
  border-radius: 8px; // Optional styling
  background-color: #444; // Optional styling
  ${(props) =>
    props.large &&
    `
         grid-column: span 2; /* Make the card span 2 columns in the grid */
         width: 85%;
     `}
`;

const Icon = styled.div`
  margin-bottom: 8px; // Adjust spacing as needed
  border-radius: 25%; // Makes the background circular
  background-color: ${({ color }) => color}; // Dynamic background color
  font-size: 30px;
  width: 40px;
  text-align: center;
`;

const CardTitle = styled.div`
  font-size: 16px;
  margin-bottom: 4px; // Adjust spacing as needed
  text-align: left;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

const Percentage = styled.div`
  position: absolute;
  bottom: 8px; // Adjust as needed
  right: 8px; // Adjust as needed
  font-size: 14px;
  color: ${({ color }) => color}; // Adjust color as needed
  display: flex;
  align-items: center;

`;

const Percentage1 = styled.div`
  position: absolute;
  bottom: 8px; // Adjust as needed
  // left: 12px; // Adjust as needed
  font-size: 14px;
  color: ${({ color }) => color};
  display: flex;
  text-align: left;
  align-items: center;
`;

const Arrow = styled(TbArrowUpRight)`
  margin-left: 4px; // Adjust spacing as needed
  // color: #555; // Adjust color as needed
`;

const ProgressContainer = styled.div`
  // width: 70px;
  // height: 80px;
  margin-right: -50%;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

const ProgressText = styled.div`
  text-align: center;
`;

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

  tbody tr:nth-child(even) {
    // background-color: #333; /* Slightly lighter grey for even rows */
  }

  tbody tr:hover {
    background-color: #444;
  }
`;

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

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Space between feedback items */
`;

const FeedbackItem = styled.div`
  // background-color: #444;
  // padding: 10px;
  // border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center; /* Aligns items vertically in the center */
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Name = styled.div`
  // font-weight: bold;
  margin-left: 10px; /* Space between name and stars */
`;

const Stars = styled.div`
  color: gold;
`;

const ProfilePic = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #e0e0e0; /* Light gray background */
  border: 2px solid #b0b0b0; /* Border color for better definition */
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin-right: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChartWrapper = styled.div`
  width: 100%;
`;

const DropdownWrapper = styled.div`
  margin-left: 35%;
`;

const CustomFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    border-radius: 50px; /* Adjust the border-radius */
    background-color: #949494; /* Adjust the background color */
    // padding: 1px 8px; /* Add some padding for better appearance */

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
          <Card large>
            <CardContent>
              {/* <Card > */}
              <div>
                <CardTitle>Net Profit</CardTitle>
                <br></br>
                <CardValue>$6759.25</CardValue>
                <Percentage1 color="#1aeb4e">
                  <BiSolidUpArrow /> 3%
                </Percentage1>
              </div>
              <div style={{ width: 70, height: 80, marginLeft: 100 }}>
                <Progress
                  type="circle"
                  percent={percentage}
                  width={70}
                  strokeWidth={12}
                  strokeColor="#327aad"
                  trailColor="#d6d6d6"
                  format={(percent) => (
                    <div style={{ fontSize: 12, color: "white" }}>
                      <strong>{`${percent}%`}</strong>
                      <div style={{ fontSize: 7, color: "white" }}>Goal </div>
                      <div style={{ fontSize: 7, color: "white" }}>
                        Completed{" "}
                      </div>
                    </div>
                  )}
                />
                <div style={{ fontSize: 8 }}>
                  * The values have been rounded off.
                </div>
              </div>
            </CardContent>
          </Card>
        </CardGrid>

        <DashboardContainer>
          <CardGrid1>
            <Section style={{ marginLeft: "-3%", width: "131%" }}>
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
                <Bar data={data} options={options} />
              </div>
            </Section>

            <Section style={{ marginLeft: "35%" }}>
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
        </DashboardContainer>

        <DashboardContainer>
          <CardGrid1>
            <Section
              style={{ marginLeft: "-3%", width: "131%", height: "98%" }}>
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
                    <td> <FaCircleUser /> Wade Warren</td>
                    <td>15478256</td>
                    <td>$124.00</td>
                    <td>
                      <StatusLabel status="Delivered">Delivered</StatusLabel>
                    </td>
                  </tr>
                  <tr>
                    <td><FaCircleUser /> Jane Cooper</td>
                    <td>48965786</td>
                    <td>$365.02</td>
                    <td>
                      <StatusLabel status="Delivered">Delivered</StatusLabel>
                    </td>
                  </tr>
                  <tr>
                    <td><FaCircleUser /> Guy Hawkins</td>
                    <td>78958215</td>
                    <td>$45.88</td>
                    <td>
                      <StatusLabel status="Cancelled">Cancelled</StatusLabel>
                    </td>
                  </tr>
                  <tr>
                    <td><FaCircleUser /> Kristin Watson</td>
                    <td>20965732</td>
                    <td>$65.00</td>
                    <td>
                      <StatusLabel status="Pending">Pending</StatusLabel>
                    </td>
                  </tr>
                  <tr>
                    <td><FaCircleUser /> Cody Fisher</td>
                    <td>95715620</td>
                    <td>$545.00</td>
                    <td>
                      <StatusLabel status="Delivered">Delivered</StatusLabel>
                    </td>
                  </tr>
                  <tr>
                    <td><FaCircleUser /> Savannah Nguyen</td>
                    <td>78514568</td>
                    <td>$128.20</td>
                    <td>
                      <StatusLabel status="Delivered">Delivered</StatusLabel>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Section>
            <Section style={{ marginLeft: "35%", height: "98%" }}>
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
                    We enjoyed the Eggs Benedict served on homemade focaccia
                    bread and hot coffee. Perfect service...
                  </div>
                </FeedbackItem>
                <FeedbackItem>
                  <FeedbackHeader>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <ProfilePic /> {/* Empty profile picture */}
                      <Name> Devon Lane</Name>
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
            </Section>
          </CardGrid1>
        </DashboardContainer>
      </DashboardContainer>
    </MainContent>
  );
};

export default Dashboard;
