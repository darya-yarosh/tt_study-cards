import { useMemo } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Select from "../Select/Select";
import IconButton from "../IconButton/IconButton";

import addIcon from "../../assets/add.svg";
import removeIcon from "../../assets/remove.svg";
import subjectIcon from "../../assets/subject.svg";
import applyToAllBelowIcon from "../../assets/applyToAllBelow.svg";

import { mapDispatchToProps, mapStateToProps } from "../../reducers/connect";
import {
	createPodgroupProps,
	removePodgroupProps,
	setTeacherForAllProps,
	updateTeacherProps,
} from "../../reducers/root";

import styles from "./Card.module.scss";

function Card({ info }) {
	const dispatch = useDispatch();

	const podgroups = useMemo(() => info.podgroups, [info]);
	const countPodgroups = useMemo(() => podgroups.length, [podgroups]);

	const teacherList = useSelector((state) => state.teacherList);
	const formattedTeachers = useMemo(
		() =>
			teacherList.map((teacher) => {
				return {
					value: teacher.id,
					text: teacher.name,
				};
			}),
		[teacherList]
	);

	function createPodgroup() {
		dispatch(createPodgroupProps(info.uniqueId));
	}

	function removePodgroup() {
		dispatch(removePodgroupProps(info.uniqueId));
	}

	function setTeacherForAll(podgroupIndex) {
		dispatch(setTeacherForAllProps(info.uniqueId, podgroupIndex));
	}

	function updatePodgroup(fieldType, podgroupIndex, value) {
		dispatch(
			updateTeacherProps(info.uniqueId, fieldType, podgroupIndex, value)
		);
	}

	return (
		<div className={styles.wrapper} key={info.uniqueId}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					<img src={subjectIcon} alt="Иконка раскрытой книги"></img>
					{info.subjectName}
				</h1>
				<section className={styles.section}>
					<span className={styles.group}>
						<b>Группа</b>
					</span>
					<span className={styles.groupValue}>{info.groupName}</span>

					<span className={styles.num}>
						<b>Количество курсантов</b>
					</span>
					<span className={styles.numValue}>
						{info.studentsNumber}
					</span>

					<span className={styles.course}>
						<b>Курс</b>
					</span>
					<span className={styles.courseValue}>{info.course}</span>

					<span className={styles.semestr}>
						<b>Семестр</b>
					</span>
					<span className={styles.semestrValue}>{info.semestr}</span>
				</section>
			</header>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Занятие</th>
						<th>Часы</th>

						{countPodgroups === 1 && (
							<th>
								<div className={styles.inputWrapper}>
									Преподаватель
									<IconButton
										iconSrc={addIcon}
										onClick={createPodgroup}
										alt={"Кнопка добавления подгруппы"}
										withBG={false}
									/>
								</div>
							</th>
						)}

						{countPodgroups > 1 &&
							podgroups.map((podgroup, index) => (
								<th key={index}>
									<div className={styles.inputWrapper}>
										Подгруппа {index + 1}
										{index !== 0 && (
											<IconButton
												iconSrc={removeIcon}
												onClick={removePodgroup}
												alt={
													"Кнопка удаления подгруппы"
												}
												withBG={false}
											/>
										)}
									</div>
								</th>
							))}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Лекции</td>
						<td>{info.lecturesHours}</td>

						{podgroups.map((podgroup, index) => (
							<td key={index}>
								<div className={styles.inputWrapper}>
									<Select
										options={formattedTeachers}
										selected={podgroup.lectureTeacher}
										defaultValue={""}
										defaultOption={"Вакансия"}
										disabled={info.lecturesHours === 0}
										onChange={(teacherId) =>
											updatePodgroup(
												"lectures",
												index,
												teacherId
											)
										}
									/>

									<IconButton
										iconSrc={applyToAllBelowIcon}
										onClick={() => setTeacherForAll(index)}
										alt={
											"Кнопка применения выбранного преподавателя ко всем нижним полям"
										}
										withBG={true}
									/>
								</div>
							</td>
						))}
					</tr>
					<tr>
						<td>Лабораторные работы</td>
						<td>{info.laboratoryHours}</td>

						{podgroups.map((podgroup, index) => (
							<td key={index}>
								<div className={styles.inputWrapper}>
									<Select
										options={formattedTeachers}
										selected={podgroup.laboratoryTeacher}
										defaultValue={""}
										defaultOption={"Вакансия"}
										disabled={info.laboratoryHours === 0}
										onChange={(teacherId) =>
											updatePodgroup(
												"laboratory",
												index,
												teacherId
											)
										}
									/>
								</div>
							</td>
						))}
					</tr>
					<tr>
						<td>Практические</td>
						<td>{info.practicHours}</td>

						{podgroups.map((podgroup, index) => (
							<td key={index}>
								<div className={styles.inputWrapper}>
									<Select
										options={formattedTeachers}
										selected={podgroup.practiceTeacher}
										defaultValue={""}
										defaultOption={"Вакансия"}
										disabled={info.practicHours === 0}
										onChange={(teacherId) =>
											updatePodgroup(
												"practic",
												index,
												teacherId
											)
										}
									/>
								</div>
							</td>
						))}
					</tr>
					<tr>
						<td>Семинарские</td>
						<td>{info.seminarHours}</td>

						{podgroups.map((podgroup, index) => (
							<td key={index}>
								<div className={styles.inputWrapper}>
									<Select
										options={formattedTeachers}
										selected={podgroup.seminarTeacher}
										defaultValue={""}
										defaultOption={"Вакансия"}
										disabled={info.seminarHours === 0}
										onChange={(teacherId) =>
											updatePodgroup(
												"seminar",
												index,
												teacherId
											)
										}
									/>
								</div>
							</td>
						))}
					</tr>
					{info.exam && (
						<tr>
							<td>Экзамен</td>
							<td></td>

							{podgroups.map((podgroup, index) => (
								<td key={index}>
									<div className={styles.inputWrapper}>
										<Select
											options={formattedTeachers}
											selected={podgroup.examTeacher}
											defaultValue={""}
											defaultOption={"Вакансия"}
											disabled={false}
											onChange={(teacherId) =>
												updatePodgroup(
													"exam",
													index,
													teacherId
												)
											}
										/>
									</div>
								</td>
							))}
						</tr>
					)}
					{info.offset && (
						<tr>
							<td>Зачёт</td>
							<td></td>
							{podgroups.map((podgroup, index) => (
								<td key={index}>
									<div className={styles.inputWrapper}>
										<Select
											options={formattedTeachers}
											selected={podgroup.offsetTeacher}
											defaultValue={""}
											defaultOption={"Вакансия"}
											disabled={false}
											onChange={(teacherId) =>
												updatePodgroup(
													"offset",
													index,
													teacherId
												)
											}
										/>
									</div>
								</td>
							))}
						</tr>
					)}
					{countPodgroups > 1 && (
						<tr>
							<td>Количество человек</td>
							<td></td>
							{podgroups.map((podgroup, index) => (
								<td key={index}>
									{index === 0 && (
										<>{podgroup.countStudents}</>
									)}
									{index !== 0 && (
										<div className={styles.inputWrapper}>
											<input
												type="number"
												max={info.studentsNumber - 1}
												min={1}
												value={podgroup.countStudents}
												onChange={(event) =>
													updatePodgroup(
														"countStudents",
														index,
														event.target.value
													)
												}
											></input>
										</div>
									)}
								</td>
							))}
						</tr>
					)}
					<tr>
						<td>
							Примечание
							<br />
							(для составления расписания)
						</td>
						<td></td>
						<td colSpan={countPodgroups}>
							<div className={styles.inputWrapper}>
								<textarea
									defaultValue={info.additionalInfo}
								></textarea>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

const connectedCard = connect(mapStateToProps, mapDispatchToProps)(Card);
export default connectedCard;
