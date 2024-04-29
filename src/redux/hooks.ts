import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import type {RootState, AddDispatch} from "./store.ts";

export const useAddDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;