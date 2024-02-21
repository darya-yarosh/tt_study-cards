export default function Select({
	options,
	selected,
	defaultValue,
	defaultOption,
	disabled = false,
	onChange,
}) {
	function handlerChange(event) {
		onChange(event.target.value);
	}
	return (
		<select disabled={disabled} value={selected} onChange={handlerChange}>
			<option value={defaultValue}>{defaultOption}</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	);
}
