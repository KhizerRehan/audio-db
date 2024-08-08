import React, { ChangeEvent, Key, useCallback, useMemo, useState } from "react"
import { Button, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, } from "@nextui-org/react"
import { Album } from "./data-table-source"
import { useTheme as useNextTheme } from "next-themes"
import { useRouter } from 'next/navigation';

export default function DataTable({
                                    data,
                                    columns,
                                    filterColumn,
                                    placeholder = 'items',
                                    allowNavigation
}: {
  data: any[],
  columns: any,
  filterColumn: string,
  placeholder?: string,
  allowNavigation?: boolean
}) {
  const [filterValue, setFilterValue] = useState("")
  const [rowsPerPage, setRowsPerPage] = useState(20)
  const [page, setPage] = useState(1)
  const {resolvedTheme} = useNextTheme()
  const hasSearchFilter = Boolean(filterValue)
  const router = useRouter();

  const filteredItems = useMemo(() => {
    let filteredUsers = [...data]

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user[filterColumn].toLowerCase().includes(filterValue.toLowerCase()),
      )
    }
    return filteredUsers
  }, [data, filterValue])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const renderCell = useCallback((user: Album, columnKey: Key) => {
    const cellValue: any = user[columnKey as keyof Album]
    return cellValue;
  }, [])

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1)
    }
  }, [page, pages])

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page])

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value))
      setPage(1)
    },
    [],
  )

  const topContent = useMemo(() => {
    return (
      <div className="mb-[1rem] flex flex-col gap-4">

        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {data.length} albums
          </span>
          <label className="flex items-center text-small text-default-400">
            Rows per page:
            <select
              className="bg-transparent text-small text-default-400 outline-none"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    )
  }, [
    filterValue,
    onRowsPerPageChange,
    data.length,
    hasSearchFilter,
    resolvedTheme,
  ])

  const bottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden w-[30%] justify-end gap-2 sm:flex">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    )
  }, [items.length, page, pages, hasSearchFilter])

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[55vh]",
      }}
      topContent={topContent}
      topContentPlacement="outside"
      onRowAction={(key) => {
        if (allowNavigation && key) {
          router.push(`/list/album?artistName=${key}`)
        }
      }}
    >
      <TableHeader columns={columns}>
        {(column: any) => (
          <TableColumn key={column.uid}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={`No ${placeholder} found`} items={data}>
        {(item) => (
          <TableRow key={item[filterColumn]}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
