export type Cytoscape = cytoscape.Core

export class SchemaCategory {
    constructor(
        public objects: SchemaObject[],
        public morphisms: SchemaMorphism[]
    ) { }

    public renderToCytoscape(cy: Cytoscape) {
        console.log('success!');
        this.objects.forEach(schemaObject => schemaObject.renderToCytoscape(cy));
    }
}

export class SchemaObject {
    constructor(public key: number, public label: string, ids: SchemaSignature[]) { }

    public renderToCytoscape(cy: Cytoscape) {
        cy.add([
            { data: { id: 'one', label: 'Node 1', parent: 'postgres' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2', parent: 'postgres' }, position: { x: 500, y: 50 } },
            { data: { id: 'postgres', label: 'PostgreSQL' }, classes: 'group group-1' },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
        ]);
        console.log('added items!')
    }
}

export class SchemaMorphism {
    constructor(
        public signature: number,  // Should this be an actual signature? I.e. set of number sequences
        public domainKey: number,
        public rangeKey: number,
    ) { }

    public renderToCytoscape(cy: Cytoscape) {

    }
}

export type SchemaSignature = {
    ids: number[]
}

export type SchemaIdentifier = {
    signatures: SchemaSignature[]
}
