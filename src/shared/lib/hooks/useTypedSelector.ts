import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@/app/stores/mainStore';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
