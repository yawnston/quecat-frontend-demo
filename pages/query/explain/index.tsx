import { Button, Grid, Stack } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import PlansTable from "../../../components/plansTable";

const ExplainPage: NextPage = () => {
    return (
        <Grid container height={'100%'} flexDirection={'column'}
            justifyContent={'space-between'} alignItems={'stretch'}
        >
            <Grid item>
                <PlansTable></PlansTable>
            </Grid>
            <Grid item>
                <Stack spacing={2} direction="row-reverse">
                    <Button variant="contained">
                        <Link href={'/query'}>Back to Query</Link>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default ExplainPage
