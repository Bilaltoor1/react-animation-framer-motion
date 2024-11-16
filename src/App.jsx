import { useInView } from 'react-intersection-observer';
import AnimatedElement from './components/AnimatedElement';

function Card({ title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function App() {
    return (
        <div className='bg-green-100 min-h-screen w-full p-8 overflow-x-hidden'>
            <h1 className="font-bold text-4xl text-green-400 w-full text-center mb-12">
                Best way to learn tailwindcss animation
            </h1>
            
            <div className="space-y-32">
                <AnimatedElement className="animate-slide-left">
                    <Card 
                        title="Slide In Animation"
                        description="This content slides in from the left side of the screen."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-grow">
                    <Card 
                        title="Grow Animation"
                        description="This content grows from nothing to full size."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-slide-right">
                    <Card 
                        title="Slide Right Animation"
                        description="This content slides from right nothing to full size."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-slide-in-from-bottom">
                    <Card 
                        title="Slide In Animation"
                        description="This content slides in from the left side of the screen."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-grow">
                    <Card 
                        title="Grow Animation"
                        description="This content grows from nothing to full size."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-slide-right">
                    <Card 
                        title="Slide Right Animation"
                        description="This content slides from right nothing to full size."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-slide-left">
                    <Card 
                        title="Slide In Animation"
                        description="This content slides in from the left side of the screen."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-grow">
                    <Card 
                        title="Grow Animation"
                        description="This content grows from nothing to full size."
                    />
                </AnimatedElement>

                <AnimatedElement className="animate-slide-right">
                    <Card 
                        title="Slide Right Animation"
                        description="This content slides from right nothing to full size."
                    />
                </AnimatedElement>
            </div>
        </div>
    );
}

export default App;