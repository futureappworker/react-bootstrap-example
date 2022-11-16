import React from 'react';
import { useRequest } from 'ahooks';

import FollowItem, { FollowItemPropsTypes } from '../../../followItem';

import getFollowing from '../../../../services/getFollowing';

function Following() {
  const { data, error, loading } = useRequest(getFollowing);

  if (error) {
    return (
      <div>{error.message}</div>
    );
  }

  return (
    <div>
      {
        !loading && data.map((item: FollowItemPropsTypes) => (
          <FollowItem
            key={item.id}
            id={item.id}
            name={item.name}
            username={item.username}
            avater={item.avater}
            isFollowing={item.isFollowing}
          />
        ))
      }
    </div>
  );
}

export default Following;
