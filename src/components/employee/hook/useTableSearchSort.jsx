// src\components\employee\hook\useTableSearchSort.jsx
import { useState, useMemo } from "react";

export function useTableSearchSort({
  data,
  searchableFields = [],
  defaultSortKey = null,
  defaultSortDirection = "asc",
}) {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState(
    defaultSortKey
      ? { key: defaultSortKey, direction: defaultSortDirection }
      : { key: null, direction: "asc" }
  );

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return {
        key,
        direction: "asc",
      };
    });
  };

  const filteredData = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return data;

    return data.filter((item) =>
      searchableFields.some((field) => {
        const value = item[field];
        if (value === undefined || value === null) return false;
        return String(value).toLowerCase().includes(query);
      })
    );
  }, [data, search, searchableFields]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const { key, direction } = sortConfig;

    const copy = [...filteredData];
    copy.sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];

      if (
        typeof aVal === "number" &&
        typeof bVal === "number"
      ) {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      aVal = String(aVal ?? "").toLowerCase();
      bVal = String(bVal ?? "").toLowerCase();

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });

    return copy;
  }, [filteredData, sortConfig]);

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return (
        <span className="ml-1 text-xs text-slate-500">↕</span>
      );
    }
    return (
      <span className="ml-1 text-xs">
        {sortConfig.direction === "asc" ? "▲" : "▼"}
      </span>
    );
  };

  return {
    search,
    setSearch,
    sortConfig,
    handleSort,
    data: sortedData,
    renderSortIcon,
  };
}