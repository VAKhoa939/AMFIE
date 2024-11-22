import { useEffect, useState } from "react";
import {
  Asset,
  columnHeaderList,
  createAsset,
  defaultAsset,
  deleteAsset,
  getAssetById,
  updateAsset,
} from "../../interfaces/Asset";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AssetInfo = () => {
  const [formData, setFormData] = useState<Asset>(defaultAsset);
  const [assetId, setAssetId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const [mode, setMode] = useState<string>(
    location.pathname !== "/dashboard/create-asset" ? "info" : "create"
  );
  const isInfoMode = mode === "info";

  const { data: asset, isLoading } = useQuery({
    queryFn: async () => {
      setAssetId(location.pathname.split("/").pop() as string);
      return getAssetById(assetId);
    },
    queryKey: ["asset"],
    enabled: isInfoMode,
  });

  useEffect(() => {
    if (!isInfoMode || !asset) return;
    console.log(asset);
    setFormData(asset);
    setLoading(isLoading);
  }, [isInfoMode, asset, isLoading, formData]);

  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value], id) => (
          <div key={key}>
            <p>{columnHeaderList[id]}:</p>
            {key === "note" ? (
              <textarea name={key} value={value} onChange={handleChange} />
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                readOnly={key === "asset_id"}
              />
            )}
          </div>
        ))}

        <div>
          <input type="submit" value={isInfoMode ? "Save" : "Create"} />
        </div>
      </form>
    );
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name } = e.target;
    const value =
      typeof e.target.value === "number"
        ? Number(e.target.value)
        : e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (mode === "delete") {
      deleteAsset(assetId);
    }
    console.log(
      mode === "create" ? createAsset(formData) : updateAsset(formData)
    );
  }

  return (
    <div className="asset-info-background">
      <div>
        <Link to={"/dashboard"}>Trở về</Link>
        {loading ? <>Loading...</> : renderForm()}
      </div>
    </div>
  );
};

export default AssetInfo;
