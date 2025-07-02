import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const dropdownRef = useRef();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLoginClick = () => {
        if (!user) {
            navigate('/login');
        }
    };

    const handleAvatarClick = () => {
        dropdownRef.current.classList.toggle('show-dropdown');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <header className="custom-header">
            <div className="custom-logo">
                <span role="img" aria-label="logo">🎥</span>
                <span className="custom-logo-text">DNS<span>Movie</span></span>
            </div>

            <nav className="custom-nav">
                <Link to="/">Trang chủ</Link>
                <Link to="/the-loai">Thể loại</Link>
                <Link to="/quoc-gia">Quốc gia</Link>
                <Link to="/phim-Marvel">Marvel</Link>
            </nav>

            <div className="custom-actions">
                <input type="text" placeholder="Tìm phim..." />
                {!user ? (
                    <button className="custom-login-btn" onClick={handleLoginClick}>
                        Đăng nhập
                    </button>
                ) : (
                    <div className="user-avatar-wrapper" onClick={handleAvatarClick}>
                        <img
                            src={user.img || '/images/macdinh.png'}
                            alt="avatar"
                            className="user-avatar"
                        />
                        <div className="user-dropdown" ref={dropdownRef}>
                            {user.role === 0 ? (
                                <Link to="/admin">Trang Admin</Link>
                            ) : (
                                <Link to={`/profile/${user.id}`}>Trang cá nhân</Link>
                            )}
                            <button onClick={handleLogout}>Đăng xuất</button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
