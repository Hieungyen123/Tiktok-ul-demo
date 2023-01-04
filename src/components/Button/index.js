import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';



const cx = classNames.bind(styles)

function Button({
    to,
    href,
    outline2 = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    round = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    if (disabled) {
        // delete prop.onClick;

        Object.keys(props).forEach(element => {
            if (element.startsWith('on') && typeof props[element] === 'function') {
                delete props[element]
            }
        });
    }
    // dùng to cho link nội bộ
    if (to) {
        props.to = to
        Comp = Link
    }
    // dùng href cho link bên ngoài
    else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',
        {
            primary,
            outline,
            outline2,
            small,
            large,
            text,
            disabled,
            round,
            [className]: className,
        })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span >}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span >}
        </Comp>
    );
}

export default Button;