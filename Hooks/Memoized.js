import { useCallback } from "react";

//useCallback
 const memoizedfn = useCallback(() => {
        dosome(a,b);
 }, [a,b],);


 //useMemo
 const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);