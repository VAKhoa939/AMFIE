import UserTable from "./UserTable";
import "../../../css/AssetDashboardPage.css";
import { getAssetList } from "../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";
import { useCheckLoggedIn } from "../../context/AuthContext";

const UserDashboardPage = () => {
  const mainRef = useMainRef();
  useCheckLoggedIn();
  useScrollToMain();

  const { data: assetList, isLoading } = useQuery({
    queryFn: () => getAssetList(),
    queryKey: ["assetList"],
  });

  return (
    <main className="ams-dashboard-page" ref={mainRef}>
      <div className="title">Danh Sách Tài Sản</div>
      {isLoading || typeof assetList === "undefined" ? (
        <>Loading...</>
      ) : (
        <UserTable assetList={assetList} />
      )}
    </main>
  );
};

export default UserDashboardPage;
