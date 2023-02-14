import PropTypes from "prop-types"
import clsx from "clsx"

export const H1 = ({ children, className, ...props }) => (
  <h1 className={clsx("text-3xl font-bold underline", className)} {...props}>
    {children}
  </h1>
)

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
