import {  Background, Controls, MiniMap, ReactFlow } from '@xyflow/react'
import React, {  useContext } from 'react'
import { nodeType } from '../utils/initialData'
import { AppContext } from './ContextProvider'

const ReactFlowComponents = () => {
    const {nodes,onNodesChange, edges,  onEdgesChange, setEdges} = useContext(AppContext);
    return (
        <ReactFlow
        nodes={nodes}
            nodeTypes={nodeType}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
        >
            <Background />
            <MiniMap/>
            <Controls />
        </ReactFlow>
    )
}

export default ReactFlowComponents
