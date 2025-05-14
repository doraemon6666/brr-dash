

import CommonTable  from '@/common/components/CommonTable'
import { useEffect, useState } from 'react';
import{itRequestColumns} from '../config/itRequestColumns'
import {fetchItRequestList,deleteItRequest} from '../mockData/requestTableList'
import {ITRequest,ITRequestTableProps} from '../types/ITRequest'
import { useSnackbarContext } from '@/common/contexts/snackbar';
import { Button } from '@mui/material';
function ItRequestTable({ onAddClick,refreshFlag }: ITRequestTableProps) {
    const [itRequestList,setItRequestList] = useState<ITRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { showSnackbar } = useSnackbarContext();

    const loadData = async () => {
        try {
          const res = await fetchItRequestList();
          setItRequestList(res);
        } catch (err) {
          console.error('Failed to fetch staff list:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
    };
    useEffect(() => {
        loadData();
    }, [refreshFlag]);

    const handleDelete = async (data:ITRequest) => {
      console.log("🚀 ~ handleDelete ~ data:", data)
      try {
        const res = await deleteItRequest(data?.id)
        if(res.success){
          // reload table data
          showSnackbar('Delete successfully!', 'success');
          loadData();
        } else {
          showSnackbar(res.error ?? "Deletion failed. Please try again.", 'error');
        }

      }
      catch(err){
        showSnackbar((err as Error).message, 'error');
      }
      
    }

    return (
        <CommonTable<ITRequest> 
            columns={itRequestColumns} 
            data={itRequestList} 
            error={error} 
            loading={loading}
            onAddClick={onAddClick}
            renderActions={(row) => (
              <>
                <Button size="small" onClick={() => {}}>Edit</Button>
                <Button size="small" color="error" onClick={()=>handleDelete(row)}>Delete</Button>
              </>
            )} />
    );
  }
  export default ItRequestTable