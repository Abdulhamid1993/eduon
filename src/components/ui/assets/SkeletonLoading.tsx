import React from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
    readonly style?: string;
    readonly arrayLength: number;
}

export default function SkeletonLoading({style, arrayLength}:Props) {

    return (
        <ul className={style}>
            {
                // @ts-ignore
                Array(arrayLength).fill().map((x, index) => (
                    <li key={index}>
                        <div className="img">
                            <Skeleton count={1} width={180} height={40} className="skelet-1" duration={2} delay={2}/>
                        </div>
                        <div className="h1">
                            < Skeleton count={1} width={180} duration={3} delay={3}/>
                        </div>
                        <div className="h2">
                            <Skeleton count={1} width={180} duration={3} delay={3}/>
                        </div>
                    </li>
                ))

            }
        </ul>
    )
}