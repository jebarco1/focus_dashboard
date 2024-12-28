import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../ReaduxToolkit/Hooks';
import { useEffect } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { OnScrollHideMenu, PageLayout, SampleCard } from '../../../utils/Constant';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import CommonHeader from '../../../Common/CommonHeader';
import { menuOnScroll } from '../../../Data/PageLayout/PageLayoutData';
import { P } from '../../../AbstractElements';
import { setScrollMenu } from '../../../ReaduxToolkit/Reducer/LayoutSlice';

const HideNavScrollContainer = () => {
    const subTitle = [
        {
            text:"lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
    ]
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const hideMenu = pathname === `${process.env.PUBLIC_URL}/pagelayout/hidenavscroll`;
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 30 && hideMenu) dispatch(setScrollMenu(true));
        else dispatch(setScrollMenu(false));
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [dispatch, hideMenu]);
  
    return (
      <>
        <Breadcrumbs mainTitle={OnScrollHideMenu} parent={PageLayout} title={OnScrollHideMenu} />
        <Container fluid>
          <Row>
            <Col sm="12">
              <Card>
                <CommonHeader title={SampleCard} subTitle={subTitle} />
                <CardBody>
                  {menuOnScroll.map((item, index) => (
                    <P key={index}>{item}</P>
                  ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default HideNavScrollContainer