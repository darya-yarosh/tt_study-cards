export default function removePodgroup(podgroups, studentsNumber) {
    const onePodgroup = podgroups[0];
    onePodgroup.countStudents = studentsNumber;

    const newPodgroups = [onePodgroup];
    return newPodgroups;
}