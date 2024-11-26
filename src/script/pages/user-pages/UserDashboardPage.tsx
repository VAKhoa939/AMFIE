import Table from "../../components/Table";
import "../../../css/AssetDashboardPage.css";
import { columns, getAssetList } from "../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";
import { useCheckLoggedIn } from "../../context/AuthContext";

const UserDashboardPage = () => {
  const mainRef = useMainRef();
  useCheckLoggedIn();
  useScrollToMain();

  const { data: userList, isLoading } = useQuery({
    queryFn: () => getAssetList(),
    queryKey: ["userList"],
  });

  return (
    <main className="dashboard-page" ref={mainRef}>
      <div className="title">Danh Sách Tài Sản</div>
      {isLoading || typeof userList === "undefined" ? (
        <>Loading...</>
      ) : (
        <Table data={userList} columns={columns} createLink="/user-dashboard" />
      )}
    </main>
  );
};

export default UserDashboardPage;
