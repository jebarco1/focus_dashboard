import CommonErrorPage from './Common/CommonErrorPage'

const Error401 = () => {
  return (
    <CommonErrorPage
      tittle={401}
      tittleClassName="font-warning"
      BtnClassName="btn-warning-gradien"
    />
  )
}

export default Error401