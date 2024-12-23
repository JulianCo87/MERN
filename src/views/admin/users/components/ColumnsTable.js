import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo, useEffect, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import {SERVER_DOMAIN} from "config"

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

export default function ColumnsTable(props) {
  
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  useEffect(() => {
      const url = `${SERVER_DOMAIN}/getUsers`;

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setUserData(json.data);
          setLoading(false);                                                                                         console.log("User data", json.data);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Clients
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {!loading && userData.map((row) => {
            return (
              <Tr>
                <Td className="css-1nsltfg">
                  <Flex align='center'>
                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                      {row.username}
                    </Text>
                  </Flex>
                </Td>
                <Td className="css-1nsltfg">
                  <Flex align='center'>
                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                      {row.email}
                    </Text>
                  </Flex>
                </Td>
                <Td className="css-1nsltfg">
                  <Flex align='center'>
                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                      {row.role}
                    </Text>
                  </Flex>
                </Td>
                <Td className="css-1nsltfg">
                  <Flex align='center'>
                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                      {row.createdAt}
                    </Text>
                  </Flex>
                </Td>
                {/* {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "NAME") {
                    data = (
                      <Flex align='center'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "Email") {
                    data = (
                      <Flex align='center'>
                        <Text
                          me='10px'
                          color={textColor}
                          fontSize='sm'
                          fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "Role") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "DATE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })} */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
