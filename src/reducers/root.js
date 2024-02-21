import { getData } from "../logic/apiController";

import sendData from './actions/sendData';
import setTeacherForAll from './actions/setTeacherForAll';
import updatePodgroup from "./actions/updatePodgroup";
import removePodgroup from './actions/removePodgroup';
import createPodgroup from "./actions/createPodgroup";

export const initialState = await getData();

export function rootReducer(state = initialState, action) {
    const formattedData = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "createPodgroup": {
            const cardIndex = formattedData.cardList.findIndex(card => card.uniqueId === action.cardId);
            const card = JSON.parse(JSON.stringify(formattedData.cardList[cardIndex]));

            card.podgroups = createPodgroup(
                card.podgroups,
                card.studentsNumber
            )

            formattedData.cardList[cardIndex] = card;
            break;
        }
        case "removePodgroup": {
            const cardIndex = formattedData.cardList.findIndex(card => card.uniqueId === action.cardId);
            const card = JSON.parse(JSON.stringify(formattedData.cardList[cardIndex]));

            card.podgroups = removePodgroup(
                card.podgroups,
                card.studentsNumber
            )

            formattedData.cardList[cardIndex] = card;
            break;
        }
        case "updateTeacher": {
            const cardIndex = formattedData.cardList.findIndex(card => card.uniqueId === action.cardId);
            const card = JSON.parse(JSON.stringify(formattedData.cardList[cardIndex]));

            card.podgroups = updatePodgroup(
                card,
                action.fieldType,
                action.podgroupIndex,
                action.value
            );

            formattedData.cardList[cardIndex] = card;
            break;
        }
        case "setTeacherForAll": {
            const cardIndex = formattedData.cardList.findIndex(card => card.uniqueId === action.cardId);
            const card = JSON.parse(JSON.stringify(formattedData.cardList[cardIndex]));

            card.podgroups = setTeacherForAll(
                card.podgroups,
                action.podgroupIndex
            )

            formattedData.cardList[cardIndex] = card;
            break;
        }
        case "save": {
            const unformatData = {
                data: state.cardList,
                teachers: state.teacherList
            }

            sendData(unformatData)
            break;
        }
        default: {
            break;
        }
    }

    return formattedData;
}

export function updateTeacherProps(cardId, fieldType, podgroupIndex, value) {
    return {
        type: "updateTeacher",
        cardId: cardId,
        fieldType: fieldType,
        podgroupIndex: podgroupIndex,
        value: value
    }
}

export function createPodgroupProps(cardId) {
    return {
        type: "createPodgroup",
        cardId: cardId,
    }
}

export function removePodgroupProps(cardId) {
    return {
        type: "removePodgroup",
        cardId: cardId,
    }
}

export function setTeacherForAllProps(cardId, podgroupIndex) {
    return {
        type: "setTeacherForAll",
        cardId: cardId,
        podgroupIndex: podgroupIndex,
    }
}

export function saveProps() {
    return {
        type: "save",
    }
}