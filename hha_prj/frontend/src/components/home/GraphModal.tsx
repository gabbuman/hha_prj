import { Box } from "@mui/material";
import React from "react";
import { Component } from "react";
import { Modal } from "react-bootstrap";
import { DptGraphCard } from './Department Card/DptGraphCard';

import { sampleData } from '../home/Department Card/RecordData';

interface ModalProps{
   isOpen: boolean
   dptName: string
}

interface ModalState{
    dptName: string
    isOpen: boolean
}

const initialState: ModalState = {
    dptName: "",
    isOpen:false
}
const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    outline: 0,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
let open: boolean;
class GraphModal extends Component <ModalProps, ModalState> {

    _isMounted = false;
    prevProps: any;
    prevProp: any;
    constructor(props: ModalProps){
        super(props);  
        // this.setState({
        //     dptName: this.props.dptName, isOpen: this.props.isOpen
        // });
        // open = this.props.isOpen;
        
    }

    componentDidMount() {
        this._isMounted = true;
        
        this.setState({dptName: this.props.dptName,  isOpen: this.props.isOpen})
        open = this.props.isOpen;
        console.log({open});
    }

    componentDidUpdate(prevProps: ModalProps){
        if (this.props.isOpen !== prevProps.isOpen) {
            this.setState({isOpen: this.props.isOpen});
            open = this.props.isOpen;
            console.log({open});
          }
    }    

    render(){
      
        const handleClose = () => {
            this.setState({
                isOpen: false
            });
            open = this.state.isOpen;
            this.forceUpdate();
        }

        return(
            <><div>
                bhjjkbjkjhv bn
            </div><Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                    <Box sx={modalStyle}>
                        <div id="modal-modal-title">
                            Text in a modal jcgfzhxgkhj
                            hgchjvb
                            hj

                        </div>
                        <div id="modal-modal-description">
                            <DptGraphCard width={500}
                                height={300}
                                recordDataSet={sampleData}
                                dptName={this.props.dptName} />
                        </div>
                    </Box>
                </Modal></>
        )
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
}
export default GraphModal;
