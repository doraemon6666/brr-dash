import { Box, Card, CardContent, CircularProgress, Avatar,Typography } from '@mui/material';
import '../styles/AcitivityRow.scss'
import { useCurrentUser } from '@/common/contexts/UserContext'; // 路径按你项目结构调整

const { user, loading, error } = useCurrentUser();
const ActivityRow = () => {
    return(
       <h3>Welcome, {user?.firstname}!</h3>
    )
  }
  export default ActivityRow;