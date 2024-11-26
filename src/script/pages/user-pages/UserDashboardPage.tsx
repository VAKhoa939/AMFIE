import Table from "../../components/Table";
import "../../../css/DashboardPage.css";
import { tableColumns, getAssetList } from "../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";
import { getUserList } from "../../interfaces/User";

const UserDashboardPage = () => {
  const mainRef = useMainRef();
  useScrollToMain();

  const { data: userList, isLoading } = useQuery({
    queryFn: () => getUserList(),
    queryKey: ["userList"],
  });

  return (
    <main className="dashboard-page" ref={mainRef}>
      <div className="title">Danh Sách Người Dùng</div>
      {isLoading || typeof userList === "undefined" ? (
        <>Loading...</>
      ) : (
        <Table
          data={userList}
          columns={tableColumns}
          baseURL="/user-dashboard"
        />
      )}
    </main>
  );
};

export default UserDashboardPage;
