import { createContext, useState } from 'react';

const feedBackContext = createContext();

export const feedBackProvider = (children) => {
	return <feedBackContext.Provider>{children}</feedBackContext.Provider>;
};
