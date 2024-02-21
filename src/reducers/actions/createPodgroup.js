export default function createPodgroup(podgroups, studentsNumber) {
    const firstPodgroup = {
        countStudents:
            studentsNumber % 2 === 0
                ? studentsNumber / 2
                : Math.floor(studentsNumber / 2) + 1,
        laboratoryTeacher: podgroups[0].laboratoryTeacher,
        lectureTeacher: podgroups[0].lectureTeacher,
        practiceTeacher: podgroups[0].practiceTeacher,
        seminarTeacher: podgroups[0].seminarTeacher,
        examTeacher: podgroups[0].examTeacher,
        offsetTeacher: podgroups[0].offsetTeacher,
    };

    const secondPodgroup = {
        countStudents:
            studentsNumber % 2 === 0
                ? studentsNumber / 2
                : Math.floor(studentsNumber / 2),
        laboratoryTeacher: "",
        lectureTeacher: "",
        practiceTeacher: "",
        seminarTeacher: "",
        examTeacher: "",
        offsetTeacher: "",
    };

    return [firstPodgroup, secondPodgroup];
}