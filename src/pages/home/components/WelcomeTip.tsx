import { Box, Card, CardContent, CircularProgress, Avatar,Typography } from '@mui/material';
import { useCurrentUser } from '@/common/contexts/UserContext'; 


const WelcomeTip = () => {
    const { user } = useCurrentUser();
    return(
      <div>
         {user?.firstname && (
            <h3>Welcome Back, {user.firstname}!</h3>
         )}
      </div>
    )
  }
  export default WelcomeTip;