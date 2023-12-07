export default function TabButton({ children }) {

    function handleClcik() {
        console.log("Clicked");
    }

    return (
        <li>
          <button onClick={handleClcik}>{children}</button>
        </li>
    );
}