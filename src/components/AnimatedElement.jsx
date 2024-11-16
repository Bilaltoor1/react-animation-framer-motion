
import { useInView } from 'react-intersection-observer';

function AnimatedElement({ className, children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div 
            ref={ref}
            className={`${inView ? className : 'opacity-0'} transition-all duration-500`}
        >
            {children}
        </div>
    );
}

export default AnimatedElement;