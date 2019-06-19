import { useContext } from 'react';
import { RouterContext } from './index';

export const useRouter = () => useContext(RouterContext);
export default useRouter;
