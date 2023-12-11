export default function TabButton({ children, isSlected, ...props }) {
    return (
        <li>
          <button className={isSlected ? "active" : undefined} {...props}>{children}</button>
        </li>
    );
}