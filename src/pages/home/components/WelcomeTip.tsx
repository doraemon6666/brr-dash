import { Box, Card, CardContent, CircularProgress, Avatar,Typography } from '@mui/material';
import { useCurrentUser } from '@/common/contexts/UserContext'; 


const WelcomeTip = () => {
    const { user, loading, error } = useCurrentUser();
    return(
       <h3>Welcome Back, {user?.firstname}!</h3>
    )
  }
  export default WelcomeTip;