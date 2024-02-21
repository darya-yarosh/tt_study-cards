import {
    createPodgroupProps,
    removePodgroupProps,
    updateTeacherProps,
    setTeacherForAllProps,
    saveProps
} from './root';

export const mapStateToProps = (store) => {
    return store;
};

export const mapDispatchToProps = (dispatch) => {
    return {
        updateTeacher: (cardId, fieldType, podgroupIndex, value) =>
            dispatch(
                updateTeacherProps(cardId, fieldType, podgroupIndex, value)
            ),
        createPodgroup: (cardId) =>
            dispatch(
                createPodgroupProps(cardId)
            ),
        removePodgroup: (cardId) =>
            dispatch(
                removePodgroupProps(cardId)
            ),
        setTeacherForAll: (cardId, podgroupIndex) =>
            dispatch(
                setTeacherForAllProps(cardId, podgroupIndex)
            ),
        save: () =>
            dispatch(
                saveProps()
            ),
    }
}
