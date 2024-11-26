import "../../../css/AssetDashboardPage.css";
import { Asset } from "../../interfaces/Asset";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp, FaPlus } from "react-icons/fa";
import { FilterSidebar } from "./FilterSideBar";
import { Link } from "react-router-dom";

interface Props {
  assetList: Asset[];
}
const UserTable = ({ assetList }: Props) => {
  const columns = [
    {
      header: "Mã tài sản",
      accessorKey: "_id",
      footer: "Mã tài sản",
    },
    {
      header: "Số hiệu tài sản",
      accessorKey: "asset_id",
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

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    data: assetList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination: pagination,
      sorting: sorting,
      globalFilter: filtering,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div className="relative">
      <FilterSidebar table={table} />
      <div className="w3-container">
        <div className="ams-table-buttons">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Search all columns..."
            className=""
          />
          <Link to={"/dashboard/create-asset"} className="create-btn">
            <FaPlus className="icon" />
            <label>Tạo tài sản mới</label>
          </Link>
        </div>
        <table className="w3-table-all">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {" "}
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          <span className="inline-block w-4">
                            {header.column.getCanSort()
                              ? {
                                  asc: <FaSortUp className="icon" />,
                                  desc: <FaSortDown className="icon" />,
                                  false: <FaSort className="icon" />, // Default state
                                }[
                                  (header.column.getIsSorted() as string) ??
                                    "false"
                                ]
                              : null}
                          </span>
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot />
        </table>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="pagination-btn"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          {Array.from({ length: table.getPageCount() }, (_, index) => (
            <button
              key={index}
              className={`pagination-btn index-btn`}
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="pagination-btn"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="page-number">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
