import style from './Image.module.scss';
import { forwardRef, useState } from "react";
import img from '~/assets/img';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback: customFallback, ...props }, ref) => {

    const [fallBack, SetFallBack] = useState('');
    const handleErr = () => {
        SetFallBack(customFallback || img.noImage);
    }

    return <img
        className={classNames(style.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleErr}
    />
});

export default Image;