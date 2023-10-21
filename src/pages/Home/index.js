import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import { SliderHome } from '~/Layout/Components/Slider';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import Dropdown from '../../components/Dropdown';
import { useEffect, useState } from 'react';
import StoreIcon from '@mui/icons-material/Store';
const cx = classNames.bind(styles);
function Home() {
    const locations = [
        {
            title: 'Phúc Long Lê Văn Sỹ',
            slug: 'phuc-long-le-van-sy',
            address: '350 Lê Văn Sỹ, Quận 3,Thành phố Hồ Chí Minh',
            hour: '08:00 - 21:00',
            lat: 10.787509,
            lng: 106.678823,
            image: 'https://phuclong.com.vn/uploads/store/d60195a64c21c8-350lvs.jpg',
            phone: '(028) 7100 1968 (Ext. 20408)',
            url: 'https://www.google.com/maps/place/Ph%C3%BAc+Long+Coffee+%26+Tea+L%C3%AA+V%C4%83n+S%E1%BB%B9/@10.7875193,106.6766423,17z/data=!3m1!4b1!4m5!3m4!1s0x31752fefa3cab5c5:0x4bef4e0fe94b542!8m2!3d10.787514!4d106.678831',
        },
        {
            title: 'Phúc Long 188 Trần Hưng Đạo',
            slug: 'phuc-long-188-tran-hung-dao',
            address: '188 Trần Hưng Đạo, Quận 5,Thành phố Hồ Chí Minh',
            hour: '09:00 - 22:00, Cuối tuần: 08:00 - 22:00',
            lat: 10.752601,
            lng: 106.666603,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20668)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Caf%C3%A9+%26+Tea/@10.7525393,106.6643718,17z/data=!4m8!1m2!2m1!1sPhuc+Long+Coffee+%26+Tea!3m4!1s0x31752ef989363667:0xba76f7c31d057eff!8m2!3d10.7525393!4d106.6665605',
        },
        {
            title: 'Phúc Long Nowzone',
            slug: 'phuc-long-nowzone',
            address: 'TTTM Nowzone, số 235 Nguyễn Văn Cừ, Quận 1,Thành phố Hồ Chí Minh',
            hour: '9:00 - 22:00',
            lat: 10.763924,
            lng: 106.682804,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20518)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Coffee+%26+Tea+Express/@10.7642895,106.6800805,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f194baf891f:0x622fc38bcad7d495!8m2!3d10.7642842!4d106.6822692',
        },
        {
            title: 'Phúc Long Lotte Mart Quận 7',
            slug: 'phuc-long-lotte-mart-Quan-7',
            address: '1F-32, Lotte Mart Quận 7, số 469 Nguyễn Hữu Thọ, Quận 7,Thành phố Hồ Chí Minh',
            hour: '7:00 - 22:30',
            lat: 10.74079,
            lng: 106.702045,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20488)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Coffee+%26+Tea/@10.7410229,106.6998543,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f9f30e2b451:0xed6025284b31d274!8m2!3d10.7410229!4d106.702043',
        },
        {
            title: 'Phúc Long Aeon Mall Bình Tân',
            slug: 'phuc-long-aeon-mall-binh-tan',
            address: 'G17, Aeon Mall Bình Tân, số 01 Đường số 17A, Quận Bình Tân,Thành phố Hồ Chí Minh',
            hour: '9:00-22:00',
            lat: 10.742882178123622,
            lng: 106.61180891943513,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20188)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Coffee+%26+Tea+House/@10.7428848,106.6096061,17z/data=!3m1!4b1!4m5!3m4!1s0x31752dced21e980b:0xd7220a32c00c429a!8m2!3d10.7428795!4d106.6117948',
        },
        {
            title: 'Phúc Long Crescent Mall',
            slug: 'phuc-long-crescent-mall',
            address: 'Crescent Mall, số 101 Tôn Dật Tiên, Phú Mỹ Hưng, Quận 7,Thành phố Hồ Chí Minh',
            hour: '7:00 - 22:30',
            lat: 10.728699,
            lng: 106.718773,
            image: 'https://phuclong.com.vn/uploads/store/297dab8e7bb8cf-crescentmall.jpg',
            phone: '(028) 7100 1968 (Ext. 20648)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Coffee/@10.7291189,106.7164006,17z/data=!3m1!4b1!4m5!3m4!1s0x31752ff2c8ae1849:0x8c0e68de2b2583b9!8m2!3d10.7291136!4d106.7185893',
        },
        {
            title: 'Phúc Long Centre Point',
            slug: 'phuc-long-centre-point',
            address: 'Centre Point, số 106 Nguyễn Văn Trỗi, Quận Phú Nhuận,Thành phố Hồ Chí Minh',
            hour: '8:00-18:00',
            lat: 10.7970586,
            lng: 106.6734174,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20528)',
            url: 'https://www.google.com/maps/place/Tr%C3%A0+c%C3%A0+ph%C3%AA+Ph%C3%BAc+Long/@10.9328878,106.5714577,11z/data=!4m8!1m2!2m1!1sphuc+long+coffee+%26+tea!3m4!1s0x317529299d9cb8cf:0xa4b5f46632edf1ea!8m2!3d10.7972494!4d106.6735178',
        },
        {
            title: 'Phúc Long Cộng Hòa',
            slug: 'phuc-long-cong-hoa',
            address: '1B Cộng Hòa, Quận Tân Bình,Thành phố Hồ Chí Minh',
            hour: '7:00-22:30',
            lat: 10.8004912,
            lng: 106.6606757,
            image: 'https://phuclong.com.vn/uploads/store/fc0baef0e12374-1bcngha.jpg',
            phone: '(028) 7100 1968 (Ext. 20238)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Cafe/@10.8004967,106.6584824,17z/data=!3m1!4b1!4m5!3m4!1s0x31752930edb5b707:0xa554620f19813c8f!8m2!3d10.8004914!4d106.6606711',
        },
        {
            title: 'Phúc Long RomeA',
            slug: 'phuc-long-romea',
            address: 'B-004A, TTTM RomeA, số 117 Nguyễn Đình Chiểu, Quận 3,Thành phố Hồ Chí Minh',
            hour: '08:00 - 22:00',
            lat: 10.777984,
            lng: 106.689742,
            image: 'https://phuclong.com.vn/uploads/store/805a7e5384e61a-romea.jpg',
            phone: '(028) 7100 1968 (Ext. 20428)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Coffee+%26+Tea/@10.7840479,106.6909601,15z/data=!4m8!1m2!2m1!1zUGjDumMgTG9uZyBuZ3V54buFbiDEkWluaA!3m4!1s0x31752ffe5d030fe9:0x24b2df0a79b6dd1f!8m2!3d10.7778832!4d106.6899432',
        },
        {
            title: 'Phúc Long Golden Plaza',
            slug: 'phuc-long-golden-plaza',
            address: 'G-001, TTTM Golden Plaza, số 922 Nguyễn Trãi, Quận 5,Thành phố Hồ Chí Minh',
            hour: '8:00-22:30',
            lat: 10.7535934,
            lng: 106.654622,
            image: ' ',
            phone: '(028) 7100 1968 (Ext. 20458)',
            url: 'https://www.google.com/maps/place/Phuc+Long+Cofee+%26+Tea+Express/@10.7530849,106.6542873,19z/data=!4m5!3m4!1s0x31752ef36213ded7:0xf9064456db46caa6!8m2!3d10.7536385!4d106.6545137?hl=en-AU',
        },
       
    ];
    const [city, setCity] = useState('Thành phố Hồ Chí Minh');

    const [district, setDistric] = useState('Quận');

    useEffect(() => {
        setDistric('Quận');
    }, [city]);

    const listCity = [
        'Tỉnh/ Thành phố',
        'Thành phố Hồ Chí Minh',
        'Thành phố Phú Yên',
        'Tỉnh Thái Nguyên',
        'Tỉnh Bắc Giang',
        'Tỉnh Vĩnh Phúc',
        'Tỉnh Thanh Hóa',
        'Tỉnh Quảng Nam',
        'Tỉnh Khánh Hòa',
        'Tỉnh Đồng Nai',
        'Tỉnh Tiền Giang',
        'Tỉnh Bến Tre',
    ];
    let listDistrict = [];
    if (city === 'Thành phố Hồ Chí Minh') {
        listDistrict = [
            'Quận 1',
            'Quận 2',
            'Quận 3',
            'Quận 4',
            'Quận 5',
            'Quận 6',
            'Quận 7',
            'Quận 8',
            'Quận 9',
            'Quận 10',
        ];
    }
    if (city === 'Tỉnh Thái Nguyên') {
        listDistrict = ['Thành phố Thái Nguyên'];
    }
    if (city === 'Thành phố Hải phòng') {
        listDistrict = ['Quận Ngô Quyền', 'Huyện Tiên Lãng', 'Huyện Thùy Nguyên', 'Huyện An Dương'];
    }
    if (city === 'Tỉnh Bắc Giang') {
        listDistrict = ['Thành phố Bắc Giang'];
    }

    const address = locations.map((location) => location.address);

    const Filter = locations.filter((location, index) => {
        return address[index].includes(city) && address[index].includes(district);
    });

    return (
        <>
            <SliderHome />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Grid container rowSpacing={1}>
                        <Grid item md={6} xs={12}>
                            <img
                                className={cx('img-1')}
                                src="https://phuclong.com.vn/uploads/post/20649d183ca5f1-bannertrangchu.jpg"
                                alt="tra"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className={cx('item')}>
                                <h3 className={cx('title')}>TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ</h3>
                                <p className={cx('text')}>
                                    Trải Qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng
                                    hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi
                                    thưởng thức, TLOVE liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo
                                    đi đầu trong ngành trà và cà phê.{' '}
                                </p>

                                <p className={cx('text')}>
                                    Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra
                                    từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự
                                    trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và
                                    cà phê ngày càng bay cao, vươn xa.
                                </p>
                                <Link to="/aboutus">
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        sx={{
                                            fontSize: '1.3rem',
                                            backgroundColor: '#fff',
                                            color: '#0c713d',
                                            borderColor: '#0c713d',
                                            '&:hover': {
                                                backgroundColor: '#0c713d',
                                                color: '#fff',
                                                borderColor: '#0c713d',
                                            },
                                        }}
                                    >
                                        XEM THÊM
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className={cx('item')}>
                                <h3 className={cx('title')}>ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NĂNG LƯỢNG & NHIỆT HUYẾT</h3>
                                <p className={cx('text')}>
                                    Trong suốt Quá trình hoạt động và phát triển, đội ngũ Quản lý và nhân viên của Tlove
                                    Coffee & Tea, Qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê
                                    dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ
                                    năng động và sáng tạo.
                                </p>

                                <Link to="/aboutus">
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        sx={{
                                            fontSize: '1.3rem',
                                            backgroundColor: '#fff',
                                            color: '#0c713d',
                                            borderColor: '#0c713d',
                                            '&:hover': {
                                                backgroundColor: '#0c713d',
                                                color: '#fff',
                                                borderColor: '#0c713d',
                                            },
                                        }}
                                    >
                                        GIA NHẬP ĐỘI NGŨ TLOVE
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div>
                                <img
                                    className={cx('img-1')}
                                    src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/391643081_884250840038817_3870985014650658222_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6t_PqSq8Lq4AX9K5ccw&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCz8gcKl3ViusTfSlDIsuOVecvURDQkJS6SUm7RcHYTZA&oe=6534978C"
                                    alt="tra"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={cx('map')}>
                    <div className={cx('map-content')}>
                        <h2 className={cx('heading')}>HỆ THỐNG CỬA HÀNG</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div className={cx('dropdown')}>
                                    <Dropdown options={listCity} selected={city} setSelected={setCity} />
                                    <Dropdown options={listDistrict} selected={district} setSelected={setDistric} />
                                </div>
                                <h4>ĐỊA CHỈ CỬA HÀNG</h4>
                                <ul className={cx('map-list-store')}>
                                    {Filter.map((location) => (
                                        <li>
                                            <StoreIcon sx={{ fontSize: '34px' }} />
                                            <div className={cx('infor')}>
                                                {location.title} - {location.address}
                                                <div className={cx('phone')}>Số điện thoại : {location.phone}</div>
                                            </div>

                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    fontSize: '1.3rem',
                                                    backgroundColor: '#0c713d',
                                                    color: '#fff',
                                                    borderColor: '#fff',
                                                    '&:hover': {
                                                        borderColor: 'red',
                                                    },
                                                }}
                                                onClick={() => window.open(location.url, '_blank')}
                                            >
                                                Chỉ đường
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
