// export const TOGGLE_EDITING = "TOGGLE_EDITING";
// export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
// export const TOGGLE_DRAGON_STATUS = "TOGGLE_DRAGONS_STATUS";

// export const toggleEditing = () => {
//     return {
//         type: TOGGLE_EDITING
//     };
// };

// export const updateTitle = newTitle => {
//     return {
//         type: UPDATE_TITLE,
//         payload: newTitle
//     };
// };

export const addNewFeature = featureName => {
    return {
        type: ADD_FEATURE,
        payload: { name: featureName, dragonStatus: false }
    };
};

export const removeFeature = featureName => {
    return {
        type: REMOVE_FEATURE,
        payload: { name: featureName }
    };
};

// export const toggleDragonStatus = index => {
//     return {
//         type: TOGGLE_DRAGON_STATUS,
//         payload: index
//     };
//};