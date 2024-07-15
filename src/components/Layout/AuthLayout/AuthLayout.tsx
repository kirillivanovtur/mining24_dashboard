import React from 'react';
import { connect } from 'react-redux';
import { Modal } from '../../../elements';
import { SiteWrapper } from '../Layout.Styles.tsx';
import { AppStateType } from '../../../store';

interface Props {
  children: any;
  modal: any;
}

const AuthLayout: React.FC<Props> = (props: Props) => {
  const {children, modal} = props;
  return (
    <SiteWrapper className="auth">
      {children}

      <Modal
        opened={modal?.opened}
        closeModal={() => modal?.closeModal()}
        className={modal?.className}
        hasCloseBtn={modal?.hasCloseBtn}
        title={modal?.title}
        children={modal?.content(modal?.contentParams)}
      />
    </SiteWrapper>
  );
};

const mapState = (state: AppStateType) => {
  const { app } = state;
  return {
    modal: app.modal,
  };
};

export default connect(mapState, {})(AuthLayout);
