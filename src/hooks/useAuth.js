import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectSid } from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const SID = useSelector(selectSid);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    // SID,
  };
};
