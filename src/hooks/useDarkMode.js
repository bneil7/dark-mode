import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        darkMode 
        ? document.body.classList.add('dark-mode') 
        : document.body.classList.remove('dark-mode')

    }, [darkMode])
    console.log(darkMode);
    return [darkMode, setDarkMode];
}

// import { useState } from "react";
// import useLocalStorage from './useLocalStorage';

// export const useDarkMode = (key, initialValue) => {
//     const key = 'testkey';
//     const initialValue = 'testvalue'
//     const [value, setValue] = useLocalStorage(key, initialValue);
//     const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   };
//   return [value, setValue, handleChanges];
// };
