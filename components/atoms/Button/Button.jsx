import PropTypes from "prop-types"
import clsx from "clsx"

export const Button = ({ children, className, onClick, ...props }) => (
  <button
    className={clsx(
      "flex items-center justify-center gap-2 cursor-pointer leading-10 px-4 border",
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
