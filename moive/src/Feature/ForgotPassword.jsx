import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Feature/Login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const navigate = useNavigate();

    const handleCheckEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:9999/users');
            const user = res.data.find(u => u.email === email);

            if (!user) {
                setError('Email không tồn tại!');
                setSuccess('');
                setIsVerified(false);
                return;
            }

            setSuccess('Email hợp lệ. Hãy nhập mật khẩu mới.');
            setError('');
            setIsVerified(true);
        } catch (err) {
            setError('Có lỗi xảy ra.');
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:9999/users');
            const user = res.data.find(u => u.email === email);

            if (!user) return;

            await axios.put(`http://localhost:9999/users/${user.id}`, {
                ...user,
                password: newPassword
            });

            alert('Đổi mật khẩu thành công!');
            navigate('/login');
        } catch (err) {
            setError('Không thể cập nhật mật khẩu.');
        }
    };

    return (
        <div className="login-wrapper">
            <form className="login-box" onSubmit={isVerified ? handleChangePassword : handleCheckEmail}>
                <h2>Quên mật khẩu</h2>

                {error && <div className="login-error">{error}</div>}
                {success && <div className="login-success">{success}</div>}

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Nhập email đã đăng ký"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                        setSuccess('');
                    }}
                    required
                />

                {isVerified && (
                    <>
                        <label htmlFor="newPassword">Mật khẩu mới:</label>
                        <input
                            id="newPassword"
                            type="password"
                            placeholder="Nhập mật khẩu mới"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </>
                )}

                <button type="submit">
                    {isVerified ? 'Đặt lại mật khẩu' : 'Xác minh Email'}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
