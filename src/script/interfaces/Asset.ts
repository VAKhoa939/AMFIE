export interface Asset {
  id: string;
  asset_id: string;
  name: string;
  specifications: string;
  year_of_use: number;
  quantity: number;
  unit_price: number;
  origin_price: number;
  real_count: number;
  depreciation_rate: number;
  remaining_value: number;
  location: string;
  responsible_user: string;
  suggested_disposal: string;
  note: string;
}

export interface AssetResponse extends Asset {
  __v: string;
  history: number;
}

const HANDLE_ASSET_URL = import.meta.env.VITE_API_URL + "/assets";

export async function getAssetList() {
  const res = await fetch(`${HANDLE_ASSET_URL}`);
  const data: AssetResponse[] = await res.json();
  // Filter out non-used fields from each asset
  const filteredData = data.map(({ __v, history, ...rest }) => rest);
  return [...filteredData];
}

export async function getAssetById(id: string) {
  const res = await fetch(`${HANDLE_ASSET_URL}/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function createAsset(asset: Asset) {
  const requestInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(asset),
  };
  const res = await fetch(`${HANDLE_ASSET_URL}`, requestInit);
  const data = await res.json();
  return data;
}

export async function updateAsset(id: string, asset: Asset) {
  const requestInit: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(asset),
  };
  const res = await fetch(`${HANDLE_ASSET_URL}/${id}`, requestInit);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function deleteAsset(id: string) {
  const requestInit: RequestInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${HANDLE_ASSET_URL}/${id}`, requestInit);
  const data = await res.json();
  return data;
}

export const columnHeaderList: string[] = [
  "Mã tài sản",
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
  "Đề nghị thanh lý",
  "Ghi chú",
];

export const defaultAsset: Asset = {
  id: "",
  asset_id: "",
  name: "",
  specifications: "",
  year_of_use: 0,
  quantity: 0,
  unit_price: 0,
  origin_price: 0,
  real_count: 0,
  depreciation_rate: 0,
  remaining_value: 0,
  location: "",
  responsible_user: "",
  suggested_disposal: "",
  note: "",
};
