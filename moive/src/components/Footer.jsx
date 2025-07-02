import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="footer mt-5"
            style={{
                backgroundColor: '#121212',
                padding: '30px 0',
                color: '#eeeeee',
            }}
        >
            <Container>
                <Row className="justify-content-between align-items-start">
                
                    <Col md={4}>
                        <h5 style={{ fontWeight: 'bold', color: '#00ADB5' }}>
                            🎥 Movie<span style={{ color: '#ffffff' }}>Zone</span>
                        </h5>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li>
                                <Link
                                    to="/phim-le"
                                    style={{
                                        color: '#bbbbbb',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Phim lẻ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/phim-bo"
                                    style={{
                                        color: '#bbbbbb',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Phim bộ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/the-loai"
                                    style={{
                                        color: '#bbbbbb',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Thể loại
                                </Link>
                            </li>
                        </ul>
                    </Col>

                  
                    <Col md={4} className="text-md-end">
                        <h5 style={{ color: '#00ADB5' }}>Liên hệ</h5>
                        <p style={{ marginBottom: 4 }}>Đinh Ngọc Sơn</p>
                        <p style={{ marginBottom: 4 }}>Đại học FPT Hà Nội</p>
                        <p style={{ marginBottom: 4 }}>
                            Email:{' '}
                            <a
                                href="mailto:sonjfddeptrai@gmail.com"
                                style={{
                                    color: '#00ADB5',
                                    textDecoration: 'none',
                                }}
                            >
                                sonjfddeptrai@gmail.com
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
