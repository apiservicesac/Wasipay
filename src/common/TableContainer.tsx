import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Column,
  Table as ReactTable,
  ColumnFiltersState,
  FilterFn,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender
} from '@tanstack/react-table';

import { rankItem } from '@tanstack/match-sorter-utils';
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";

// Column Filter
const Filter = ({
  column
}: {
  column: Column<any, unknown>;
  table: ReactTable<any>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
        placeholder="Search..."
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  );
};

// Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  );
};
interface TableContainerProps {
  columns?: any;
  data?: any;
  tableclassName?: any;
  divclassName?: any;
  thclassName?: any;
  trclassName?: any;
  tableClass?: any;
  tdclassName?: any;
  theadclassName?: any;
  tbodyclassName?: any;
  isTfoot?: boolean;
  isAddItem?: boolean;
  routeAddItem?: string;
  isBordered?: boolean;
  customPageSize?: number;
  isGlobalFilter?: boolean;
  isPagination: boolean;
  PaginationClassName?: string;
  SearchPlaceholder?: string;
}

const TableContainer = ({
  columns,
  data,
  tableclassName,
  theadclassName,
  divclassName,
  trclassName,
  thclassName,
  tdclassName,
  tbodyclassName,
  isTfoot,
  isAddItem,
  routeAddItem = '#',
  isPagination,
  customPageSize,
  isGlobalFilter,
  PaginationClassName,
  SearchPlaceholder = 'Search for ...'
}: TableContainerProps) => {

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank
    });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  const {
    getHeaderGroups,
    getFooterGroups,
    getRowModel,
    getPageOptions,
    setPageIndex,
    setPageSize,
    getState,
    getCanPreviousPage,
    getCanNextPage,
    nextPage,
    previousPage,
  } = table;

  useEffect(() => {
    Number(customPageSize) && setPageSize(Number(customPageSize));
  }, [customPageSize, setPageSize]);

  return (
    <Fragment>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12">
        <div className="xl:col-span-3">
        {isGlobalFilter &&
            <div className="relative mb-4">
                <DebouncedInput className="pl-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder={SearchPlaceholder} autoComplete="off" value={globalFilter ?? ''} onChange={value => setGlobalFilter(String(value))} />
                <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
            </div>
          }
        </div>
        
        <div className="lg:col-span-1 lg:text-right xl:col-span-2 xl:col-start-11  mb-4">
          {
            isAddItem &&
            <div className="self-center col-span-12 lg:col-span-6">
              <Link to={routeAddItem} type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Add</span></Link>
            </div>
          }
        </div>
      </div>

      <div className={divclassName}>
        <table className={tableclassName}>
          <thead className={theadclassName}>
            {getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className={trclassName}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}
                      {...{
                        className: `${header.column.getCanSort()} ${thclassName}`,
                        onClick: header.column.getToggleSortingHandler(),
                      }}>
                      {header.isPlaceholder ? null : (
                        <React.Fragment>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' ',
                            desc: ' ',
                          }
                          [header.column.getIsSorted() as string] ?? null}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </React.Fragment>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody className={tbodyclassName}>
            {getRowModel().rows.map(row => {
              return (
                <tr key={row.id} className={trclassName}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id} className={tdclassName}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

          {isTfoot && <tfoot>
            {
              getFooterGroups()?.map((footer: any, tfKey: number) => (
                <tr key={tfKey}>
                  {
                    footer.headers?.map((tf: any, key: number) => (
                      <th key={key} className="p-3 text-left group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500">
                        {flexRender(
                          tf.column.columnDef.header,
                          tf.getContext()
                        )}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </tfoot>}
        </table>
      </div>

      {
        isPagination && (
          <div className={PaginationClassName}>
            <div className="mb-4 grow md:mb-0">
              <div className="text-slate-500 dark:text-zink-200">Showing
                <b> {getState().pagination.pageSize}</b> of
                <b> {data.length}</b> Results</div>
            </div>
            <ul className="flex flex-wrap items-center gap-2 shrink-0">
              <li>
                <Link to="#!" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${!getCanPreviousPage() && "disabled"}`} onClick={previousPage}>
                  <ChevronLeft className="size-4 mr-1"></ChevronLeft> Prev</Link>
              </li>
              {getPageOptions().map((item: any, key: number) => (
                <React.Fragment key={key}>
                  <li>
                    <Link to="#" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${getState().pagination.pageIndex === item && "active"}`} onClick={() => setPageIndex(item)}>{item + 1}</Link>
                  </li>
                </React.Fragment>
              ))}
              <li>
                <Link to="#!" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto 
                ${!getCanNextPage() && ""}`} onClick={() => getCanNextPage() && nextPage()}>
                  Next <ChevronRight className="size-4 ml-1"></ChevronRight> </Link>
              </li>
            </ul>
          </div>
        )
      }
    </Fragment>
  );
};

export default TableContainer;