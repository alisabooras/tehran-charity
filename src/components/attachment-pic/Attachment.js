import './Attachment.css'
import patient from './patient.jpg'

function Attachment() {
    return (
        <>
             <img src={patient} alt="patient" className="attachment img-fluid" />
        </>
    )
}

export default Attachment
