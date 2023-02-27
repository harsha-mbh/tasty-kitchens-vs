import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { Redirect } from 'react-router-dom'

class Login extends Component{
    state = {username: "", password: "", showErrorMsg: false, errorMsg:""}

    onChangeUsername = event => this.setState({username: event.target.value})

    onChangePassword = event => this.setState({password: event.target.value})

    render(){
        const{username, password} = this.state
        const jwtToken = Cookies.get("jwt_token")
        if(jwtToken!== undefined){
            return <Redirect to="/"/>
        }
        return(
            <div className='login-page-container'>
                <img src="https://res.cloudinary.com/dkgkhdfnt/image/upload/v1677069408/Tasty%20Kitchens/Rectangle_1457login-bg-mobile_piq5pg.png" alt="website login" className='login-image'/>
<form className='form-container'>
<h1 className='form-heading'>Login</h1>
<div className='input-container'>
<label htmlFor='username' className='label-text'>USERNAME</label>
<input type="text" id="username" className='input-field' value={username} onChange={this.onChangeUsername}/>
</div>
<div className='input-container'>
<label htmlFor='password' className='label-text'>PASSWORD</label>
<input type="password" id="password" className='input-field' value={password} onChange={this.onChangePassword}/>
</div>
<div className='login-btn-container'>
    <button className='login-btn' type='submit'>Login</button>
</div>
</form>
<div className='desktop-image-container'>
<img src="https://res.cloudinary.com/dkgkhdfnt/image/upload/v1677071174/Tasty%20Kitchens/Rectangle_1456login-dektop_qlruiv.png" alt="website login" className='login-dektop-image'/>
            </div>
            </div>
            
        )
    }
}

export default Login