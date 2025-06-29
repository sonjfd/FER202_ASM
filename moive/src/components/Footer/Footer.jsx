import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-5" style={{ backgroundColor: '#002b5b', padding: '25px 0', color: 'white' }}>
            <Container >
                <Row className="text-center text-md-start">
                    <Col md={4} className="mb-4">
                        <h5>
                            <span style={{ color: '#f9c74f' }}>🎬 Phim</span><span style={{ color: '#fff' }}>Hay</span>
                        </h5>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li>
                                <Link to="/phim-le" style={{ color: '#ccc', textDecoration: 'none' }}>Phim lẻ</Link>
                            </li>
                            <li>
                                <Link to="/phim-bo" style={{ color: '#ccc', textDecoration: 'none' }}>Phim bộ</Link>
                            </li>
                            <li>
                                <Link to="/the-loai" style={{ color: '#ccc', textDecoration: 'none' }}>Thể loại</Link>
                            </li>
                        </ul>
                    </Col>


                    <Col md={5} className="mb-4 d-flex align-items-center justify-content-center">
                        <blockquote className="blockquote mb-0" style={{ color: '#f9c74f', fontStyle: 'italic', textAlign: 'center' }}>
                            "Phim ảnh là chiếc gương phản chiếu cuộc sống trong tâm trí mỗi người."
                            <br />
                            <span style={{ fontSize: '0.9rem', color: '#ccc' }}>– PhimHay Team</span>
                        </blockquote>
                    </Col>


                    <Col md={3} className="ms mb-4  text-md-start " >
                        <h5 style={{ color: '#f9c74f' }}>Thông tin liên hệ</h5>
                        <p style={{ marginBottom: 4 }}>Đinh Ngọc Sơn</p>
                        <p style={{ marginBottom: 4 }}>Đại học FPT Hà Nội</p>
                        <p style={{ marginBottom: 4 }}>
                            Email: <a href="mailto:sonjfddeptrai@gmail.com" style={{ color: '#f9c74f', textDecoration: 'none' }}>sonjfddeptrai@gmail.com</a>
                        </p>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;
