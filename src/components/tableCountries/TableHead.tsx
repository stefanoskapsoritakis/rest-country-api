import React from "react";
import { TableCell, TableRow } from "@mui/material";
import CountryTableHead from "@mui/material/TableHead";

const columns = [
  "Flag",
  "Name",
  "Regions",
  "Languages",
  "Population",
  "Capital",
];
function TableHead() {
  return (
    <CountryTableHead>
      <TableRow>
        {columns.map((columnName) => (
          <TableCell key={columnName}>{columnName}</TableCell>
        ))}
      </TableRow>
    </CountryTableHead>
  );
}

export default TableHead;