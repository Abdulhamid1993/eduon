import "./assets/loader.css"

interface Props {
    readonly white?: boolean;
    readonly style?: string | undefined
}

export default function CourseLoader ({style, white}: Props) {

    return (
        <div className={style}>
            <div className={(white && "white ") + "course-loader"}>
                <div className="course-loader-item mb-4 circled" style={{height: "200px"}}/>
                <div className="course-loader-item" style={{height: "25px"}}/>
                <div className="course-loader-item" style={{height: "25px"}}/>
                <div className="course-loader-item" style={{height: "25px"}}/>
                <div className="course-loader-item" style={{height: "25px", width: "40%"}}/>
            </div>
        </div>
    )
}