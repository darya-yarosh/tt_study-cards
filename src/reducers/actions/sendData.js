import { saveData } from "../../logic/apiController";

export default function sendData(data) {
    const response = saveData(data);
    
    const message = response.status === 200
        ? "Изменения успешно сохранены"
        : "Что-то пошло не так. Пожалуйста, перезагрузите страницу."
    window.alert(message);
}