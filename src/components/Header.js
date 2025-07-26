import { useSelector } from "react-redux";

const Header = () => {  

    const result = useSelector((state) => state.cartData);
    console.log("Redux data in header:", result.length);
    return (
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart" />
            </div>
        </div>
    )
}

export default Header;