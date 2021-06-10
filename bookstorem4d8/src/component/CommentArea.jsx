import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Badge'



const CommentArea = (props) =>{
    return(
<Form>
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Choose...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Control>
    
  <Form.Group controlId="formBasic">
    <Form.Label>{props.key}</Form.Label>
    <Form.Control type="number" placeholder="eee" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}
export default CommentArea
