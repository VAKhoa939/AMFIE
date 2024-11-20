export interface Asset {
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

const HANDLE_ASSET_URL = import.meta.env.VITE_API_URL + "/assets";

export async function getAssetList() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${HANDLE_ASSET_URL}`);
  const assetList = (await res.json()) as Asset[];
  return [...assetList];
}
