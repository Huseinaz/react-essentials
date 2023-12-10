export default function TabButton({ children, onSelect, isSlected }) {
    return (
        <li>
          <button className={isSlected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}