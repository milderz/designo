import { Link } from 'react-router-dom'
import { StyledPrimaryBtn } from './Styles/PrimaryBtn.styled'

const PrimaryBtn = ({btnText, version, disabled, path}) => {
  return (
    <Link to={path} >

    <StyledPrimaryBtn version={version} disabled={disabled}>
      {btnText}
    </StyledPrimaryBtn>
    </Link>
  )
}

export default PrimaryBtn
