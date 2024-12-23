import { Box, SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "views/admin/users/components/ColumnsTable";
import {
  columnsDataColumns,
} from "views/admin/users/variables/columnsData";
import tableDataColumns from "views/admin/users/variables/tableDataColumns.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </SimpleGrid>
    </Box>
  );
}
