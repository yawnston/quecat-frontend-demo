import { Box, Button, Grid, Stack } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoryGraph, { ContentKind } from "../../../components/categoryGraph";

const PlanExplainPage: NextPage = () => {
    const router = useRouter();
    const {planId} = router.query;
    const contentKind = planId === '268ca404-09ba-4b3b-9584-0ba6ceb8c408'
        ? ContentKind.Query1
        : ContentKind.Query2;

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
                            <Grid item>
                                <div>Plan details go here! {planId}</div>
                            </Grid>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default PlanExplainPage
