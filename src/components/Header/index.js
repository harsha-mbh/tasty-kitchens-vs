import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiFillCloseCircle} from "react-icons/ai"
import './index.css'

class Header extends Component{
    state = {showMenu: false}

    onClickMenu = ()=> this.setState({showMenu: true})

    onClickCloseMenu = () => this.setState({showMenu: false})

    onClickLogout = ()=>{
    const {history} = this.props 
    Cookies.remove("jwt_token")
    history.replace("/login")
}
    render(){
        const {showMenu} = this.state
    return (
    <nav className="nav-container">
<div className="responsive-container">
    <div className="visible-container">
        <div className="logo-container">
            <img src="https://res.cloudinary.com/dkgkhdfnt/image/upload/v1677134374/Tasty%20Kitchens/Frame_274chef-img_iuqiad.png" alt="website logo" className="chef-hat"/>
            <Link to="/">
            <img src="https://res.cloudinary.com/dkgkhdfnt/image/upload/v1677134374/Tasty%20Kitchens/Featurestasty-kitchens_ctjpkr.png" alt="website logo" className="logo-text"/>
            </Link>
            
        </div>
        <button type="button" onClick={this.onClickMenu} className="menu-icon">
        <GiHamburgerMenu width={24} height={24}/>
        </button>  
        <ul className="menu-list-container-desktop">
            <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
            </li>
            <li className="menu-item">
            <Link to="/cart" className="menu-link">Cart</Link>
            </li>
            <li className="menu-item">
               <button className="logout-btn" type="button" onClick={this.onClickLogout}>Logout</button> 
            </li>
        </ul>
    </div>
    {showMenu && (<div className="menu-container-mobile">
        <ul className="menu-list-container-mobile">
            <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
            </li>
            <li className="menu-item">
            <Link to="/cart" className="menu-link">Cart</Link>
            </li>
            <li className="menu-item">
               <button className="logout-btn" type="button" onClick={this.onClickLogout}>Logout</button> 
            </li>
        </ul>
        <button className="close-btn" type="button" onClick={this.onClickCloseMenu}>
            <AiFillCloseCircle width={24} height={24}/>
        </button>
    </div>)}
    
</div>
    </nav>
)}
    }
export default withRouter(Header)