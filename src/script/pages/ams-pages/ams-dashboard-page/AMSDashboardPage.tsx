import AssetTable from "./AssetTable";
import "../../../../css/AMSDashboardPage.css";
import { Asset, getAssetList } from "../../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../../context/MainRefContext";
import { useCheckLoggedIn } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const AMSDashboardPage = () => {
  const mainRef = useMainRef();
  let assetListLength = 0;

  useCheckLoggedIn();
  useScrollToMain();

  const { data: assetList, isLoading } = useQuery({
    queryFn: async () => {
      const newAssetList = (await getAssetList()) as Asset[];
      assetListLength = newAssetList.length + 1;
      console.log(assetListLength);
      return newAssetList;
    },
    queryKey: ["assetList"],
  });

  return (
    <main className="ams-dashboard-page" ref={mainRef}>
      <h1 className="title">Danh Sách Tài Sản</h1>
      <div className="ams-table-buttons">
        <div className="search-asset">Tìm kiếm tài sản</div>
        <div className="pagination">Nút chia trang</div>
        <div className="set-columns">Nút chọn cột</div>
        <Link to={"create-asset"} className="new-asset">
          Nút tạo mới
        </Link>
      </div>
      {isLoading || typeof assetList === "undefined" ? (
        <>Loading...</>
      ) : (
        <AssetTable assetList={assetList} />
      )}
    </main>
  );
};

export default AMSDashboardPage;
