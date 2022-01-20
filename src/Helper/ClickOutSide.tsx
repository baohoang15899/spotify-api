import React, { useEffect, useState } from 'react'

export default function ClickOutSide(ref: any) {
    const [status, setStatus] = useState<Boolean>(false)
    useEffect(() => {
        function click(e:any) {
            if (ref.current && !ref.current.contains(e.target)) {
                setStatus(false)
            }
            else{
                setStatus(true)
            }
        }
        document.addEventListener("mousedown", click);
        return () => {
            document.removeEventListener("mousedown", click);
        };
    }, [status])

    return status
}
