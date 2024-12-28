import CommonErrorPage from './Common/CommonErrorPage'

const Error503 = () => {
  return (
    <CommonErrorPage
      tittle={503}
      tittleClassName="font-secondary"
      BtnClassName="btn-secondary-gradien"
    />
  )
}

export default Error503