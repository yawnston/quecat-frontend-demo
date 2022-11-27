import { Button, Stack } from "@mui/material";
import { NextPage } from "next";

const ExecutePage: NextPage = () => {
    return (
        <div>
            <span>Retrieved 52 results in 0.26 seconds.</span>

            <Stack spacing={2} direction="row">
                <Button variant="contained" href="http://localhost:3000/results.json" download="queryResults.json">
                    JSON
                </Button>
                <Button variant="contained">
                    RDF
                </Button>
                <Button variant="contained">
                    Instance Category
                </Button>
            </Stack>
        </div>
    );
}

export default ExecutePage
