import React, {Dispatch, SetStateAction, useMemo} from "react";
import Left_list from "../../pages/Courses/img/left.svg";
import Right_list from "../../pages/Courses/img/right.svg";
import "../../components/css/Courses.css";

interface Props {
    readonly setPageNumbers: Dispatch<SetStateAction<number>>;
    readonly pageNumbers: number;
    readonly numbersPage: number | string;

}

export default function PackagePagination({
                                              pageNumbers, setPageNumbers, numbersPage}: Props) {

    const list = useMemo(() => Array(numbersPage || 0).fill(""), [numbersPage]);
    return (
        <>
            {numbersPage > 0 ?
                <div className="courses_section_2_List">
                    <img src={Left_list} alt="" onClick={() => setPageNumbers(pageNumbers - 1)}/>
                        {list?.map((_, idx, arr) => {
                            const number = idx + 1;
                            if (arr.length > 4 && (number === pageNumbers + 3 || number === pageNumbers - 2)) {
                                return (
                                    <button
                                        key={idx}
                                        disabled={true}
                                        className="dots_paginator"
                                    >
                                        ...
                                    </button>
                                );
                            }

                            if (
                                arr.length > 4 &&
                                (number > pageNumbers + 3 || number < pageNumbers - 2) &&
                                number < arr.length - 2
                            ) {
                                return null;
                            }
                            return (
                                <span className={`a ${pageNumbers === number && "active"}`} onClick={() => setPageNumbers(number)}>{number}</span>

                        )
                        })
                        }
                    <img src={Right_list} alt="" onClick={() => setPageNumbers(pageNumbers + 1)} />
                </div> :
                <> </>
            }
        </>
    )
}