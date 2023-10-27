import propType from "prop-types";

const TagHome = (props) => {
  return (
    <span className="bg-cust-teal-50 text-cust-gray-500 text-xs px-3 py-1 rounded-full">
      {props.text}
    </span>
  );
};

export default TagHome;

TagHome.propTypes = {
  text: propType.string.isRequired,
}
