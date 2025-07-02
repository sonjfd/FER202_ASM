import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:9999/users/${id}`);
        setUser(res.data);
        setFormData(res.data);
        setPreviewImg(res.data.img);
      } catch (err) {
        console.error('Lỗi khi tải thông tin người dùng:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formDataUpload = new FormData();
  formDataUpload.append('file', file);
formDataUpload.append('upload_preset', 'my_unsigned_preset');

  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dyjolz1us/image/upload', {
      method: 'POST',
      body: formDataUpload,
    });
    const data = await res.json();
    console.log('✅ Ảnh đã upload:', data.secure_url);

    setPreviewImg(data.secure_url); // Cập nhật ảnh xem trước
    setFormData((prev) => ({ ...prev, img: data.secure_url })); // Cập nhật link ảnh trong formData

  } catch (err) {
    console.error('❌ Lỗi khi upload ảnh:', err);
    alert('Lỗi khi tải ảnh lên Cloudinary!');
  }
};




 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const userId = formData.id; 
    const response = await axios.put(`http://localhost:9999/users/${userId}`, formData);
    console.log('Cập nhật thành công:', response.data);
    alert(' Cập nhật thông tin thành công!');
  } catch (error) {
    console.error('Lỗi khi cập nhật:', error);
    alert(' Đã xảy ra lỗi khi cập nhật thông tin.');
  }
};
  if (loading) {
    return <div className="user-loading">Đang tải thông tin người dùng...</div>;
  }

  if (!user) {
    return <div className="user-error">Không tìm thấy người dùng</div>;
  }

  return (
    <div className="user-container">
      <div className="user-grid">
        <div className="user-sidebar">
          <div className="user-buttons">
            <Link to="/lich-su" className="user-btn history">📅 Xem lịch sử phim</Link>
            <Link to="/yeu-thich" className="user-btn favorites">❤️ Danh sách yêu thích</Link>
            <Link to="/" className="user-btn home">🏠 Quay lại trang chủ</Link>
          </div>
        </div>

        <div className="user-info">
          <h3 className="user-info-title">Thông tin người dùng</h3>
          <form className="user-info-grid" onSubmit={handleSubmit}>
            <div className="user-avatar-block">
              <p className="user-label">Ảnh đại diện</p>
              <img src={previewImg || 'https://via.placeholder.com/100'} alt="preview" className="preview-avatar" />
             <input type="file" onChange={handleFileUpload} />

            </div>

            <div className="user-input-pair">
              <div>
                <p className="user-label">Họ và tên</p>
                <input name="fullname" value={formData.fullname || ''} onChange={handleChange} />
              </div>
              <div>
                <p className="user-label">Email</p>
                <input name="email" value={formData.email || ''} onChange={handleChange} />
              </div>
            </div>

            <div className="user-input-pair">
              <div>
                <p className="user-label">Giới tính</p>
                <select name="gender" value={formData.gender || ''} onChange={handleChange}>
                  <option value="Male">Nam</option>
                  <option value="Female">Nữ</option>
                </select>
              </div>
              <div>
                <p className="user-label">Số điện thoại</p>
                <input name="phone" value={formData.phone || ''} onChange={handleChange} />
              </div>
            </div>

            <div className="user-input-pair">
              <div>
                <p className="user-label">Mật khẩu mới</p>
                <input name="password" type="password" onChange={handleChange} />
              </div>
              <div>
                <p className="user-label">Nhập lại mật khẩu</p>
                <input name="confirmPassword" type="password" />
              </div>
            </div>

            <button type="submit" className="save-btn">💾 Cập nhật</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;