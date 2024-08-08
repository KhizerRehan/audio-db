"use client"
import React, { useEffect, useState } from "react"
import DataTable from "@/components/shared/table/DataTable"
import { useDebounce } from "@uidotdev/usehooks";
import { getAlbumsByArtistName } from "@/lib/api/services/albumService";
import { albumColumns } from "@/components/shared/table/data-table-source";
import { useSearchParams } from "next/navigation";

const AlbumPage = () => {
  const [albums, setAlbums] = useState([])
  const searchParams = useSearchParams()
  debugger;
  const search = searchParams.get('artistName')
  const debouncedSearchTerm = useDebounce(search, 300);

  useEffect(() => {
    const searchAlbumByAlbumName = async () => {
      let results = [];
      if (debouncedSearchTerm) {
        const data = await getAlbumsByArtistName(debouncedSearchTerm);
        results = data?.album || [];
      }
      setAlbums(results)
    };

    searchAlbumByAlbumName();
  }, [search, debouncedSearchTerm]);


  return (
    <div className="h-full lg:px-6">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col justify-center gap-3  px-4 py-5 lg:px-0">
        <div className="w-full">
          <h1 className="my-[2rem] text-center text-3xl font-bold">
            List of Albums
          </h1>
        </div>
        <DataTable data={albums} columns={albumColumns} filterColumn={'idAlbum'} />
      </div>
    </div>
  )
}

export default AlbumPage
