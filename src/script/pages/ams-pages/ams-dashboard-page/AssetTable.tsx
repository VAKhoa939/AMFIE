import { Link } from "react-router-dom";
import { Asset, columnHeaderList } from "../../../interfaces/Asset";

interface Props {
  assetList: Asset[];
}

function renderColumnHeaders() {
  return (
    <thead>
      <tr>
        {columnHeaderList.map((value, id) => (
          <td key={id}>{value}</td>
        ))}
      </tr>
    </thead>
  );
}

function renderData(assetList: Asset[]) {
  return (
    <tbody>
      {assetList.map((asset, id) => {
        return renderRow(asset, id);
      })}
    </tbody>
  );
}

function renderRow(asset: Asset, id: number) {
  return (
    <tr key={id}>
      {Object.entries(asset).map(([key, value]) => (
        <td key={key}>
          {key === "asset_id" ? <Link to={value}>{value}</Link> : <>{value}</>}
        </td>
      ))}
    </tr>
  );
}

const AssetTable = ({ assetList }: Props) => {
  console.log(assetList);
  return (
    <table className="asset-table">
      {renderColumnHeaders()}
      {renderData(assetList)}
    </table>
  );
};

export default AssetTable;
