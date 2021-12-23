import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                    <div class="v3_24">
                        <div class="v3_25"></div>
                        <span class="v3_39">Sign in</span>
                        <div class="v4_43"></div>
                            <div class="menu"> 
                            <form action="submit">
                                <div class="v3_27"></div>
                                <input type="text" class="v19_4" placeholder="username"></input>
                                <div class="v3_28">
                                    <div class="v3_30"></div>
                                    <div class="v3_40"></div>
                                </div>
                                <div class="v3_32">
                                    <input type="password" class="v20_5" placeholder="password"></input>
                                    <div class="v3_34"></div>
                                    <div class="v3_41"></div>
                                </div>
                                <div class="v3_42">
                                    <button type="submit" class="v3_36">Login</button>                   
                                </div>
                            </form>
                            </div>   
                            
                                <a href="#" class="v3_38">Forget password?</a>
                        
                    </div>
            </div>
    );
    }
}
export default Login;