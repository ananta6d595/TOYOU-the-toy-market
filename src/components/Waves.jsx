import React from 'react';
import Wave from 'react-wavify';

const Waves = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute w-full  ">
                    <Wave
                        fill="#f48037"
                        paused={false}
                        options={{
                            height: 60,
                            amplitude: 15,
                            speed: 0.35,
                            points: 3,
                        }}
                    />
                </div>
                <div className="absolute w-full">
                    <Wave
                        fill="#d2ebf0"
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 20,
                            speed: 0.25,
                            points: 5,
                        }}
                    />
                </div>
                <Wave
                    fill="#008B8B"
                    paused={false}
                    options={{
                        height: 40,
                        amplitude: 20,
                        speed: 0.2,
                        points: 8,
                    }}
                />
            </div>
        </>
    );
};

export default Waves;