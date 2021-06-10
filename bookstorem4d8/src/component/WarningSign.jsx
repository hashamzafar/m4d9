

import Alert from 'react-bootstrap/Alert'




const WarningSign = (props) =>{
  return  (
       <Alert  variant={'danger'}>
      {props.title}{' '}
      
    </Alert>
  )


}
export default WarningSign
