import { textInputOrField as s } from "../styles/component";
// ------------------------------------------------------------
// TextField component
// ------------------------------------------------------------
const TextField = ({ checked, description, onClick }) => {
    return (
        <div
            style={{
                ...s.task,
                ...(checked ? s.completeTask : s.incompleteTask)
            }}
            onClick={!checked ? onClick : null}
        >
            {description}
        </div>
    );
};
// ------------------------------------------------------------
// export TextField
// ------------------------------------------------------------
export default TextField;
