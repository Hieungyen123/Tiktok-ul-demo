import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
// import * as searchService from '~/services/searchService';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { UseDebounce } from '~/hooks';


const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();
    const [showResult, setShowResult] = useState(true);
    const [loadding, setLoadding] = useState(false);

    const debounced = UseDebounce(searchValue, 5000);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoadding(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);

            })
            .catch(() => {
                setLoadding(false);
            });

    }, [debounced]);

    // const fetchApi = async () => {
    //     try {
    //         setLoadding(true);
    //         const result = await searchService.search(debounced);
    //         setSearchResult(result);

    //         setLoadding(false);
    //     } catch (error) {
    //         setLoadding(false);
    //         return;
    //     }
    // };

    // fetchApi();

    // eslint-disable-line react-hooks/exhaustive-deps


    const handelChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
    }
    const handelClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([])
    }
    const handelHideResult = () => {
        setShowResult(false);
    }
    return (
        <div>
            <HeadlessTippy
                // appendTo={() => document.body}
                popperOptions={{ modifiers: [{ name: 'flip', enabled: true }] }}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper >
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />
                            })}
                        </PopperWrapper>
                    </div>
                )}

                onClickOutside={handelHideResult}

            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handelChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loadding &&
                        (<button
                            className={cx('clear')}
                            onClick={handelClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)
                    }

                    {loadding && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={handelSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy >
        </div>
    );
}

export default Search;