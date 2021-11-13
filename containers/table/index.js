import DataTable from "react-data-table-component";
import theme from "theme";
import TableWrapper, { PaginationInfoCtx } from "./styled";
import { IoSearchOutline } from "react-icons/io5";
import { currencyFormatter } from "utilities";
import Pagination from "components/Pagination";
import { useState, useMemo } from "react";
import Flex from "components/flex";
import Input from "components/input";
import propTypes from "prop-types";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
      borderBottomColor: theme.colors[theme.colors.primary][100],
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: theme.colors[theme.colors.primary][100],
      },
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: theme.typeScale.bodyText3,
      padding: "25px 8px",
      fontWeight: "bold",
    },
  },
  head: {
    style: {
      backgroundColor: theme.colors[theme.colors.primary][50],
    },
  },
  body: {
    style: {
      padding: "0 1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: theme.typeScale.bodyText3,
      maxWidth: "fit-content",
    },
  },
  headRow: {
    style: {
      backgroundColor: theme.colors[theme.colors.primary][50],
      minHeight: "52px",
      borderBottomWidth: ".5px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.colors[theme.colors.primary][100],
      padding: "0 1rem",
    },
    denseStyle: {
      minHeight: "32px",
    },
  },
};

const Table = (props) => {
  const { data, columns, width, pageData, PageSize, selectableRows } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const PaginationInfo = `Showing ${currentPage * PageSize - PageSize + 1} - ${
    currentPage * PageSize
  } of ${currencyFormatter(data.length)} items`;

  return (
    <>
      {pageData && (
        <Flex justifyContent="space-between" wrap>
          <div style={{ margin: "1rem 0" }}>
            <Input
              Prepend={IoSearchOutline}
              placeholder="Search for Customer’s Name, Status, etc."
              type="search"
              color="green"
            />
          </div>
          <PaginationInfoCtx>{PaginationInfo}</PaginationInfoCtx>
        </Flex>
      )}
      <TableWrapper width={width}>
        <DataTable
          columns={columns}
          data={currentTableData}
          selectableRows={selectableRows}
          responsive
          customStyles={customStyles}
        />
      </TableWrapper>
      <Flex justifyContent="space-between" wrap>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {pageData && <PaginationInfoCtx>{PaginationInfo}</PaginationInfoCtx>}
      </Flex>
    </>
  );
};

Table.propTypes = {
  data: propTypes.any.isRequired,
  columns: propTypes.array.isRequired,
  pageData: propTypes.bool,
  width: propTypes.string,
  selectableRows: propTypes.bool,
};

export default Table;
