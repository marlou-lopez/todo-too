import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/reducers';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
