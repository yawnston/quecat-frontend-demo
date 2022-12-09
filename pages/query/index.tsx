import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import CategoryGraph, { ContentKind } from "../../components/categoryGraph";
import { SchemaCategory, SchemaObject } from "../../models/schemaCategory";

const schemaCategory: SchemaCategory = new SchemaCategory([new SchemaObject(1, 'Customer', [])], []);
const defaultQuery: string = 
`SELECT {
    ?customer ordered ?productName ;
        name ?customerName .
}
WHERE {
    ?product 49 ?productName ;
        -39/36 ?order .
    
    ?order -23/21 ?customer .
    ?customer 3 ?customerName .

    FILTER(?productName = "Lord of the Rings")
}`;

const demoQuery: string = 
`SELECT {
    _:friendsOrders friend ?friendA ;
        friend ?friendB ;
        numProds COUNT(DISTINCT ?comProd)
            AS ?numProds .
    ?friendA name ?friendAName ;
        surname ?friendASurname .
    ?friendB name ?friendBName ;
        surname ?friendBSurname .         
} WHERE {
    ?friendA -4/5 ?friendB .
    FILTER(?friendA < ?friendB)

    ?friendA -9/10/-12/-13 ?comProd ;
        1 ?friendAName ;
        3 ?friendASurname .
    ?friendB -9/10/-12/-13 ?comProd ;
        1 ?friendBName ;
        3 ?friendBSurname .
} ORDER BY ?numProds DESC`;

const QueryPage: NextPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, height: '100%' }}>
                <Grid container columnSpacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={6}>
                        <CategoryGraph schemaCategory={schemaCategory} contentKind={ContentKind.Schema} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container height={'100%'} flexDirection={'column'}
                            justifyContent={'space-between'} alignItems={'stretch'}
                        >
                            <Grid item>
                                <TextField label="Query" defaultValue={demoQuery}
                                    multiline fullWidth spellCheck={false}
                                />
                            </Grid>
                            <Grid item>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained">
                                        <Link href={'/query/execute'}>Execute</Link>
                                    </Button>
                                    <Button variant="outlined">
                                        <Link href={'/query/explain'}>
                                            Explain
                                        </Link>
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default QueryPage
