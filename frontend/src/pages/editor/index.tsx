// import { useLazyQuery, useQuery } from '@apollo/client';
// import { useNavigate } from 'react-router';
// import { GET_USERS } from '../../service/user.service';
import Layout from '@/components/layout';
import { ReactFlow, Controls, Background, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
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
    
    
  return (
    <Layout>
      <ReactFlow style={rfStyle}>
        <Background color='#3d3d3d' />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Layout>
  );
}


export default Editor

