
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addNewFeature = item => {
    return {
        type: ADD_FEATURE,
        // What is payload doing? 
        // catching the argument to append data?
        payload: item
    };
};

export const removeFeature = item => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    };
};

