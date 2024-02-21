export default function setTeacherForAll(podgroups, podgroupIndex) {
    const updatedPodgroups = JSON.parse(JSON.stringify(podgroups));
    const teacherId = updatedPodgroups[podgroupIndex].lectureTeacher;

    updatedPodgroups[podgroupIndex].lectureTeacher = teacherId;
    updatedPodgroups[podgroupIndex].laboratoryTeacher = teacherId;
    updatedPodgroups[podgroupIndex].practiceTeacher = teacherId;
    updatedPodgroups[podgroupIndex].seminarTeacher = teacherId;
    updatedPodgroups[podgroupIndex].offsetTeacher = teacherId;
    updatedPodgroups[podgroupIndex].examTeacher = teacherId;

    return updatedPodgroups;
}