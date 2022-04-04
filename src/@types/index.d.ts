import {HTMLAttributes, PropsWithChildren} from 'react';

export type ElementProps<T = {}, E = HTMLDivElement> = HTMLAttributes<E> & PropsWithChildren<T>;
