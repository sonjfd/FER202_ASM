import { useEffect, useState } from 'react'
import './RegisterContent.css'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import axios from 'axios'




const RegisterContent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullname] = useState('')
    const [gender, setGender] = useState('Male')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:9999/users');
                setUsers(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationMessage = validateForm();

        if (validationMessage) {
            setError(validationMessage);
            return;
        }
        const maxId = users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) : 0;

        const newUser = {
            id: (maxId + 1).toString(),
            username: username,
            password: password,
            fullname: fullname,
            gender: gender,
            email: email,
            phone: phone,
            img: '/images/macdinh.png',
            role: 1,
            status: 1
        }

        try {
            await axios.post('http://localhost:9999/users', newUser)
            alert('Đăng kí thành công')
            navigate('/')

        } catch (err) {
            console.log(err)
        }
    }


    const validateForm = () => {

        if (users.find(u => u.username === username)) {
            return 'Tên đăng nhập này đã tồn tại';
        }
        if (password !== confirmPassword) {
            return 'Mật khẩu không khớp';
        }
        if (password.length < 6) {
            return 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Email không hợp lệ';
        }
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            return 'Số điện thoại không hợp lệ (phải bắt đầu bằng 0 và gồm 10 chữ số)';
        }
        return '';
    };
    return (
        <div className="wrapper">
            <form className="register-box" onSubmit={handleRegister}>
                <h2>Đăng ký tài khoản</h2>
                {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}

                <label>Tên đăng nhập:</label>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label>Mật khẩu:</label>
                <div className="input-group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="input-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </span>
                </div>

                <label>Nhập lại mật khẩu:</label>
                <div className="input-group">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Nhập lại mật khẩu"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span
                        className="input-icon"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                    </span>
                </div>

                <label>Họ và tên:</label>
                <input
                    type="text"
                    placeholder="Họ và tên"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Số điện thoại:</label>
                <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <label>Giới tính:</label>
                <div className="gender-group">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Nam
                    </label>

                    <label style={{ marginLeft: '20px' }}>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Nữ
                    </label>
                </div>

                <button type="submit">Đăng ký</button>

                <div className="register-bottom-links">
                    <span>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></span>
                    <Link to="/" className="back-home"> Trở về trang chủ</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterContent
