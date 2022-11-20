import React, {
  useRef, useState, useEffect,
} from 'react';
import { useRequest } from 'ahooks';

import BaseLayout from '../layouts/baseLayout';

import getTags from '../services/getTags';

import TagList from '../components/pages/tags/tagList';

export default function Tags() {
  const tagListRef = useRef<any>(null);
  const [error, setError] = useState(null);
  const {
    loading,
    runAsync,
  } = useRequest(getTags, {
    manual: true,
  });
  useEffect(() => {
    if (tagListRef.current) {
      tagListRef.current.addTemplates();
    }
    runAsync()
      .then((data) => {
        if (tagListRef.current) {
          tagListRef.current.addItems(data.data);
        }
      })
      .catch((err) => setError(err));
  }, []);

  const handleMore = () => {
    if (tagListRef.current) {
      tagListRef.current.addTemplates();
    }
    runAsync()
      .then((data) => {
        if (tagListRef.current) {
          tagListRef.current.addItems(data.data);
        }
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    const handleInfiniteScroll = () => {
      const endOfPage = Math.ceil(window.innerHeight + window.pageYOffset)
        >= document.body.offsetHeight;
      if (endOfPage && !loading) {
        handleMore();
      }
    };
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [loading]);

  return (
    <BaseLayout>
      <div className="app-container">
        <h2 className="h2">
          Tags
        </h2>
        <TagList
          ref={tagListRef}
          error={error}
          loadNumber={24}
        />
      </div>
    </BaseLayout>
  );
}
