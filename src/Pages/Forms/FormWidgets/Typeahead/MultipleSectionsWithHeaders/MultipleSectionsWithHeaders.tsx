import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { MultipleSectionWithHeader } from '../../../../../utils/Constant'
import { Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead'
import { multipleSelectionData, multipleWithHeadersData } from '../../../../../Data/Forms/FormWidgets/TypeaheadData'
import { LI } from '../../../../../AbstractElements'

const MultipleSectionsWithHeaders = () => {
    const renderMenu = (results: any[], menuProps: any) => {
        const items = results.map((result, index) => {
          if (result.divider === true) {
            return <LI key={index}  className="divider" />;
          }
          if (result.header === true) {
            return (
              <LI key={index} className="dropdown-header">{result.name}</LI>
            );
          }
          return (
            <MenuItem key={index} option={result} position={index}>
              <strong>{result.name}</strong>
              <div>{result.description}</div>
            </MenuItem>
          );
        });
        return <Menu {...menuProps}>{items}</Menu>;
      };
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={MultipleSectionWithHeader} subTitle={multipleSelectionData} headClass='pb-0'/>
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div>
                <Typeahead
                  options={multipleWithHeadersData}
                  placeholder="NBA and NHL teams"
                  labelKey="name"
                  renderMenu={renderMenu}
                  multiple
                  id='1'
                />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MultipleSectionsWithHeaders