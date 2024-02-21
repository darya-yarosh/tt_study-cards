//import MOCK from "../logic/mock.json";

export async function getData() {
    const api = "https://bgaa.by/test";
    const data = await fetch(api, { method: "GET" });
    const json = await data.json();
    //const json = MOCK;

    const result = normalizeData(json);
    return result;
}

function normalizeData(jsonData) {
    const loadedData = JSON.parse(JSON.stringify(jsonData));

    const normalizedData = {
        cardList: loadedData.data.map((subjectInfo) => {
            return {
                subjectName: subjectInfo.subjectName,
                course: parseInt(subjectInfo.course),
                semestr: parseInt(subjectInfo.semestr),
                studentsNumber: parseInt(subjectInfo.studentsNumber),
                groupName: subjectInfo.groupName,
                lecturesHours: parseInt(subjectInfo.lecturesHours),
                laboratoryHours: parseInt(subjectInfo.laboratoryHours),
                practicHours: parseInt(subjectInfo.practicHours),
                seminarHours: parseInt(subjectInfo.seminarHours),
                exam: subjectInfo.exam,
                offset: subjectInfo.offset,
                additionalInfo: subjectInfo.additionalInfo,
                countPodgroups: parseInt(subjectInfo.countPodgroups),
                uniqueId: subjectInfo.uniqueId,
                podgroups: subjectInfo.podgroups.map(podgroup => {
                    return {
                        countStudents: parseInt(podgroup.countStudents),
                        laboratoryTeacher: podgroup.laboratoryTeacher,
                        lectureTeacher: podgroup.lectureTeacher,
                        practiceTeacher: podgroup.practiceTeacher,
                        seminarTeacher: podgroup.seminarTeacher,
                        examTeacher: podgroup.examTeacher,
                        offsetTeacher: podgroup.offsetTeacher,
                    }
                })
            }
        }),
        teacherList: loadedData.teachers.map(teacher => {
            return {
                id: teacher.id,
                name: teacher.name
            }
        })
    }

    return normalizedData;
}

export async function saveData(data) {
    const url = "https://bgaa.by/test_result";

    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors", // Изначально указывала "cors", но из-за проблем с отправкой запроса на сервер указала no-cors чтобы пользователя уведомляло об ошибке.
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
        body: JSON.stringify(data)
    });

    return response;
}