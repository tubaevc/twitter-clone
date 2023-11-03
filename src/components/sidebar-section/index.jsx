import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function SidebarSection({ title, children, more }) {
  return (
    <section className="color:var(--background-secondary)] overflow-hidden mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">
        {title}
      </h5>

      <div className="grid">{children}</div>

      {more && (
        <Link
          to={more}
          className="h-[52px] flex items-center px-4 text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03]"
        >
          Show more
        </Link>
      )}
    </section>
  );
}
SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

SidebarSection.defaultProps = {
  more: false,
};
