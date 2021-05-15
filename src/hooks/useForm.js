import { useState } from "react";

export const useForm = ( initialState ) => {
    const [data, setData ] = useState( initialState );
    const id = parseInt(Math.random() * 100);

    const handleInputChange = ( {target} ) => {
        setData(
            {
                ...data,
                [ target.name ] : target.value,
                id
            }
        );
    }

    return [data, handleInputChange ];
}