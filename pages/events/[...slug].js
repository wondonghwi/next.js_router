import React from 'react';
import { useRouter } from 'next/router';

const FilterdEventPage = () => {
  const router = useRouter();
  // console.log(router.query);

  return (
    <div>
      <h1>Filtered Event Page</h1>
    </div>
  );
};

export default FilterdEventPage;
