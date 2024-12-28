import { Search } from 'react-feather'
import { Col, Form, Input } from 'reactstrap'
import { H3 } from '../../../AbstractElements'

const KnowledgeBaseHelp = () => {
  return (
    <Col xs={12}>
      <div className="knowledgebase-bg b-center bg-size"/>
      <div className="knowledgebase-search">
        <div>
          <H3>{'How Can I help you?'}</H3>
          <Form onSubmit={(event)=>event.preventDefault()} className="form-inline" >
            <div className="w-100 form-group">
              <Search/>
              <Input className="form-control-plaintext w-100" type="text" placeholder="Type question here"/>
            </div>
          </Form>
        </div>
      </div>
    </Col>
  )
}

export default KnowledgeBaseHelp