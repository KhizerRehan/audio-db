"use client"
import React, { useCallback, useEffect, useState } from "react"
import DataTable from "@/components/shared/table/DataTable"
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons/table/SearchIcon";
import { getAlbumByAlbumName } from "@/lib/api/services/albumService";
import { albumColumns } from "@/components/shared/table/data-table-source";

const AlbumPage = () => {
  const [albums, setAlbums] = useState([])
  const [searchTerm, setSearchTerm] = React.useState("homework");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchAlbumByAlbumName = async () => {
      let results = [];
      if (debouncedSearchTerm) {
        const data = await getAlbumByAlbumName(debouncedSearchTerm);
        results = data?.album || [];
      }
      setAlbums(results)
    };

    searchAlbumByAlbumName();
  }, [debouncedSearchTerm]);

  const onClear = useCallback(() => {
    setSearchTerm("")
  }, [])

  return (
    <div className="h-full lg:px-6">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col justify-center gap-3  px-4 py-5 lg:px-0">
        <div className="w-full">
          <h1 className="my-[2rem] text-center text-3xl font-bold">
            List of Albums
          </h1>
        </div>
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by Album Name"
            startContent={
              <SearchIcon width="24px" height="24px" />
            }
            value={searchTerm}
            onClear={() => onClear()}
            onChange={handleChange}
          />
        </div>
        <DataTable data={albums} columns={albumColumns} filterColumn={'idAlbum'} />
      </div>
    </div>
  )
}

export default AlbumPage
