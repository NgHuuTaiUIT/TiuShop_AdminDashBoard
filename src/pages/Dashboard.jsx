import React, { useEffect } from "react";
import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/StatusCard/StatusCard";
import Chart from "react-apexcharts";
import Table from "../components/Table/Table";
import { Link } from "react-router-dom";
import Badge from "../components/Badge/Badge";
import { useSelector, useDispatch } from "react-redux";
import ThemmeAction from "../redux/actions/ThemeActions";

const chartoptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent"
    },
    datalabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    },
    legend: {
      position: "top"
    },
    grid: {
      show: false
    }
  }
};

const topcustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,878"
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251"
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840"
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840"
    }
  ]
};
const latestOrders = {
  head: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    }
  ]
};
const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger"
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;
const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

function Dashboard() {
  const themeReducer = useSelector(state => state.ThemeReducer);

  const dispatch = useDispatch();

  dispatch(ThemmeAction.getTheme());

  useEffect(() => {
    if (themeReducer.mode === "theme-mode-dark") {
      console.log(themeReducer.mode);

      chartoptions.options.chart.foreColor = "#fff";
    } else {
      console.log(themeReducer.mode);

      chartoptions.options.chart.foreColor = "#373d3f";
    }
  }, [themeReducer.mode]);
  return (
    <div>
      <h1 className="page-header">Dashboard</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div key={index} className="col-6">
                <StatusCard
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartoptions.options}
              series={chartoptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              {" "}
              <h3>Top Customers</h3>
            </div>
            <div className="card__body">
              {/* table */}
              <Table
                headData={topcustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topcustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.head}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
