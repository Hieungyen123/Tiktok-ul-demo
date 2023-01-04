
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import img from '~/assets/img';
import Menu from '~/components/Popper/Menu';
import { Mailbox, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from './Search';
import config from '~/config'



const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'ire',
                    title: 'Ireland',
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norway',
                },

                {
                    type: 'language',
                    code: 'sw',
                    title: 'Thụy Điển',
                },
                {
                    type: 'language',
                    code: 'Anh',
                    title: 'United Kingdom',
                }, {
                    type: 'language',
                    code: 'fra',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'ita',
                    title: 'Italy',
                },
                {
                    type: 'language',
                    code: 'be',
                    title: 'Belarus',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Spain',
                },
                {
                    type: 'language',
                    code: 'uk',
                    title: 'Ukraine',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'be',
                    title: 'Belarus',
                },
                {
                    type: 'language',
                    code: 'po',
                    title: 'Poland',
                },
                {
                    type: 'language',
                    code: 'ca',
                    title: 'Canada	',
                },
                {
                    type: 'language',
                    code: 'me',
                    title: 'Mexico',
                },

            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const currentUser = true;



    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}><img src={img.logo} alt="Tiktok" /></Link>


                {/* search */}
                <Search />
                {/* end search */}


                <div className={cx('actions')}>
                    {currentUser ? (
                        <>

                            <div className={cx('action-btn')}>
                                <Button outline2 leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                            </div>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Mailbox />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/233889314_1410157662701127_8889914662885568377_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gZHf_SusfmMAX9Zt2A-&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAbfwyP-ydCBKLGWZLe4_e55D-mHJrLMXBkDtkBJXvUuA&oe=63BA46A6"
                                alt="Nguyen Van A"
                                fallback={'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/233889314_1410157662701127_8889914662885568377_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bS2s1abyB4AAX8OepFu&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCamhA8NHDyR9TTddiFAabS0VM97B_2aS3nBFMC_CSKxQ&oe=63B53DA8'}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
