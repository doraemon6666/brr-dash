import { useCurrentUser } from '@/common/contexts/UserContext';

import { WELCOME_MESSAGE } from '@/common/constants';

const WelcomeTip = () => {
  const { user } = useCurrentUser();

  if (!user?.firstname) return null;

  return (
    <h3>
      {WELCOME_MESSAGE}
      {user.firstname}!
    </h3>
  );
};

export default WelcomeTip;
