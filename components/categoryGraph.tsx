import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const CytoscapeComponent = dynamic(() => import('react-cytoscapejs'), { ssr: false });
import { SchemaCategory } from '../models/schemaCategory';
import { Core, ElementDefinition } from 'cytoscape';
import { cytoscapeStylesheet } from '../utils/cytoscapeStylesheet';

type CategoryGraphProps = {
    schemaCategory: SchemaCategory
}

const CategoryGraph = (props: CategoryGraphProps) => {
    const [cy, setCy] = useState((undefined) as Core | undefined);
    useEffect(() => {
        // We have to check if cytoscape is already destroyed, otherwise it throws an error
        if (cy && !cy.destroyed()) {
            props.schemaCategory.renderToCytoscape(cy);
            cy.fit();
        }
    });

    return <CytoscapeComponent id="cy"
        elements={[{ data: { id: 'five', label: 'Node 1', parent: 'postgres' }, position: { x: 40, y: 40 } }]}
        style={{ width: '100%', height: '100%', borderWidth: '2px', borderColor: 'black', borderStyle: 'solid' }}
        stylesheet={cytoscapeStylesheet}
        autoungrabify={true}
        cy={cy => { setCy(cy) }}
    />;
}

export default CategoryGraph
