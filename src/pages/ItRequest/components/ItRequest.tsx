import { useState } from 'react';

import ITRequestTable from './ITRequestTable';

import AddItRequest from './AddItRequest';

export default function ITRequest() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };
  const handleClose = () => {
    setShowAddForm(false);
  };
  // reload table data
  const triggerRefresh = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <div>
      <ITRequestTable refreshFlag={refreshFlag} onAddClick={handleAddClick} />
      <AddItRequest onSuccess={triggerRefresh} open={showAddForm} onClose={handleClose} />
    </div>
  );
}
