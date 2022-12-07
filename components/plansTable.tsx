import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

function createData(
    planId: string,
    cost: number,
    databases: string[],
    isDefault: boolean,
    queries: string[],
) {
    return { planId, cost, databases, isDefault, queries };
}

export const plansTableRows = [
    createData('268ca404-09ba-4b3b-9584-0ba6ceb8c408', 441, ['Neo4j', 'MongoDB'], true, [
        'Neo4j query',
        `db.orders.find({
  items: {
    name: "Lord of the Rings"
  }
},
{
  _id: 0,
  number: 1,
  productName: {
    "$getField": {
      field: "name",
      input: {
        "$first": {
          "$filter": {
            input: "$items",
            cond: {
              $eq: [
                "$$this.name",
                "Lord of the Rings"
              ]
            }
          }
        }
      }
    }
  }
})`,
    ]),
    createData('b158d3d9-034b-407c-98cb-ac3d9ccf88ab', 639, ['PostgreSQL', 'Cassandra', 'MongoDB'], false, [
        'Postgres query',
        'Cassandra query',
        `db.orders.find({
  items: {
    name: "Lord of the Rings"
  }
},
{
  _id: 0,
  number: 1,
  productName: {
    "$getField": {
      field: "name",
      input: {
        "$first": {
          "$filter": {
            input: "$items",
            cond: {
              $eq: [
                "$$this.name",
                "Lord of the Rings"
              ]
            }
          }
        }
      }
    }
  }
})`,
    ]),
];

export default function PlansTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="execution plans table">
                <TableHead>
                    <TableRow>
                        <TableCell>Plan&nbsp;ID</TableCell>
                        <TableCell align="right">Plan&nbsp;Cost</TableCell>
                        <TableCell align="right">Databases&nbsp;Used</TableCell>
                        <TableCell align="right">More&nbsp;Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {plansTableRows.map((row) => (
                        <TableRow
                            key={row.planId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.planId}{row.isDefault ? " (default)" : ""}
                            </TableCell>
                            <TableCell align="right">{row.cost}</TableCell>
                            <TableCell align="right">{row.databases.join(', ')}</TableCell>
                            <TableCell align="right">
                                <Link href={`explain/${row.planId}`}>
                                    Plan&nbsp;Details
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
