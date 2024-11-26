export interface Asset {
  assetId: string;
  assetCode: string;
  name: string;
  specifications: string;
  yearOfUse: number;
  quantity: number;
  unitPrice: number;
  originPrice: number;
  realCount: number;
  depreciationRate: number;
  remainingValue: number;
  location: string;
  responsibleUser: string;
  suggestedDisposal: string;
  note: string;
}

export interface AssetResponse extends Asset {
  _id: string;
  __v: string;
  history: number;
}

const HANDLE_ASSET_URL = import.meta.env.VITE_API_URL + "/assets";

export async function getAssetList() {
  const res = await fetch(`${HANDLE_ASSET_URL}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const data: AssetResponse[] = await res.json();
  // Filter out non-used fields from each asset
  const filteredData = data.map(({ _id, __v, history, ...rest }) => rest);

  return [...filteredData];
}

export async function getAssetById(id: string) {
  const res = await fetch(`${HANDLE_ASSET_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export async function createAsset(asset: Asset) {
  const requestInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  assetId: "",
  assetCode: "",
  name: "",
  specifications: "",
  yearOfUse: 0,
  quantity: 0,
  unitPrice: 0,
  originPrice: 0,
  realCount: 0,
  depreciationRate: 0,
  remainingValue: 0,
  location: "",
  responsibleUser: "",
  suggestedDisposal: "",
  note: "",
};

export const tableColumns = [
  {
    header: "Mã tài sản",
    accessorKey: "asset_id",
    footer: "Mã tài sản",
  },
  {
    header: "Số hiệu tài sản",
    accessorKey: "asset_code",
    footer: "Số hiệu tài sản",
  },
  {
    header: "Tên tài sản",
    accessorKey: "name",
    footer: "Tên tài sản",
  },
  {
    header: "Quy cách, đặc điểm tài sản",
    accessorKey: "specifications",
    footer: "Quy cách, đặc điểm tài sản",
  },
  {
    header: "Năm sử dụng",
    accessorKey: "year_of_use",
    footer: "Năm sử dụng",
  },
  {
    header: "Số lượng",
    accessorKey: "quantity",
    footer: "Số Lượng",
  },
  {
    header: "Đơn Giá",
    accessorKey: "unit_price",
    footer: "Đơn Giá",
  },
  {
    header: "Nguyên giá",
    accessorKey: "origin_price",
    footer: "Nguyên giá",
  },
  {
    header: "Số lượng thực tế",
    accessorKey: "real_count",
    footer: "Nguyên giá",
  },
  {
    header: "Phầm trăm hao mòn",
    accessorKey: "depreciation_rate",
    footer: "Phầm trăm hao mòn",
  },
  {
    header: "Nguyên giá còn lại",
    accessorKey: "remaining_value",
    footer: "Nguyên giá còn lại",
  },
  {
    header: "Địa điểm",
    accessorKey: "location",
    footer: "Địa điểm",
  },
  {
    header: "ID người phụ trách",
    accessorKey: "responsible_user",
    footer: "ID người phụ trách",
  },
  {
    header: "Đề nghị thanh lý",
    accessorKey: "suggested_disposal",
    footer: "Đề nghị thanh lý",
  },
  {
    header: "Ghi chú",
    accessorKey: "note",
    footer: "Ghi chú",
  },
];
