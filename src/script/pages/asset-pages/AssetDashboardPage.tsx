import "../../../css/DashboardPage.css";
import { columns, getAssetList } from "../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";
import { useCheckLoggedIn } from "../../context/AuthContext";
import Table from "../../components/Table";

const AssetDashboardPage = () => {
  const mainRef = useMainRef();
  useCheckLoggedIn();
  useScrollToMain();

  const { data: assetList, isLoading } = useQuery({
    queryFn: () => getAssetList(),
    queryKey: ["assetList"],
  });

  return (
    <main className="dashboard-page" ref={mainRef}>
      <div className="title">Danh Sách Tài Sản</div>
      {isLoading || typeof assetList === "undefined" ? (
        <>Loading...</>
      ) : (
        <Table
          data={assetList}
          columns={columns}
          createLink="/asset-dashboard/create"
        />
      )}
    </main>
  );
};

export default AssetDashboardPage;
