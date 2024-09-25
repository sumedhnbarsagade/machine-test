
const Checkbox = ({ label, value, onChange }) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };