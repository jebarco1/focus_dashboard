import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks"; // Custom hooks for Redux
import { fetchLatestNews } from "../../../../ReaduxToolkit/Reducer/getLastestNew";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";
import { Link } from "react-router-dom";


import {
  BookOpen,
  Check,
  DollarSign,
  Edit,
  FileText,
  Globe,
  Link2,
  Mail,
  MessageCircle,
  RotateCcw,
  Youtube,
} from "react-feather";

const iconMapping: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Check,
  DollarSign,
  Edit,
  FileText,
  Globe,
  Link2,
  Mail,
  MessageCircle,
  RotateCcw,
  Youtube,
};

const LatestUpdate: React.FC = () => {
  const dispatch = useAppDispatch();
  const { news, loading, error } = useAppSelector((state) => state.LastesNews);

  useEffect(() => {
    dispatch(fetchLatestNews());
  }, [dispatch]);

  return (
    <Col lg={12}>
      <Card>
        <CardHeader className="faq-header pb-0">
          <H3 className="d-inline-block m-0">Lottery News</H3>
          <span className="pull-right d-inline-block">
            <Link to="/see-all">See All</Link>
          </span>
        </CardHeader>
        <CardBody className="faq-body">
          {loading && <P>Loading...</P>}
          {error && <P className="text-danger">Error: {error}</P>}
          {news.map((item) => {
            const IconComponent = iconMapping[item.type] || null; // Get the correct component
            return (
              <div className="d-flex updates-faq-main" key={item.id}>
                <div className="updates-faq">
                  {IconComponent ? <IconComponent className="font-primary" /> : null}
                </div>
                <div className="flex-grow-1 updates-bottom-time">
                  <P>{item.message}</P>
                  <P>{new Date(item.date).toLocaleString()}</P>
                </div>
              </div>
            );
          })}
        </CardBody>
      </Card>
    </Col>
  );
};



export default LatestUpdate;
