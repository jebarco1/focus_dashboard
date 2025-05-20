import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/BreadcrumbsEdit";
import { UserEdits, Users } from "../../../../utils/Constant";
import EditMyProfile from "./EditMyProfile/EditMyProfile";
import EditProfileForm from "./EditProfileForm/EditProfileForm";



const UserEdit = () => {
  return (
    <>
      <Breadcrumbs title={UserEdits} mainTitle={UserEdits} parent={Users} />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <EditMyProfile />
            <EditProfileForm />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UserEdit;
