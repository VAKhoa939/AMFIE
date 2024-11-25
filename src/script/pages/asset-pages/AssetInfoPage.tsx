import { useEffect, useState } from "react";
import {
  Asset,
  columnHeaderList,
  defaultAsset,
  deleteAsset,
  getAssetById,
  updateAsset,
} from "../../interfaces/Asset";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "../../../css/AssetInfoPage.css";
import { useMainRef, useScrollToMain } from "../../context/MainRefContext";

const AssetInfoPage = () => {
  const [formData, setFormData] = useState<Asset>(defaultAsset);
  const [mode, setMode] = useState<string>("info");
  const location = useLocation();
  const isInfoMode = mode === "info";
  const id = location.pathname.split("/").pop() as string;

  const { data: asset, isLoading } = useQuery(["asset"], {
    queryFn: async () => {
      return getAssetById(id);
    },
    enabled: isInfoMode,
  });

  useEffect(() => {
    if (!isInfoMode || !asset) return;
    console.log(asset);
    setFormData(asset);
  }, [isInfoMode, asset, formData]);

  const navigate = useNavigate();
  const mainRef = useMainRef();
  useScrollToMain();

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
      deleteAsset(id);
      navigate("/dashboard");
      return;
    }
    if (mode === "update") {
      updateAsset(formData);
      setMode("info");
    }
  }

  function renderInfo() {
    return (
      <>
        <div className="content">
          {Object.entries(formData).map(([key, value], id) => (
            <div key={key}>
              <p>{columnHeaderList[id]}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setMode("update")}>Cập nhật</button>
        <button>Xóa tài sản</button>
      </>
    );
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit} className="content">
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
          <input type="submit" value="Lưu" />
          <button onClick={() => setMode("info")}>Trở về</button>
        </div>
      </form>
    );
  }

  return (
    <main ref={mainRef} className="asset-info-background">
      <div className="container">
        <Link to={"/dashboard"}>Trở về</Link>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <div className="content">
            {mode === "update" || mode === "create"
              ? renderForm()
              : renderInfo()}
          </div>
        )}
      </div>
    </main>
  );
};

export default AssetInfoPage;
