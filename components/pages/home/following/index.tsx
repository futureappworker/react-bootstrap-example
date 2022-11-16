import React, { useState, useEffect } from 'react';
import { useRequest } from 'ahooks';
import { v4 as uuidv4 } from 'uuid';

import FollowItem, { FollowItemPropsTypes } from '../../../followItem';

import getFollowing from '../../../../services/getFollowing';

function Following() {
  const {
    loading,
    runAsync,
  } = useRequest(getFollowing, {
    manual: true,
  });

  const [error, setError] = useState<any>(null);
  const [resultRerPageNumber] = useState(10);

  const [list, setList] = useState(() => {
    const defaultList: FollowItemPropsTypes[] = [];
    return defaultList;
  });

  const addTemplates = () => {
    const templates: FollowItemPropsTypes[] = [];
    for (let i = 0; i < resultRerPageNumber; i += 1) {
      templates.push({
        id: uuidv4(),
        isTemplate: true,
      });
    }
    setList((preList) => [...preList, ...templates]);
  };

  const addItems = (items: FollowItemPropsTypes[]) => {
    let resultItems = [...list];
    resultItems = list.filter((item) => !item.isTemplate);
    resultItems.push(...items);
    setList(resultItems);
  };

  useEffect(() => {
    addTemplates();
    setTimeout(() => {
      runAsync({
        page: 1,
        pageSize: resultRerPageNumber,
      })
        .then((data) => {
          addItems(data);
        })
        .catch((err) => setError(err));
    }, 1000);
  }, []);

  if (error) {
    return (
      <div>{error.message}</div>
    );
  }

  return (
    <div>
      {
        !loading && list.map((item: FollowItemPropsTypes) => (
          <FollowItem
            key={item.id}
            isTemplate={item.isTemplate}
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
