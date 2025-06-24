// import { useLazyQuery, useQuery } from '@apollo/client';
// import { useNavigate } from 'react-router';
// import { GET_USERS } from '../../service/user.service';
import Layout from '@/components/layout';
import { ReactFlow, Controls, Background, MiniMap, applyNodeChanges, applyEdgeChanges, EdgeChange, Edge, NodeChange, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from 'react';
// import Sidebar from '@/components/sidebar';

function Editor() {
  // const navigate = useNavigate();
  // const {loading, error} = useQuery(GET_USERS)

// if(loading) return <p>Loading...</p>
//   if(error?.message == "User is not authenticated") navigate("/")
    

// const {name, picture} = JSON.parse(localStorage.getItem("Payload") as unknown as string);
    const rfStyle = {
  backgroundColor: '#f5f5f5',
};

type MyNodeData = {
  label: string;
};

// Declarando os tipos corretos
type MyNode = Node<MyNodeData>;

const initialEdges = [{ id: '1-2', source: '1', target: '2' }];
 
const initialNodes: MyNode[] = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);

const onNodesChange = useCallback(
  (changes: NodeChange<MyNode>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
  [],
);
const onEdgesChange = useCallback(
  (changes: EdgeChange<Edge>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [],
);
    
  return (
    <Layout>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        style={rfStyle}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background color='#3d3d3d' />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Layout>
  );
}


export default Editor

