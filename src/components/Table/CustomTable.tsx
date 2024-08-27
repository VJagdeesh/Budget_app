import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Table from '@mui/material/Table';
import React from "react";
import { userCredit } from "../../config/types";

interface CustomTableProps{
    data?:userCredit[];
}
const CustomTable:React.FC<CustomTableProps>=(props)=>{
    const keys = props.data && props.data.length > 0 ? Object.keys(props.data[0]) : [];
    const data = props.data && props.data.length > 0 ? props.data : [];
        
return(
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
            {keys.map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
        {data.map((item, index) => (
            <TableRow key={index}>
              {keys.map((key) => (
                <TableCell key={key}>{item[key as keyof userCredit]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
);
};

export default CustomTable;