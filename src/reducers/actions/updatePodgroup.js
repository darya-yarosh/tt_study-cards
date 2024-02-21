export default function updatePodgroup(card, fieldType, podgroupIndex, value) {
    const updatedPodgroups = [...card.podgroups];

    switch (fieldType) {
        case "lectures": {
            updatedPodgroups[podgroupIndex].lectureTeacher = value;
            break;
        }
        case "laboratory": {
            updatedPodgroups[podgroupIndex].laboratoryTeacher = value;
            break;
        }
        case "practic": {
            updatedPodgroups[podgroupIndex].practiceTeacher = value;
            break;
        }
        case "seminar": {
            updatedPodgroups[podgroupIndex].seminarTeacher = value;
            break;
        }
        case "offset": {
            updatedPodgroups[podgroupIndex].offsetTeacher = value;
            break;
        }
        case "exam": {
            updatedPodgroups[podgroupIndex].examTeacher = value;
            break;
        }
        case "countStudents": {
            updatedPodgroups[0].countStudents = card.studentsNumber - value;
            updatedPodgroups[1].countStudents = value;
            break;
        }
        default: {
            break;
        }
    }

    return updatedPodgroups;
}