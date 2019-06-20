import { useEffect, useState } from 'react';
import { graphQLClient } from '../api/client';

export const useQuery = (query, { variables = {}, start = true } = {}) => {
  const [tries, setTries] = useState(0);
  const [state, setState] = useState<{ loading: boolean; data?: any; error?: any }>({
    loading: true,
    data: null,
    error: null
  });

  useEffect(() => {
    (async () => {
      if (start) {
        setState({ loading: true, data: null });
        try {
          const data = await graphQLClient.request(query, variables);
          setState({ data, loading: false });
        } catch (error) {
          setState({ loading: false, data: null, error });
        }
      }
    })();
  }, [start, tries]);

  const retry = () => setTries(t => t + 1);

  return { ...state, retry };
};
