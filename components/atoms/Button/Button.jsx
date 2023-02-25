import PropTypes from "prop-types"
import clsx from "clsx"

export const Button = ({ children, className, onClick, ...props }) => (
  <button
    className={clsx(
      "bg-white text-black flex items-center justify-center gap-2 cursor-pointer leading-10 px-4 border transition hover:bg-gray-100 active:bg-gray-200",
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
