import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import './LoginContent.css';
import axios from 'axios';

const LoginContent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:9999/users');

            const user = res.data.find(
                (u) => u.username === username && u.password === password
            );

            if (!user) {
                setLoginError('Tên đăng nhập hoặc mật khẩu không đúng!');
                return;
            }

            if (user.status === 0) {
                setLoginError('Tài khoản của bạn đã bị khoá!');
                return;
            }

            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        } catch (err) {
            console.error(err);
            setLoginError('Đã xảy ra lỗi khi đăng nhập.');
        }
    };

    return (
        <div className="login-wrapper">
            <form className="login-box" onSubmit={handleLogin}>
                <h2>Đăng nhập</h2>
                {loginError && <div className="login-error">{loginError}</div>}

                <label htmlFor="username">Tên đăng nhập:</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setLoginError('');
                    }}
                    required
                />

                <label htmlFor="password">Mật khẩu:</label>
                <div className="input-group">
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className="password-input"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setLoginError('');
                        }}
                        required
                    />
                    <span
                        className="input-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </span>
                </div>

                <button type="submit">Đăng nhập</button>
                <div className="login-bottom-links">
                    <Link to="/" className="back-home">Trở về trang chủ</Link>
                    <span>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></span>
                </div>
            </form>
        </div>
    );
};

export default LoginContent;
