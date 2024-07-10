import {FC} from 'react';
import {AuthStyles} from "../Auth.Styles.tsx";
import {PATHS} from "../../../const/paths.constants.ts";
import {Logo} from '../../../elements';

export interface Props {
}

const Login: FC<Props> = (props: Props) => {
  return (
    <AuthStyles className='login'>
      <div className="auth-container">
        <div className="grid-container auth-grid">
          <div className="auth-top">
            <Logo className="auth-logo" to={PATHS.DASHBOARD}>
              <img src="/img/main/logo.svg" alt="m24"/>
            </Logo>
            <span className="auth-top__title">Login</span>
          </div>
        </div>
      </div>
    </AuthStyles>
  );
};

export default Login;
