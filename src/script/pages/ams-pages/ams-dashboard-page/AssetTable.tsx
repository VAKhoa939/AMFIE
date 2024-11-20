import { Asset } from "../../../interfaces/Asset";

interface Props {
  columnHeaderList: string[];
  assetList: Asset[];
}

const AssetTable = ({ assetList, columnHeaderList }: Props) => {
  function renderColumnHeaders() {
    return (
      <thead>
        <tr>
          {columnHeaderList.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
      </thead>
    );
  }

  function renderData() {
    return <tbody>{assetList.map((asset) => renderRow(asset))}</tbody>;
  }

  function renderRow(asset: Asset) {
    return (
      <tr>
        {Object.values(asset).map((value) => (
          <td>{value}</td>
        ))}
      </tr>
    );
  }

  return (
    <table className="asset-table">
      {renderColumnHeaders()}
      {renderData()}
    </table>
  );
};

export default AssetTable;
