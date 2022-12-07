import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoryGraph, { ContentKind } from "../../../components/categoryGraph";
import { plansTableRows } from "../../../components/plansTable";

const PlanExplainPage: NextPage = () => {
    const router = useRouter();
    const { planId } = router.query;
    const contentKind = planId === '268ca404-09ba-4b3b-9584-0ba6ceb8c408'
        ? ContentKind.Query1
        : ContentKind.Query2;
    const planDetails = plansTableRows.find(x => x.planId === planId);

    const rightGridItems = [];
    rightGridItems.push(
        <Grid item>
            <div>
                <div><b>Plan ID: </b>{planId}</div>
                <div><b>Plan cost: </b>{planDetails?.cost}</div>
                <div><b>Databases used: </b>{planDetails?.databases.join(', ')}</div>
                <div><b>Is default plan: </b>{planDetails?.isDefault ? 'Yes' : 'No'}</div>
            </div>
        </Grid>
    );
    planDetails?.databases.forEach((databaseName, index) => {
        rightGridItems.push(
            <Grid item width={'100%'}>
                <TextField label={databaseName} defaultValue={planDetails?.queries[index]}
                    multiline fullWidth
                    maxRows={planId === '268ca404-09ba-4b3b-9584-0ba6ceb8c408' ? 12 : 7}
                    minRows={planId === '268ca404-09ba-4b3b-9584-0ba6ceb8c408' ? 12 : 7}
                />
            </Grid>
        );
    });
    rightGridItems.push(
        <Grid item>
            <Stack spacing={2} direction="row">
                <Button variant="contained">
                    <Link href={'/query/execute'}>Execute plan</Link>
                </Button>
                <Button variant="outlined">
                    <Link href={'/query/explain'}>
                        Back
                    </Link>
                </Button>
            </Stack>
        </Grid>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1, height: '100%' }}>
                <Grid container columnSpacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={6}>
                        <CategoryGraph schemaCategory={undefined} contentKind={contentKind} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container height={'100%'} flexDirection={'column'}
                            justifyContent={'space-between'} alignItems={'stretch'}
                        >
                            {rightGridItems}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default PlanExplainPage
