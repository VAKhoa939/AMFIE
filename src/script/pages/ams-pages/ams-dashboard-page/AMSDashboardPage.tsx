import AssetTable from "./AssetTable";
import "../../../../css/AMSDashboardPage.css";
import { Asset, getAssetList } from "../../../interfaces/Asset";
import { useQuery } from "@tanstack/react-query";
import { useMainRef, useScrollToMain } from "../../../context/MainRefContext";

const columnHeaderList: string[] = [
  "Số hiệu tài sản",
  "Tên tài sản",
  "Quy cách, đặc điểm tài sản",
  "Năm sử dụng",
  "Số lượng",
  "Đơn giá",
  "Nguyên giá",
  "Số lượng thực tế",
  "% hao mòn",
  "Nguyên giá còn lại",
  "Địa điểm",
  "ID Người phụ trách",
  "Ghi chú",
];

const AMSDashboardPage = () => {
  const mainRef = useMainRef();
  let assetListLength = 0;

  useScrollToMain();

  const { data: assetList, isLoading } = useQuery({
    queryFn: () => getAssetList(),
    queryKey: ["assetList"],
  });

  return (
    <main className="ams-dashboard-page" ref={mainRef}>
      <h1 className="title">Danh Sách Tài Sản</h1>
      <div className="ams-table-buttons">
        <div className="search-asset">Tìm kiếm tài sản</div>
        <div className="pagination">Nút chia trang</div>
        <div className="set-columns">Nút chọn cột</div>
        <div className="new-asset">Nút tạo mới</div>
      </div>
      {isLoading || typeof assetList === "undefined" ? (
        <>Loading...</>
      ) : (
        <AssetTable columnHeaderList={columnHeaderList} assetList={assetList} />
      )}
    </main>
  );
};

export default AMSDashboardPage;
