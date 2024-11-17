import '@xyflow/react/dist/style.css';
import ReactFlowComponents from './components/ReactFlowComponents';
import { useContext } from 'react';
import { AppContext } from './components/ContextProvider';
import Modal from './components/ModalComponent/Modal';
import ErrorModal from './components/ModalComponent/ErrorModal';
function App() {
  const {modalOpen,errorModal, nodes,edges} = useContext(AppContext);
  console.log(nodes,edges)
  return (
    <>
    <div className="h-screen">
    <ReactFlowComponents/>
    </div>
    {modalOpen && <Modal/>}
    {errorModal && <ErrorModal/>}
    </>
  )
}

export default App
