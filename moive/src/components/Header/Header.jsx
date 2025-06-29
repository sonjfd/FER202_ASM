import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button, Image } from 'react-bootstrap';

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Navbar
            expand="lg"
            style={{
                backgroundColor: '#002b5b', 
                color: '#004085', 
            }}
            className="shadow-sm"
        >
            <Container fluid>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ color: 'white', fontWeight: 'bold' }}
                >
                    🎬 PhimHay
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/phim-le" style={{ color: 'white' }}>
                            Phim lẻ
                        </Nav.Link>
                        <Nav.Link as={Link} to="/phim-bo" style={{ color: 'white' }}>
                            Phim bộ
                        </Nav.Link>
                        <NavDropdown
                            title={<span style={{ color: 'white' }}>Thể loại</span>}
                            id="genre-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/the-loai/hanh-dong">Hành động</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/the-loai/hai-huoc">Hài hước</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/the-loai/tinh-cam">Tình cảm</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/gioi-thieu" style={{ color: 'white' }}>
                            Giới thiệu
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        {user ? (
                            <>
                                <NavDropdown
                                    title={
                                        <span style={{ color: 'white' }}>
                                            <Image
                                                src={user.img || '/images/macdinh.png'}
                                                roundedCircle
                                                width="30"
                                                height="30"
                                                className="me-2"
                                            />
                                            {user.fullname || user.username}
                                        </span>
                                    }
                                    id="user-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to={`/profile/${user.id}`}>Hồ sơ</NavDropdown.Item>
                                    {user.role === 0 && (
                                        <NavDropdown.Item as={Link} to="/admin">Trang Admin</NavDropdown.Item>
                                    )}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        onClick={() => {
                                            localStorage.removeItem('user');
                                            window.location.reload();
                                        }}
                                    >
                                        Đăng xuất
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Button
                                as={Link}
                                to="/login"
                                variant="light"
                                style={{ color: 'black', borderColor: '#004085' }}
                            >
                                Đăng nhập
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
