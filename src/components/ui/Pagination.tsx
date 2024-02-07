import { Pagination as PaginationMUI } from "@mui/material";
import { observer } from "mobx-react";
import { useContext, useState, useEffect } from "react";
import { RootStoreContext } from "../../context/RootStoreContext";
import { fetchData } from "../../utils/fetchData";

const url = process.env.REACT_APP_RAPID_API_URL + "propertyExtendedSearch";

const Pagination = observer(() => {
  const [page, setPage] = useState<number>(1);
  const { locationsSearchStore } = useContext(RootStoreContext);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    const refetch = async () => {
      const response = await fetchData(url, {
        ...locationsSearchStore.searchParams,
        page: page.toString(),
      });
      locationsSearchStore.setListingsData(response.data);
    };
    refetch();
  }, [page]);

  return (
    <PaginationMUI
      count={locationsSearchStore.listingPageCount}
      page={page}
      onChange={handlePageChange}
    />
  );
});

export default Pagination;
